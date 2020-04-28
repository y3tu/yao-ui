<template>
    <div class="app-container" style="padding: 8px;">
        <!--工具栏-->
        <div class="head-container">
            <div v-if="crud.props.searchToggle">
                <!-- 搜索 -->
                <el-input v-model="query.blurry" clearable size="small" placeholder="输入内容模糊搜索" style="width: 200px" class="filter-item"
                          @keyup.enter.native="crud.toQuery"/>
                <el-date-picker
                        v-model="query.createTime"
                        :default-time="['00:00:00','23:59:59']"
                        type="daterange"
                        range-separator=":"
                        size="small"
                        class="date-item"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"/>
                <rrOperation :crud="crud"/>
            </div>
            <crudOperation :permission="permission">
                <el-button
                        slot="left"
                        v-hasPermission="['storage:add']"
                        class="filter-item"
                        size="mini"
                        type="primary"
                        icon="el-icon-upload"
                        @click="crud.toAdd">
                    上传
                </el-button>
            </crudOperation>
        </div>
        <!--表单组件-->

        <!--表格渲染-->
        <el-table ref="table" v-loading="crud.loading" :data="crud.data" style="width:100%" @selection-change="crud.selectionChangeHandler">
            <el-table-column type="selection" width="55" />

        </el-table>
    </div>
</template>

<script>

    import CRUD, {presenter, header, form, crud} from '@crud/crud'
    import rrOperation from '@crud/RR.operation'
    import crudOperation from '@crud/CRUD.operation'
    import pagination from '@crud/Pagination'
    import crudFile from './Api'

    // crud交由presenter持有
    const defaultCrud = CRUD({title: '文件', url: 'api/localStorage', crudMethod: {...crudFile}});
    const defaultForm = {id: null, name: ''};

    export default {
        name: 'local',
        components: {pagination, crudOperation, rrOperation},
        mixins: [presenter(defaultCrud), header(), form(defaultForm), crud()],
        data() {
            return {
                permission: {
                    edit: ['storage:edit'],
                    del: ['storage:del']
                }
            }
        },
        created() {
            this.crud.optShow.add = false
        },

    }
</script>

<style>

</style>