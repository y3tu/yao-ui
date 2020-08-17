<template>
    <div class="app-container">
        <!--工具栏-->
        <div class="head-container">
            <div v-if="crud.props.searchToggle">
                <!-- 搜索 -->
                <label class="el-form-item-label">表单名称</label>
                <el-input v-model="crud.entity.name" clearable placeholder="表单名称" style="width: 185px;" class="filter-item" @keyup.enter.native="crud.toQuery"/>
                <label class="el-form-item-label">表单编码</label>
                <el-input v-model="crud.entity.code" clearable placeholder="表单编码" style="width: 185px;" class="filter-item" @keyup.enter.native="crud.toQuery"/>
                <label class="el-form-item-label">创建时间</label>
                <el-date-picker
                        v-model="crud.params.createTimeArr"
                        :default-time="['00:00:00','23:59:59']"
                        type="daterange"
                        range-separator=":"
                        size="small"
                        class="date-item"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"/>
                <rrOperation :crud="crud"/>
            </div>
            <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
            <crudOperation :permission="permission"/>
        </div>
        <!--表单组件-->
        <el-dialog :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="500px">
            <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
                <el-form-item label="表单名称">
                    <el-input v-model="form.name" style="width: 370px;"/>
                </el-form-item>
                <el-form-item label="表单编码">
                    <el-input v-model="form.code" style="width: 370px;"/>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="text" @click="crud.cancelCU">取消</el-button>
                <el-button :loading="crud.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
            </div>
        </el-dialog>
        <!--表格渲染-->
        <el-table ref="table" v-loading="crud.loading" :data="crud.data" size="small" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
            <el-table-column type="selection" width="55"/>
            <el-table-column prop="name" label="表单名称" />
            <el-table-column prop="code" label="表单编码"/>
            <el-table-column prop="json" label="表单json字符串" show-overflow-tooltip/>
            <el-table-column prop="status" label="状态">
                <template slot-scope="scope">
                    <span>{{ scope.row.status===0?'正常':'禁用' }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间">
                <template slot-scope="scope">
                    <span>{{ parseTime(scope.row.createTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="updateTime" label="更新时间">
                <template slot-scope="scope">
                    <span>{{ parseTime(scope.row.updateTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column v-has-permission="['dynamicForm:update','dynamicForm:delete']" label="操作" width="280px" align="center">
                <template slot-scope="scope">
                    <udOperation
                            :data="scope.row"
                            :permission="permission">
                        <router-link slot="right" :to="'/dynamicFormDesign?code=' + scope.row.code">
                            <el-button type="success" size="mini" icon="el-icon-view" />
                        </router-link>
                    </udOperation>
                </template>
            </el-table-column>
        </el-table>
        <!--分页组件-->
        <pagination/>
    </div>
</template>

<script>
    import crudDynamicForm from './Api.js'
    import CRUD, {presenter, header, form, crud} from '@crud/crud'
    import rrOperation from '@crud/RR.operation'
    import crudOperation from '@crud/CRUD.operation'
    import udOperation from '@crud/UD.operation'
    import pagination from '@crud/Pagination'

    const defaultForm = {id: null, name: null, code: null, jsonTemplate: null, status: null, createTime: null, updateTime: null}
    export default {
        name: 'DynamicForm',
        components: {pagination, crudOperation, rrOperation, udOperation},
        mixins: [presenter(), header(), form(defaultForm), crud()],
        cruds() {
            return CRUD({title: '动态表单', url: 'support/online/dynamicForm/page', idField: 'id', sort: 'id,desc', crudMethod: {...crudDynamicForm}})
        },
        data() {
            return {
                permission: {
                    add: ['dynamicForm:create'],
                    edit: ['dynamicForm:update'],
                    del: ['dynamicForm:delete']
                },
                rules: {}
            }
        },
        methods: {
            // 钩子：在获取表格数据之前执行，false 则代表不获取数据
            [CRUD.HOOK.beforeRefresh]() {
                return true
            }
        }
    }
</script>

<style scoped>

</style>
