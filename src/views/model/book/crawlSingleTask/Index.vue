<template>
    <div class="app-container">
        <!--工具栏-->
        <div class="head-container">
            <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
            <div v-if="crud.props.searchToggle">
                <!-- 搜索 -->
                <label class="el-form-item-label">小说分类</label>
                <el-select v-model="crud.entity.catId" placeholder="请选择">
                    <el-option
                            v-for="item in dict.BOOK_CATEGORY"
                            :key="item.value"
                            :label="item.name"
                            :value="item.value">
                    </el-option>
                </el-select>
                <label class="el-form-item-label">小说名</label>
                <el-input v-model="crud.entity.bookName" clearable placeholder="爬取的小说名" style="width: 185px;" class="filter-item"
                          @keyup.enter.native="crud.toQuery"/>
                <label class="el-form-item-label">作者名</label>
                <el-input v-model="crud.entity.authorName" clearable placeholder="爬取的小说作者名" style="width: 185px;" class="filter-item"
                          @keyup.enter.native="crud.toQuery"/>
                <rrOperation :crud="crud"/>
            </div>
            <crudOperation :permission="permission"/>
        </div>
        <!--表单组件-->
        <el-dialog :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="600px">
            <el-form ref="form" :model="form" :rules="rules" size="small" label-width="120px">
                <el-form-item label="爬虫源" prop="sourceId">
                    <el-select v-model="form.sourceId" @change="sourceChange" placeholder="请选择">
                        <el-option
                                v-for="item in dict.crawl_source"
                                :key="item.value"
                                :label="item.name"
                                :value="parseInt(item.value)">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="源站小说ID" prop="sourceBookId">
                    <el-input v-model="form.sourceBookId" style="width: 370px;"/>
                </el-form-item>
                <el-form-item label="小说分类" prop="catId">
                    <el-select v-model="form.catId" placeholder="请选择">
                        <el-option
                                v-for="item in dict.BOOK_CATEGORY"
                                :key="item.value"
                                :label="item.name"
                                :value="parseInt(item.value)">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="小说名" prop="bookName">
                    <el-input v-model="form.bookName" style="width: 370px;"/>
                </el-form-item>
                <el-form-item label="作者名" prop="authorName">
                    <el-input v-model="form.authorName" style="width: 370px;"/>
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
            <el-table-column prop="sourceId" label="爬虫源ID"/>
            <el-table-column prop="sourceName" label="爬虫源名"/>
            <el-table-column prop="sourceBookId" label="源站小说ID"/>
            <el-table-column prop="catId" label="小说分类">
                <template slot-scope="scope">
                    <span>{{ dict.name['BOOK_CATEGORY'][scope.row.catId] }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="bookName" label="爬取的小说名"/>
            <el-table-column prop="authorName" label="爬取的小说作者名"/>
            <el-table-column prop="taskStatus" label="任务状态" :formatter="taskStatusFormatter"/>
            <el-table-column prop="excCount" label="已经执行次数"/>
            <el-table-column prop="createTime" label="创建时间">
                <template slot-scope="scope">
                    <span>{{ parseTime(scope.row.createTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column v-has-permission="['crawlSingleTask:update','crawlSingleTask:delete']" label="操作" width="150px" align="center">
                <template slot-scope="scope">
                    <udOperation
                            :data="scope.row"
                            :permission="permission"
                    />
                </template>
            </el-table-column>
        </el-table>
        <!--分页组件-->
        <pagination/>
    </div>
</template>

<script>
    import crudCrawlSingleTask from './Api.js'
    import CRUD, {presenter, header, form, crud} from '@crud/crud'
    import rrOperation from '@crud/RR.operation'
    import crudOperation from '@crud/CRUD.operation'
    import udOperation from '@crud/UD.operation'
    import pagination from '@crud/Pagination'

    const defaultForm = {
        id: null,
        sourceId: null,
        sourceName: null,
        sourceBookId: null,
        catId: null,
        bookName: null,
        authorName: null,
        taskStatus: null,
        excCount: null,
        createTime: null
    };
    export default {
        name: 'CrawlSingleTask',
        components: {pagination, crudOperation, rrOperation, udOperation},
        mixins: [presenter(), header(), form(defaultForm), crud()],
        cruds() {
            return CRUD({
                title: 'CrawlSingleTask',
                url: 'support/book/crawlSingleTask/page',
                idField: 'id',
                sort: 'id,desc',
                crudMethod: {...crudCrawlSingleTask}
            })
        },
        dicts: ['BOOK_CATEGORY', 'crawl_source'],
        data() {
            return {
                permission: {
                    add: ['crawlSingleTask:create'],
                    edit: ['crawlSingleTask:update'],
                    del: ['crawlSingleTask:delete']
                },
                rules: {
                    sourceId: [
                        {required: true, message: '爬虫源不能为空', trigger: 'blur'}
                    ],
                    sourceBookId: [
                        {required: true, message: '源站小说ID不能为空', trigger: 'blur'}
                    ],
                    catId: [
                        {required: true, message: '小说分类不能为空', trigger: 'blur'}
                    ],
                    bookName: [
                        {required: true, message: '小说名不能为空', trigger: 'blur'}
                    ],
                    authorName: [
                        {required: true, message: '作者名不能为空', trigger: 'blur'}
                    ]
                },
            }
        },
        methods: {
            // 钩子：在获取表格数据之前执行，false 则代表不获取数据
            [CRUD.HOOK.beforeRefresh]() {
                return true
            },
            sourceChange(value) {
                this.crud.form.sourceName = this.dict.name['crawl_source'][value];
            },
            taskStatusFormatter(row, column) {
                let str = '';
                switch (row.taskStatus) {
                    case 0:
                        str = '失败';
                        break;
                    case 1:
                        str = '成功';
                        break;
                    case 2:
                        str = '未执行';
                        break;
                    case 3:
                        str = '执行中';
                        break
                }
                return str;
            }
        }
    }
</script>

<style scoped>

</style>
