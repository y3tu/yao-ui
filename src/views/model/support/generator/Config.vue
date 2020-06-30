<template>
    <div class="app-container">
        <el-row :gutter="15">
            <el-col style="margin-bottom: 10px">
                <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                        <span>字段配置：{{tableName}}</span>
                        <el-button
                                :loading="saveColumnLoading"
                                icon="el-icon-s-promotion"
                                size="mini"
                                style="float: right; padding: 6px 9px;"
                                type="success"
                                @click="saveColumn">保存
                        </el-button>
                        <el-button
                                icon="el-icon-check"
                                size="mini"
                                style="float: right; padding: 6px 9px;margin-right: 9px"
                                type="primary">
                            <router-link :to="'/support/generator/preview?tableName=' + tableName+'&dsId='+dsId">
                                预览
                            </router-link>
                        </el-button>
                    </div>
                    <el-form size="small" label-width="90px">
                        <el-table v-loading="columnLoading" :data="columnConfigList" :max-height="tableHeight" size="small" style="width: 100%;margin-bottom: 15px">
                            <el-table-column prop="columnName" label="字段名称"/>
                            <el-table-column prop="columnType" label="字段类型"/>
                            <el-table-column prop="remark" label="字段描述">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.remark" size="mini" class="edit-input"/>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" label="必填" width="70px">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="scope.row.notNull"/>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" label="列表" width="70px">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="scope.row.listShow"/>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" label="表单" width="70px">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="scope.row.formShow"/>
                                </template>
                            </el-table-column>
                            <el-table-column label="表单类型">
                                <template slot-scope="scope">
                                    <el-select v-model="scope.row.formType" filterable class="edit-input" clearable size="mini" placeholder="请选择">
                                        <el-option label="文本框" value="Input"/>
                                        <el-option label="文本域" value="Textarea"/>
                                        <el-option label="单选框" value="Radio"/>
                                        <el-option label="下拉框" value="Select"/>
                                        <el-option label="日期框" value="Date"/>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column label="查询方式">
                                <template slot-scope="scope">
                                    <el-select v-model="scope.row.queryType" filterable class="edit-input" clearable size="mini" placeholder="请选择">
                                        <el-option label="=" value="="/>
                                        <el-option label="!=" value="!="/>
                                        <el-option label=">=" value=">="/>
                                        <el-option label="<=" value="<="/>
                                        <el-option label="Like" value="Like"/>
                                        <el-option label="NotNull" value="NotNull"/>
                                        <el-option label="BetWeen" value="BetWeen"/>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column label="日期注解">
                                <template slot-scope="scope">
                                    <el-select v-model="scope.row.dateAnnotation" filterable class="edit-input" clearable size="mini"
                                               placeholder="请选择">
                                        <el-option label="自动创建时间" value="CreationTimestamp"/>
                                        <el-option label="自动更新时间" value="UpdateTimestamp"/>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column label="关联字典">
                                <template slot-scope="scope">
                                    <el-select v-model="scope.row.dictName" filterable class="edit-input" clearable size="mini" placeholder="请选择">
                                        <el-option v-for="item in dicts" :key="item.id" :label="item.remark === '' ? item.name : item.remark"
                                                   :value="item.name"/>
                                    </el-select>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-form>
                </el-card>
            </el-col>

            <el-col>
                <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                        <span class="role-span">生成配置</span>
                        <el-button
                                :loading="saveGenLoading"
                                icon="el-icon-check"
                                size="mini"
                                style="float: right; padding: 6px 9px"
                                type="primary"
                                @click="saveGen">保存
                        </el-button>
                    </div>
                    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="120px">
                        <el-form-item label="作者名称" prop="author">
                            <el-input v-model="form.author" style="width: 40%"/>
                            <span style="color: #C0C0C0;margin-left: 10px;">类上面的作者名称</span>
                        </el-form-item>
                        <el-form-item label="模块名称" prop="moduleName">
                            <el-input v-model="form.moduleName" style="width: 40%"/>
                            <span style="color: #C0C0C0;margin-left: 10px;">模块的名称，请选择项目中已存在的模块</span>
                        </el-form-item>
                        <el-form-item label="至于包下" prop="pack">
                            <el-input v-model="form.pack" style="width: 40%"/>
                            <span style="color: #C0C0C0;margin-left: 10px;">项目包的名称，生成的代码放到哪个包里面</span>
                        </el-form-item>
                        <el-form-item label="服务请求路径" prop="apiPath">
                            <el-input v-model="form.apiPath" style="width: 40%"/>
                            <span style="color: #C0C0C0;margin-left: 10px;">服务的请求路径</span>
                        </el-form-item>
                        <el-form-item label="去表前缀" prop="prefix">
                            <el-input v-model="form.prefix" placeholder="默认不去除表前缀" style="width: 40%"/>
                            <span style="color: #C0C0C0;margin-left: 10px;">默认不去除表前缀，可自定义</span>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    import {getGenConfig, saveGenConfig, saveColumnConfig} from './Api'

    export default {
        name: 'GeneratorConfig',
        data() {
            return {
                tableName: '',
                dsId: '',
                columnLoading: false,
                saveColumnLoading: false,
                saveGenLoading: false,
                tableHeight: 550,
                dicts: [],
                columnConfigList: [],
                form: {
                    id: null,
                    tableName: '',
                    author: '',
                    pack: '',
                    moduleName: '',
                    apiPath: '',
                    prefix: '',
                },
                rules: {
                    author: [
                        {required: true, message: '作者不能为空', trigger: 'blur'}
                    ],
                    pack: [
                        {required: true, message: '包路径不能为空', trigger: 'blur'}
                    ],
                    moduleName: [
                        {required: true, message: '包路径不能为空', trigger: 'blur'}
                    ],
                    apiPath: [
                        {required: true, message: '服务请求路径不能为空', trigger: 'blur'}
                    ],
                }
            }
        },
        created() {
            this.initData();
        },
        methods: {
            initData() {
                this.tableHeight = document.documentElement.clientHeight - 385;
                this.tableName = this.$route.query.tableName;
                this.dsId = this.$route.query.dsId;
                this.$nextTick(() => {
                    this.columnLoading = true;
                    getGenConfig({
                        dsId: this.dsId,
                        tableName: this.tableName
                    }).then(res => {
                        if (this.$isNotEmpty(res.data.genConfig)) {
                            this.form = res.data.genConfig;
                        }
                        this.columnConfigList = res.data.columnConfigList;
                        //this.form.cover = this.form.cover.toString()
                        this.columnLoading = false;
                    }).catch(err => {
                        this.columnLoading = false;
                    });
                    // getDicts().then(data => {
                    //     this.dicts = data
                    // })
                })
            },
            //保存字段配置
            saveColumn() {
                this.saveColumnLoading = true;
                this.columnConfigList.forEach(columnConfig => {
                    columnConfig.tableName = this.tableName;
                    columnConfig.dsId = this.dsId;
                });
                saveColumnConfig(this.columnConfigList).then(res => {
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    });
                    this.saveColumnLoading = false;
                    //保存后重新刷新数据防止数据重复
                    this.initData();
                }).catch(err => {
                    this.saveColumnLoading = false;
                })
            },
            //保存基本生成配置
            saveGen() {
                this.saveGenLoading = true;
                this.form.tableName = this.tableName;
                this.form.dsId = this.dsId;
                saveGenConfig(this.form).then(res => {
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    });
                    this.saveGenLoading = false;
                    //保存后重新刷新数据防止数据重复
                    this.initData();
                }).catch(err => {
                    this.saveGenLoading = false;
                })
            },
        }
    }
</script>

<style>

</style>