<template>
    <div class="app-container" style="padding: 8px;">
        <!--表单组件-->
        <eForm/>
        <!--工具栏-->
        <div class="head-container">
            <div v-if="crud.props.searchToggle">
                <!-- 搜索 -->
                <label class="el-form-item-label">图表名称</label>
                <el-input v-model="crud.entity.name" clearable placeholder="图表名称" style="width: 185px;" class="filter-item" @keyup.enter.native="crud.toQuery"/>
                <label class="el-form-item-label">图表编码</label>
                <el-input v-model="crud.entity.code" clearable placeholder="图表编码" style="width: 185px;" class="filter-item" @keyup.enter.native="crud.toQuery"/>
                <rrOperation :crud="crud"/>
            </div>
            <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
            <crudOperation :permission="permission"/>
        </div>
        <!--表格渲染-->
        <el-table ref="table" v-loading="crud.loading" :data="crud.data" size="small" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
            <el-table-column type="selection" width="55"/>
            <el-table-column prop="name" label="图表名称"/>
            <el-table-column prop="code" label="图表编码"/>
            <el-table-column prop="cgrSql" label="查询数据SQL"/>
            <el-table-column prop="xaxisField" label="x轴数据字段"/>
            <el-table-column prop="yaxisText" label="y轴文字描述"/>
            <el-table-column v-has-permission="['graphReport:update','graphReport:delete']" label="操作" width="200px" align="center">
                <template slot-scope="scope">
                    <udOperation
                            :data="scope.row"
                            :permission="permission">
                        <el-button slot="right" v-has-permission="permission.edit"  size="mini" type="primary" icon="el-icon-s-tools" @click="testFunction(scope.row.id)"/>
                    </udOperation>
                </template>
            </el-table-column>
        </el-table>
        <!--分页组件-->
        <pagination/>
    </div>
</template>

<script>
    import crudGraphReportHead from './Api.js'
    import CRUD, {presenter, header, crud} from '@crud/crud'
    import rrOperation from '@crud/RR.operation'
    import crudOperation from '@crud/CRUD.operation'
    import udOperation from '@crud/UD.operation'
    import pagination from '@crud/Pagination'

    import eForm from './Form'

    export default {
        name: 'GraphReport',
        components: {eForm, pagination, crudOperation, rrOperation, udOperation},
        mixins: [presenter(), header(), crud()],
        cruds() {
            return CRUD({
                title: '图表配置',
                url: 'support/report/graphReport/page',
                idField: 'id',
                sort: 'id,desc',
                crudMethod: {...crudGraphReportHead}
            })
        },
        data() {
            return {
                permission: {
                    add: ['graphReport:create'],
                    edit: ['graphReport:update'],
                    del: ['graphReport:delete']
                }
            }
        },
        methods: {
            // 钩子：在获取表格数据之前执行，false 则代表不获取数据
            [CRUD.HOOK.beforeRefresh]() {
                return true
            },
            testFunction(id){
                this.$router.push({path: '/report/graphReportChart', query: {"id": id}})
            }
        }
    }
</script>

<style scoped>

</style>
