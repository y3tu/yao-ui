<template>
    <div class="app-container">
        <div class="filter-container">
            <el-autocomplete
                    clearable
                    v-model="dataSourceName"
                    :fetch-suggestions="queryDataSource"
                    placeholder="请选择数据源"
                    class="filter-item search-item"
                    @select="handleSelect">
                <template slot-scope="{ item }">
                    <div>{{ item.name }}</div>
                </template>
            </el-autocomplete>
            <el-input clearable v-model="tableName" placeholder="请输入表名" style="width:200px" class="filter-item search-item" @keyup.enter.native="search"/>
            <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="search">搜索</el-button>
        </div>

        <el-table
                border
                v-loading="pageLoading"
                :data="tableData"
                size="small"
                style="width: 100%;">
            <el-table-column label="序号" width="80" align="center">
                <template slot-scope="scope">
                    <div>{{ scope.$index + 1 }}</div>
                </template>
            </el-table-column>

            <el-table-column :show-overflow-tooltip="true" align="center" prop="name" label="表名"/>

            <el-table-column :show-overflow-tooltip="true" align="center" prop="remarks" label="备注">
                <template slot-scope="scope">
                    <el-input v-model="tableData[scope.$index].remarks" class="edit-input" style="width: 300px"/>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="300px" align="center" fixed="right">
                <template slot-scope="scope">
                    <el-row :gutter="3">
                        <el-col :span="8">
                            <el-button type="primary" size="mini" round>
                                <router-link :to="'/tool/generator/preview?tableName=' + scope.row.name+'&dsId='+dsId">
                                    预览<i class="el-icon-view el-icon--right"></i>
                                </router-link>
                            </el-button>
                        </el-col>
                        <el-col :span="8">
                            <el-button type="warning" size="mini" round>
                                <router-link :to="'/tool/generator/config?tableName=' + scope.row.name+'&dsId='+dsId">
                                    编辑<i class="el-icon-edit el-icon--right"></i>
                                </router-link>
                            </el-button>
                        </el-col>
                        <el-col :span="8">
                            <el-button type="success" size="mini" round @click="toDownload(scope.row.name,dsId)">
                                下载<i class="el-icon-download el-icon--right"></i>
                            </el-button>
                        </el-col>
                    </el-row>
                </template>
            </el-table-column>

        </el-table>

        <!--分页组件-->
        <el-pagination
                :total="total"
                style="margin-top: 8px;"
                layout="total, prev, pager, next, sizes"
                :current-page="currentPage"
                :page-size="pageSize"
                @size-change="sizeChange"
                @current-change="pageChange">
        </el-pagination>

    </div>
</template>

<script>
    import pageMixins from '@/mixins/page'
    import {getTables} from './Api'
    import {Message} from "element-ui";
    import Config from './Config'

    export default {
        name: 'generator',
        mixins: [pageMixins],
        components: {Config},
        dicts: ['DATA_SOURCE'],
        data() {
            return {
                tableName: '',
                tableData: [],
                pageLoading: false,
                currentPage: 1, // 当前页码
                total: 20, // 总条数
                pageSize: 10, // 每页的数据条数
                dataSourceName: '',
                dsId: ''
            }

        },
        created() {
            this.$nextTick(() => {
                this.init();
            })
        },
        methods: {
            init() {
            },
            search() {
                if (this.$isEmpty(this.dsId)) {
                    Message({
                        message: '请选择数据源',
                        type: 'warning',
                        duration: 5 * 1000
                    });
                    return;
                }
                this.pageLoading = true;
                getTables({
                    "dsId": this.dsId
                }).then(res => {
                    this.tableData = res.data;
                    let list = this.tableData.filter((item, index) =>
                        item.name.includes(this.tableName)
                    );
                    this.list = list.filter((item, index) =>
                        index < this.currentPage * this.pageSize && index >= this.pageSize * (this.currentPage - 1)
                    );
                    this.total = list.length;
                    this.tableData = this.list;
                    this.pageLoading = false;
                }).catch(err => {
                    this.pageLoading = false;
                })
            },
            sizeChange(val) {
                this.currentPage = 1;
                this.pageSize = val;
                this.search();
            },
            pageChange(val) {
                this.currentPage = val;
                this.search();
            },
            async queryDataSource(queryString, cb) {
                let dataSources = this.dict['DATA_SOURCE'];
                let result = queryString ? dataSources.filter(this.createFilter(queryString)) : dataSources;
                // 调用 callback 返回建议列表的数据
                cb(result);
            },
            createFilter(queryString) {
                return (dataSource) => {
                    return (dataSource.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(val) {
                this.dsId = val.value;
                this.dataSourceName = val.name;
            },
            toDownload(tableName, dsId) {
                let obj = {
                    tableName: tableName,
                    dsId: dsId
                };
                this.$download('base/generator/genZip', obj, '代码.zip');
                this.$message('正在处理，请稍等！');
            }

        }

    }
</script>

<style>

</style>