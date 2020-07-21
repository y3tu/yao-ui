<template>
    <div class="app-container">
        <!--工具栏-->
        <div class="head-container">
            <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
            <div v-if="crud.props.searchToggle">
                <!-- 搜索 -->
                <el-input v-model="crud.entity.penName" clearable size="small" placeholder="请输入笔名" style="width: 200px" class="filter-item"
                          @keyup.enter.native="crud.toQuery"/>
                <rrOperation :crud="crud"/>
            </div>
        </div>
        <crudOperation :permission="permission"/>
        <!--表单组件-->
        <el-dialog :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="500px">
            <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
                <el-form-item label="用户ID">
                    <el-input v-model="form.userId" style="width: 370px;"/>
                </el-form-item>
                <el-form-item label="邀请码" prop="inviteCode">
                    <el-input v-model="form.inviteCode" style="width: 370px;"/>
                </el-form-item>
                <el-form-item label="笔名" prop="penName">
                    <el-input v-model="form.penName" style="width: 370px;"/>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input v-model="form.telPhone" style="width: 370px;"/>
                </el-form-item>
                <el-form-item label="QQ或微信账号">
                    <el-input v-model="form.chatAccount" style="width: 370px;"/>
                </el-form-item>
                <el-form-item label="电子邮箱">
                    <el-input v-model="form.email" style="width: 370px;"/>
                </el-form-item>
                <el-form-item label="作品方向，0：男频，1：女频">
                    未设置字典，请手动设置 Select
                </el-form-item>
                <el-form-item label="0：正常，1：封禁">
                    未设置字典，请手动设置 Select
                </el-form-item>
                <el-form-item label="创建时间">
                    <el-input v-model="form.createTime" style="width: 370px;"/>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="text" @click="crud.cancelCU">取消</el-button>
                <el-button :loading="crud.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
            </div>
        </el-dialog>
        <!--表格渲染-->
        <el-table ref="table" border v-loading="crud.loading" :data="crud.data" size="small" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
            <el-table-column type="selection" width="55"/>
            <el-table-column prop="userId" label="用户ID"/>
            <el-table-column prop="inviteCode" label="邀请码"/>
            <el-table-column prop="penName" label="笔名"/>
            <el-table-column prop="telPhone" label="手机号码"/>
            <el-table-column prop="chatAccount" label="QQ或微信账号"/>
            <el-table-column prop="email" label="电子邮箱"/>
            <el-table-column prop="workDirection" label="作品方向">
                <template slot-scope="scope">
                    <span>{{scope.row.workDirection===0?'男频':'女频'}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态">
                <template slot-scope="scope">
                    <span>{{scope.row.status===0?'正常':'封禁'}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="200">
                <template slot-scope="scope">
                    <span>{{ parseTime(scope.row.createTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column v-has-permission="['author:update','author:delete']" label="操作" width="150px" align="center">
                <template slot-scope="scope">
                    <udOperation
                            :data="scope.row"
                            :permission="permission"/>
                </template>
            </el-table-column>
        </el-table>
        <!--分页组件-->
        <pagination/>
    </div>
</template>

<script>
    import crudAuthor from './Api.js'
    import CRUD, {presenter, header, form, crud} from '@crud/crud'
    import rrOperation from '@crud/RR.operation'
    import crudOperation from '@crud/CRUD.operation'
    import udOperation from '@crud/UD.operation'
    import pagination from '@crud/Pagination'

    const defaultForm = {
        id: null,
        userId: null,
        inviteCode: null,
        penName: null,
        telPhone: null,
        chatAccount: null,
        email: null,
        workDirection: null,
        status: null,
        createTime: null
    };
    // crud交由presenter持有
    const defaultCrud = CRUD({title: '作者', url: 'support/book/author/page', crudMethod: {...crudAuthor}});

    export default {
        name: 'Author',
        components: {pagination, crudOperation, rrOperation, udOperation},
        mixins: [presenter(defaultCrud), header(), form(defaultForm), crud()],
        data() {
            return {
                permission: {
                    add: ['author:create'],
                    edit: ['author:update'],
                    del: ['author:delete']
                },
                rules: {
                    inviteCode: [
                        {required: true, message: '邀请码不能为空', trigger: 'blur'}
                    ],
                    penName: [
                        {required: true, message: '笔名不能为空', trigger: 'blur'}
                    ]
                }
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
