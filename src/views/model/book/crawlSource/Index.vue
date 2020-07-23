<template>
    <div class="app-container">
        <!--工具栏-->
        <div class="head-container">
            <div v-if="crud.props.searchToggle">
                <!-- 搜索 -->
                <label class="el-form-item-label">源站名</label>
                <el-input v-model="crud.entity.sourceName" clearable placeholder="源站名" style="width: 185px;" class="filter-item"
                          @keyup.enter.native="crud.toQuery"/>
                <label class="el-form-item-label">爬虫源状态</label>
                <el-select v-model="crud.entity.sourceStatus" placeholder="请选择">
                    <el-option label="开启" :value="1"/>
                    <el-option label="关闭" :value="0"/>
                </el-select>
                <rrOperation :crud="crud"/>
            </div>
            <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
            <crudOperation :permission="permission"/>
        </div>
        <!--表单组件-->
        <el-dialog :close-on-click-modal="false"
                   :before-close="crud.cancelCU"
                   :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="500px"
                   :fullscreen="dialogFullscreen">
            <el-form ref="form" :model="form" :rules="rules" size="small" label-width="100px">
                <el-form-item label="源站名" prop="sourceName">
                    <el-input v-model="form.sourceName" style="width: 370px;"/>
                </el-form-item>
                <el-form-item label="爬取规则" prop="crawlRule">
                    <el-input v-model="form.crawlRule" :rows="crawlRuleRows" type="textarea" style="min-width: 370px;"/>
                </el-form-item>
                <el-form-item label="爬虫源状态" prop="sourceStatus">
                    <el-select v-model="form.sourceStatus" placeholder="请选择">
                        <el-option label="开启" :value="1"/>
                        <el-option label="关闭" :value="0"/>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFullscreenToggle" icon="el-icon-full-screen"></el-button>
                <el-button type="text" @click="crud.cancelCU">取消</el-button>
                <el-button :loading="crud.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
            </div>
        </el-dialog>
        <!--表格渲染-->
        <el-table ref="table" v-loading="crud.loading" :data="crud.data" size="small" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
            <el-table-column type="selection" width="55"/>
            <el-table-column prop="id" label="主键"/>
            <el-table-column prop="sourceName" label="源站名"/>
            <el-table-column prop="crawlRule" show-overflow-tooltip label="爬取规则"/>
            <el-table-column prop="sourceStatus" label="爬虫源状态">
              <template slot-scope="scope">
                <span>{{scope.row.sourceStatus===1?'开启':'关闭'}}</span>
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
            <el-table-column v-has-permission="['crawlSource:create','crawlSource:delete']" label="操作" width="150px" align="center">
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
    import crudCrawlSource from './Api.js'
    import CRUD, {presenter, header, form, crud} from '@crud/crud'
    import rrOperation from '@crud/RR.operation'
    import crudOperation from '@crud/CRUD.operation'
    import udOperation from '@crud/UD.operation'
    import pagination from '@crud/Pagination'

    const defaultForm = {
        id: null,
        sourceName: null,
        crawlRule: null,
        sourceStatus: null,
        createTime: null,
        updateTime: null
    };
    export default {
        name: 'CrawlSource',
        components: {pagination, crudOperation, rrOperation, udOperation},
        mixins: [presenter(), header(), form(defaultForm), crud()],
        cruds() {
            return CRUD({title: '爬虫源', url: 'support/book/crawlSource/page', idField: 'id', sort: 'id,desc', crudMethod: {...crudCrawlSource}})
        },
        data() {
            return {
                permission: {
                    add: ['crawlSource:create'],
                    edit: ['crawlSource:update'],
                    del: ['crawlSource:delete']
                },
                rules: {
                    sourceName: [
                        {required: true, message: '源站名不能为空', trigger: 'blur'}
                    ],
                    crawlRule: [
                        {required: true, message: '爬取规则不能为空', trigger: 'blur'}
                    ],
                    sourceStatus: [
                        {required: true, message: '爬虫源状态不能为空', trigger: 'blur'}
                    ]
                },
                dialogFullscreen: false,
                crawlRuleRows: 10,
            }
        },
        methods: {
            // 钩子：在获取表格数据之前执行，false 则代表不获取数据
            [CRUD.HOOK.beforeRefresh]() {
                return true
            },
            dialogFullscreenToggle() {
                this.dialogFullscreen = !this.dialogFullscreen;
                if (this.crawlRuleRows === 10) {
                    this.crawlRuleRows = 25;
                } else if (this.crawlRuleRows === 25) {
                    this.crawlRuleRows = 10;
                }
            }
        }
    }
</script>

<style scoped>

</style>
