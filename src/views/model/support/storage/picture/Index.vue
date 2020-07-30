<template>
    <div class="app-container">
        <!--工具栏-->
        <div class="head-container">
            <div v-if="crud.props.searchToggle">
                <!-- 搜索 -->
                <label class="el-form-item-label">文件名</label>
                <el-input v-model="crud.entity.fileName" clearable size="small" placeholder="输入文件名" style="width: 200px;" class="filter-item"
                          @keyup.enter.native="crud.toQuery"/>
                <label class="el-form-item-label">创建时间</label>
                <date-range-picker v-model="crud.params.createTimeArr" class="date-item"/>
                <rrOperation/>
            </div>
            <crudOperation :permission="permission">
                <!-- 上传 -->
                <el-button
                        slot="left"
                        v-has-permission="['picture:upload']"
                        class="filter-item"
                        size="mini"
                        type="primary"
                        icon="el-icon-upload"
                        @click="dialog = true">上传
                </el-button>
                <el-tooltip slot="right" class="item" effect="dark" content="使用同步功能需要在 https://sm.ms/login 中注册账号，并且在 application.yml 文件中修改 Secret Token"
                            placement="top-start">
                    <el-button
                            v-has-permission="['picture:upload']"
                            class="filter-item"
                            size="mini"
                            type="success"
                            icon="el-icon-refresh"
                            :loading="syncLoading"
                            @click="sync">同步
                    </el-button>
                </el-tooltip>
            </crudOperation>
        </div>
        <!--上传图片-->
        <el-dialog :visible.sync="dialog" :close-on-click-modal="false" append-to-body width="600px" @close="doSubmit">
            <el-upload
                    :on-preview="handlePictureCardPreview"
                    :before-remove="handleBeforeRemove"
                    :on-success="handleSuccess"
                    :on-error="handleError"
                    :headers="headers"
                    :file-list="fileList"
                    :action="imagesUploadApi"
                    list-type="picture-card">
                <i class="el-icon-plus"/>
            </el-upload>
            <el-dialog append-to-body :visible.sync="dialogVisible">
                <img :src="dialogImageUrl" width="100%" alt="">
            </el-dialog>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="doSubmit">确认</el-button>
            </div>
        </el-dialog>
        <!--表格渲染-->
        <el-table ref="table" v-loading="crud.loading" :data="crud.data" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
            <el-table-column type="selection" width="55"/>
            <el-table-column show-overflow-tooltip width="200" prop="fileName" label="文件名"/>
            <el-table-column prop="username" label="上传者"/>
            <el-table-column ref="table" :show-overflow-tooltip="true" prop="url" label="缩略图">
                <template slot-scope="{row}">
                    <el-image
                            :src="row.url"
                            :preview-src-list="[row.url]"
                            fit="contain"
                            lazy
                            class="el-avatar"/>
                </template>
            </el-table-column>
            <el-table-column prop="fileSize" label="文件大小"/>
            <el-table-column prop="height" label="高度"/>
            <el-table-column prop="width" label="宽度"/>
            <el-table-column prop="createTime" label="创建日期">
                <template slot-scope="scope">
                    <span>{{ parseTime(scope.row.createTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="control" label="操作" width="150px" align="center">
                <template slot-scope="scope">
                    <el-button  size="mini" type="primary" icon="el-icon-copy-document" @click="handleClipboard(scope.row.url,$event)"/>
                </template>
            </el-table-column>

        </el-table>
        <!--分页组件-->
        <pagination/>
    </div>
</template>

<script>
    import crudPicture from './Api.js'
    import {mapGetters} from 'vuex'
    import {getToken} from '@/utils/auth'
    import clipboard from '@/utils/clipboard'
    import CRUD, {presenter, header, form, crud} from '@crud/crud'
    import rrOperation from '@crud/RR.operation'
    import crudOperation from '@crud/CRUD.operation'
    import udOperation from '@crud/UD.operation'
    import pagination from '@crud/Pagination'
    import DateRangePicker from '@/components/DateRangePicker'


    const defaultForm = {
        pictureId: null,
        fileName: null,
        md5code: null,
        fileSize: null,
        url: null,
        deleteUrl: null,
        height: null,
        width: null,
        username: null,
        createTime: null
    };
    export default {
        name: 'Picture',
        components: {pagination, crudOperation, rrOperation, udOperation, DateRangePicker},
        mixins: [presenter(), header(), form(defaultForm), crud()],
        cruds() {
            return CRUD({title: 'Picture', url: 'support/file/picture/page', idField: 'pictureId', sort: 'pictureId,desc', crudMethod: {...crudPicture}})
        },
        data() {
            return {
                permission: {
                    edit: ['picture:update'],
                    del: ['picture:delete']
                },
                dialog: false,
                syncLoading: false,
                headers: {'Authorization': 'bearer ' + getToken()},
                dialogImageUrl: '',
                dialogVisible: false,
                fileList: [],
                pictures: []
            }
        },
        computed: {
            ...mapGetters([
                'imagesUploadApi'
            ])
        },
        created() {
            this.crud.optShow.add = false;
            this.crud.optShow.edit = false;
            this.crud.optShow.download = false
        },
        methods: {
            handleSuccess(response, file, fileList) {
                const uid = file.uid;
                const id = response.id;
                this.pictures.push({uid, id})
            },
            handleBeforeRemove(file, fileList) {
                for (let i = 0; i < this.pictures.length; i++) {
                    if (this.pictures[i].uid === file.uid) {
                        crudPicture.del(Array.of(this.pictures[i].id)).then(res => {
                        });
                        return true
                    }
                }
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true
            },
            // 刷新列表数据
            doSubmit() {
                this.fileList = [];
                this.dialogVisible = false;
                this.dialogImageUrl = '';
                this.dialog = false;
                this.crud.toQuery()
            },
            // 监听上传失败
            handleError(e, file, fileList) {
                const msg = JSON.parse(e.message);
                this.$notify({
                    title: msg.message,
                    type: 'error',
                    duration: 2500
                })
            },
            sync() {
                this.syncLoading = true;
                crudPicture.sync().then(res => {
                    this.crud.notify('同步成功', CRUD.NOTIFICATION_TYPE.SUCCESS);
                    this.crud.toQuery();
                    this.syncLoading = false
                }).catch(err => {
                    this.syncLoading = false;
                    this.crud.notify('同步失败', CRUD.NOTIFICATION_TYPE.ERROR);
                })
            },
            handleClipboard(text, event) {
                clipboard(text, event)
            }
        }
    }
</script>

<style scoped>

</style>
