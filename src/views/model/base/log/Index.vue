<template>
    <div class="app-container">
        <div class="filter-container">
            <el-input v-model="page.entity.username" @keyup.enter.native="search" placeholder="用户" class="filter-item search-item"/>
            <el-select v-model="page.entity.status" @keyup.enter.native="search" placeholder="状态" class="filter-item">
                <el-option value="1" label="失败"/>
                <el-option value="0" label="成功"/>
            </el-select>
            <el-date-picker
                    @keyup.enter.native="search"
                    v-model="page.params.timeRange"
                    :range-separator="null"
                    start-placeholder="创建时间"
                    value-format="yyyy-MM-dd"
                    class="filter-item search-item date-range-item"
                    type="daterange"/>
            <el-button class="filter-item" type="primary" plain @click="search">
                查询
            </el-button>
            <el-button class="filter-item" type="warning" plain @click="reset">
                重置
            </el-button>
            <el-button class="filter-item" type="primary" plain @click="exportExcel">
                导出
            </el-button>
        </div>

        <el-table
                ref="table"
                :key="tableKey"
                v-loading="pageLoading"
                :data="page.records"
                style="width: 100%;"
                border
                @sort-change="sortChange"
                :row-class-name="tableRowClassName">
            <el-table-column label="调用者" prop="username" align="center" min-width="120px">
                <template slot-scope="scope">
                    <span>{{ scope.row.username }}</span>
                </template>
            </el-table-column>
            <el-table-column label="模块名" prop="moduleName" align="center" min-width="120px">
                <template slot-scope="scope">
                    <span>{{ scope.row.moduleName }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作名" prop="actionName" :show-overflow-tooltip="true" align="center" min-width="120px">
                <template slot-scope="scope">
                    <span>{{ scope.row.actionName }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作类型" prop="actionType" align="center" min-width="120px">
                <template slot-scope="scope">
                    <span>{{ scope.row.actionType }}</span>
                </template>
            </el-table-column>
            <el-table-column label="服务名" prop="serverName" align="center" min-width="140px">
                <template slot-scope="scope">
                    <span>{{ scope.row.serverName }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作IP地址" prop="ip" align="center" min-width="140px">
                <template slot-scope="scope">
                    <span>{{ scope.row.ip }}</span>
                </template>
            </el-table-column>
            <el-table-column label="地址" prop="location" :show-overflow-tooltip="true" align="center" min-width="120px">
                <template slot-scope="scope">
                    <span>{{ scope.row.location }}</span>
                </template>
            </el-table-column>
            <el-table-column label="用户客户端信息" prop="userAgent" :show-overflow-tooltip="true" align="center" min-width="120px">
                <template slot-scope="scope">
                    <span>{{ scope.row.userAgent }}</span>
                </template>
            </el-table-column>
            <el-table-column label="请求URL" prop="requestUrl" :show-overflow-tooltip="true" align="center" min-width="120px">
                <template slot-scope="scope">
                    <span>{{ scope.row.requestUrl }}</span>
                </template>
            </el-table-column>
            <el-table-column label="方法" prop="method" :show-overflow-tooltip="true" align="center" min-width="120px">
                <template slot-scope="scope">
                    <span>{{ scope.row.method }}</span>
                </template>
            </el-table-column>
            <el-table-column label="参数" prop="params" :show-overflow-tooltip="true" align="center" min-width="120px">
                <template slot-scope="scope">
                    <span>{{ scope.row.params }}</span>
                </template>
            </el-table-column>
            <el-table-column label="执行时间" prop="time" align="center" min-width="120px">
                <template slot-scope="{row}">
                    <el-tag v-if="row.time" :type="row.time | timeFilter">
                        {{ transTime(row.time) }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="创建时间" prop="createTime" align="center" min-width="180px">
                <template slot-scope="scope">
                    <span>{{ scope.row.createTime }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作状态" prop="status" align="center" min-width="120px">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status | statusFilter">
                        {{ scope.row.status === '1' ? '失败' : '成功' }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="查看异常信息" align="center" min-width="150px" class-name="small-padding fixed-width">
                <template slot-scope="{row}">
                    <el-button v-if="row.status==='1'" size="small" type="danger" icon="el-icon-info" circle @click="showException(row)"/>
                </template>
            </el-table-column>
        </el-table>
        <!--分页组件-->
        <el-pagination
                :total="page.total"
                :current-page="page.current"
                style="margin-top: 8px;"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="sizeChange"
                @current-change="pageChange"/>

        <el-dialog :visible.sync="exceptionDialog" :fullscreen="isFullScreen" title="异常信息" append-to-body width="70%">
            <Java :value="exceptionDetail" height="400px"/>
            <div slot="footer">
                <el-button icon="el-icon-full-screen" @click="toggleFull">全屏开/关</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    import Java from '@/components/CodeEdit/index'

    import pageMixins from '@/mixins/page'

    export default {
        name: 'log',
        mixins: [pageMixins],
        components: {Java},
        filters: {
            statusFilter(status) {
                const map = {
                    0: 'success',
                    1: 'danger'
                };
                return map[status]
            },
            timeFilter(time) {
                if (time < 500) {
                    return 'success'
                } else if (time < 1000) {
                    return ''
                } else if (time < 1500) {
                    return 'warning'
                } else {
                    return 'danger'
                }
            }
        },
        data() {
            return {
                tableKey: 0,
                exceptionDialog: false,
                exceptionDetail: '',
                isFullScreen: false
            }
        },
        created() {
            this.$nextTick(() => {
                this.init()
            })
        },
        methods: {
            init() {
                this.findPage();
            },
            findPageInit() {
                this.pageUrl = 'base/log/page';
                this.handlerParams();
                return true;
            },
            search() {
                this.findPage();
            },
            handlerParams() {
                if (this.page.params.timeRange) {
                    this.page.params.createTimeFrom = this.page.params.timeRange[0];
                    this.page.params.createTimeTo = this.page.params.timeRange[1]
                }
            },
            reset() {
                this.resetPage();
                this.search();
            },
            exportExcel() {
                this.handlerParams();
                this.$download('base/log/export', this.page, `log${new Date().getTime()}.xlsx`);
                this.$message('正在处理，请稍等！');
            },
            tableRowClassName({row, rowIndex}) {
                if (row.status === '1') {
                    return 'error-row';
                } else {
                    return '';
                }
            },
            showException(row) {
                this.exceptionDialog = true;
                this.exceptionDetail = row.exception
            },
            toggleFull() {
                this.isFullScreen = this.isFullScreen !== true;
            },
            transTime(time) {
                if (this.$isNotEmpty(time)) {
                    return `${time} ms`
                } else {
                    return '';
                }
            },

        }

    }
</script>

<style>
    .el-table .error-row {
        background: #FFD0A4;
    }
</style>