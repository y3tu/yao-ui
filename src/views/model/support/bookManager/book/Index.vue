<template>
    <div class="app-container">
        <!--工具栏-->
        <div class="head-container">
            <div v-if="crud.props.searchToggle">
                <!-- 搜索 -->
                <label class="el-form-item-label">小说分类</label>
                <el-select v-model="crud.entity.catId" placeholder="请选择" class="filter-item">
                    <el-option
                            v-for="item in dict.BOOK_CATEGORY"
                            :key="item.value"
                            :label="item.name"
                            :value="item.value">
                    </el-option>
                </el-select>
                <label class="el-form-item-label">小说名</label>
                <el-input v-model="crud.entity.bookName" clearable placeholder="小说名" style="width: 185px;" class="filter-item"
                          @keyup.enter.native="crud.toQuery"/>
                <label class="el-form-item-label">作者名</label>
                <el-input v-model="crud.entity.authorName" clearable placeholder="作者名" style="width: 185px;" class="filter-item"
                          @keyup.enter.native="crud.toQuery"/>
                <label class="el-form-item-label">状态</label>
                <el-select v-model="crud.entity.status" placeholder="请选择" class="filter-item">
                    <el-option :key="0" label="入库" :value="0"/>
                    <el-option :key="1" label="上架" :value="1"/>
                </el-select>
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
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="text" @click="crud.cancelCU">取消</el-button>
                <el-button :loading="crud.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
            </div>
        </el-dialog>
        <!--表格渲染-->
        <el-table ref="table"
                  v-loading="crud.loading"
                  :data="crud.data"
                  size="small"
                  style="width: 100%;"
                  @selection-change="crud.selectionChangeHandler">
            <el-table-column type="selection" width="55"/>
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="小说封面">
                            <el-image
                                    fit="cover"
                                    lazy
                                    style="width: 100px; height: 100px"
                                    :src="props.row.picUrl"
                                    :preview-src-list="[props.row.picUrl]">
                                <div slot="error" class="image-slot">
                                    <i class="el-icon-picture-outline"></i>
                                </div>
                            </el-image>
                        </el-form-item>
                        <el-form-item label="书籍描述">
                            <span v-html="props.row.bookDesc"></span>
                        </el-form-item>
                        <el-form-item label="点击量">
                            <span>{{ props.row.visitCount }}</span>
                        </el-form-item>
                        <el-form-item label="总字数">
                            <span>{{ props.row.wordCount }}</span>
                        </el-form-item>
                        <el-form-item label="评论数">
                            <span>{{ props.row.commentCount }}</span>
                        </el-form-item>
                        <el-form-item label="最新目录名">
                            <span>{{ props.row.lastIndexName }}</span>
                        </el-form-item>
                        <el-form-item label="最新目录更新时间">
                            <span>{{ parseTime(props.row.lastIndexUpdateTime) }}</span>
                        </el-form-item>
                        <el-form-item label="书源ID">
                            <span>{{ props.row.crawlSourceId }}</span>
                        </el-form-item>
                        <el-form-item label="源站小说ID">
                            <span>{{ props.row.crawlBookId }}</span>
                        </el-form-item>
                        <el-form-item label="最后一次的抓取时间">
                            <span>{{ parseTime(props.row.crawlLastTime) }}</span>
                        </el-form-item>
                        <el-form-item label="是否收费">
                            <span>{{ props.row.isVip===0?'免费':'收费' }}</span>
                        </el-form-item>
                        <el-form-item label="预览最新章节">
                                <router-link :to="'/book/front?bookId=' + props.row.id+'&bookIndexId='+props.row.lastIndexId">
                                    <el-button type="success" icon="el-icon-view" circle></el-button>
                                </router-link>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column prop="workDirection" label="作品方向">
                <template slot-scope="scope">
                    <span>{{ scope.row.workDirection===0?'男频':'女频' }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="catName" label="分类名"/>
            <el-table-column prop="bookName" label="小说名" width="150px"/>
            <el-table-column prop="authorName" label="作者名"/>
            <el-table-column prop="score" label="评分"/>
            <el-table-column prop="bookStatus" label="书籍状态">
                <template slot-scope="scope">
                    <span>{{ scope.row.bookStatus===0?'连载中':'已完结' }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态">
                <template slot-scope="scope">
                    <span>{{ scope.row.status===0?'入库':'上架' }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="updateTime" label="更新时间" width="150px">
                <template slot-scope="scope">
                    <span>{{ parseTime(scope.row.updateTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="150px">
                <template slot-scope="scope">
                    <span>{{ parseTime(scope.row.createTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="crawlIsStop" label="正在获取书籍内容" :formatter="crawlIsStopFormatter"/>
            <el-table-column fixed="right"
                             v-has-permission="['book:update','book:delete']"
                             label="操作" width="300px" align="center">
                <template slot-scope="scope">
                    <udOperation
                            :data="scope.row"
                            :permission="permission">
                            <el-button
                                    slot="right"
                                    v-has-permission="permission.edit"
                                    size="mini" type="primary" icon="el-icon-refresh" @click="resetCrawlIsStop(scope.row)"/>

                    </udOperation>
                </template>
            </el-table-column>
        </el-table>
        <!--分页组件-->
        <pagination/>
    </div>
</template>

<script>
    import crudBook, {resetCrawlIsStop} from './Api.js'
    import CRUD, {presenter, header, form, crud} from '@crud/crud'
    import rrOperation from '@crud/RR.operation'
    import crudOperation from '@crud/CRUD.operation'
    import udOperation from '@crud/UD.operation'
    import pagination from '@crud/Pagination'

    const defaultForm = {
        id: null,
        workDirection: null,
        catId: null,
        catName: null,
        picUrl: null,
        bookName: null,
        authorId: null,
        authorName: null,
        bookDesc: null,
        score: null,
        bookStatus: null,
        visitCount: null,
        wordCount: null,
        commentCount: null,
        lastIndexId: null,
        lastIndexName: null,
        lastIndexUpdateTime: null,
        isVip: null,
        status: null,
        updateTime: null,
        createTime: null,
        crawlSourceId: null,
        crawlBookId: null,
        crawlLastTime: null,
        crawlIsStop: null
    };

    export default {
        name: 'Book',
        components: {pagination, crudOperation, rrOperation, udOperation},
        mixins: [presenter(), header(), form(defaultForm), crud()],
        cruds() {
            return CRUD({title: 'Book', url: 'support/book/book/page', idField: 'id', sort: 'id,desc', crudMethod: {...crudBook}})
        },
        dicts: ['BOOK_CATEGORY'],
        data() {
            return {
                permission: {
                    add: ['book:create'],
                    edit: ['book:update'],
                    del: ['book:delete']
                },
                rules: {
                    workDirection: [
                        {required: true, message: '作品方向不能为空', trigger: 'blur'}
                    ],
                    catId: [
                        {required: true, message: '分类ID不能为空', trigger: 'blur'}
                    ],
                    bookName: [
                        {required: true, message: '小说名不能为空', trigger: 'blur'}
                    ],
                    authorName: [
                        {required: true, message: '作者名不能为空', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            // 钩子：在获取表格数据之前执行，false 则代表不获取数据
            [CRUD.HOOK.beforeRefresh]() {
                return true
            },
            crawlIsStopFormatter(row, column, cellValue, index) {
                if (cellValue === 0)
                    return '正在更新';
                else if (cellValue === 1)
                    return '已停止';
            },
            resetCrawlIsStop(data) {
                resetCrawlIsStop(data.id).then(res => {
                    this.$notify({
                        title: '重置成功！',
                        type: 'success',
                        duration: 2500
                    });

                    this.crud.refresh();
                })
            },
        }
    }
</script>

<style>
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 150px;
        color: #bf5924;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
