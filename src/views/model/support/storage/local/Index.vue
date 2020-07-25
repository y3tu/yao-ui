<template>
    <div class="app-container" style="padding: 8px;">
        <!--工具栏-->
        <div class="head-container">
            <div v-if="crud.props.searchToggle">
                <!-- 搜索 -->
                <el-input v-model="crud.params.blurry" clearable size="small" placeholder="输入内容模糊搜索" style="width: 200px;" class="filter-item"
                          @keyup.enter.native="crud.toQuery"/>
                <date-range-picker v-model="crud.params.createTime" class="date-item"/>
                <rrOperation/>
            </div>
            <crudOperation :permission="permission">
                <!-- 新增 -->
                <el-button
                        slot="left"
                        v-has-permission="['storage:upload']"
                        class="filter-item"
                        size="mini"
                        type="primary"
                        icon="el-icon-upload"
                        @click="crud.toAdd">上传
                </el-button>
                <el-button
                        slot="right"
                        class="filter-item"
                        size="mini"
                        type="primary"
                        icon="el-icon-download"
                        @click="downloadBatch">下载
                </el-button>
            </crudOperation>
        </div>
        <!--表单组件-->
        <el-dialog append-to-body :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0"
                   :title="crud.status.add ? '文件上传' : '编辑文件'"
                   width="500px">
            <el-form ref="form" :model="form" size="small" label-width="80px">
                <el-form-item label="文件名">
                    <el-input v-model="form.name" style="width: 370px;"/>
                </el-form-item>
                <!--   上传文件   -->
                <el-form-item v-if="crud.status.add" label="上传">
                    <el-upload
                            ref="upload"
                            :limit="1"
                            :before-upload="beforeUpload"
                            :auto-upload="false"
                            :headers="headers"
                            :on-success="handleSuccess"
                            :on-error="handleError"
                            :action="fileUploadApi + '?name=' + form.name">
                        <div class="my-upload"><i class="el-icon-upload"/> 添加文件</div>
                        <div slot="tip" class="el-upload__tip">可上传任意格式文件，且不超过100M</div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="text" @click="crud.cancelCU">取消</el-button>
                <el-button v-if="crud.status.add" :loading="loading" type="primary" @click="upload">确认</el-button>
                <el-button v-else :loading="crud.status.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
            </div>
        </el-dialog>
        <!--表格渲染-->
        <el-table ref="table" v-loading="crud.loading" :data="crud.data" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
            <el-table-column type="selection" width="55"/>
            <el-table-column prop="name" label="文件名">
                <template slot-scope="scope">
                    <el-popover
                            :content="'/support/file/localStorage/file/'+scope.row.realName"
                            placement="top-start"
                            title="路径"
                            width="200"
                            trigger="hover">
                        <a slot="reference"
                           href="javascript:;"
                           @click="download(scope.row)"
                           class="el-link--primary"
                           style="word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color: #1890ff;font-size: 13px;"
                           target="_blank">
                            {{ scope.row.name }}
                        </a>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="path" label="预览图">
                <template slot-scope="{row}">
                    <el-image
                            :src="row.previewImageUrl"
                            :preview-src-list="[row.previewImageUrl]"
                            fit="contain"
                            lazy
                            class="el-avatar">
                        <div slot="error">
                            <i class="el-icon-document"/>
                        </div>
                    </el-image>
                </template>
            </el-table-column>
            <el-table-column prop="suffix" label="文件类型"/>
            <el-table-column prop="type" label="类别"/>
            <el-table-column prop="fileSize" label="大小"/>
            <el-table-column prop="operate" label="操作人"/>
            <el-table-column prop="createTime" label="创建日期">
                <template slot-scope="scope">
                    <span>{{ parseTime(scope.row.createTime) }}</span>
                </template>
            </el-table-column>
        </el-table>
        <!--分页组件-->
        <pagination/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getToken} from '@/utils/auth'
    import crudFile, {previewImage, download, downloadBatch} from './Api'
    import CRUD, {presenter, header, form, crud} from '@crud/crud'
    import rrOperation from '@crud/RR.operation'
    import crudOperation from '@crud/CRUD.operation'
    import pagination from '@crud/Pagination'
    import DateRangePicker from '@/components/DateRangePicker'
    import Vue from "vue";

    const defaultForm = {id: null, name: ''};
    export default {
        components: {pagination, crudOperation, rrOperation, DateRangePicker},
        cruds() {
            return CRUD({title: '文件', url: 'support/file/localStorage/page', idField: 'storageId', crudMethod: {...crudFile}})
        },
        mixins: [presenter(), header(), form(defaultForm), crud()],
        data() {
            return {
                delAllLoading: false,
                loading: false,
                headers: {'Authorization': 'bearer ' + getToken()},
                permission: {
                    edit: ['storage:update'],
                    del: ['storage:delete']
                },
            }
        },
        computed: {
            ...mapGetters([
                'baseApi',
                'fileUploadApi'
            ])
        },
        created() {
            this.crud.optShow.add = false;
            this.crud.optShow.download = false;
        },
        methods: {
            // 上传文件
            upload() {
                this.$refs.upload.submit()
            },
            beforeUpload(file) {
                let isLt2M = true;
                isLt2M = file.size / 1024 / 1024 < 100;
                if (!isLt2M) {
                    this.loading = false;
                    this.$message.error('上传文件大小不能超过 100MB!')
                }
                this.form.name = file.name;
                return isLt2M
            },
            beforeCrudRefresh() {
                //刷新前设置图片预览url地址
                this.crud.data.forEach(storage => {
                    storage['previewImageUrl'] = '';
                });
            },
            afterCrudRefresh() {
                if (this.crud.data) {
                    this.crud.data.forEach((storage) => {
                        if (storage.type === '图片') {
                            //因为获取服务器图片需要验证token <img src='地址'/> 不能满足要求，所以在这另写查询图片url赋值给img标签
                            previewImage(this.baseApi + '/support/file/localStorage/file/' + storage.storageId).then(res => {
                                Vue.set(storage, 'previewImageUrl', res);
                            });
                        }
                    });
                }
            },
            handleSuccess(response, file, fileList) {
                this.crud.notify('上传成功', CRUD.NOTIFICATION_TYPE.SUCCESS);
                this.$refs.upload.clearFiles();
                this.crud.status.add = CRUD.STATUS.NORMAL;
                this.crud.resetForm();
                this.crud.toQuery()
            },
            // 监听上传失败
            handleError(e, file, fileList) {
                const msg = JSON.parse(e.message);
                this.$notify({
                    title: msg.message,
                    type: 'error',
                    duration: 2500
                });
                this.loading = false
            },
            download(row) {
                download(row.storageId, row.realName);
            },
            downloadBatch() {
                let selections = this.crud.selections;
                if (selections.length > 0) {
                    let ids = new Array();
                    selections.forEach(data => {
                        ids.push(data.storageId);
                    });
                    downloadBatch(ids, "批量下载.zip");
                } else {
                    this.$notify({
                        title: '请勾选需要下载的文件',
                        type: 'warning',
                        duration: 2500
                    });
                }

            }
        }
    }
</script>

<style scoped>
    ::v-deep .el-image__error, .el-image__placeholder {
        background: none;
    }

    ::v-deep .el-image-viewer__wrapper {
        top: 55px;
    }
</style>
