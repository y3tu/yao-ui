<template>
    <el-dialog
            :close-on-click-modal="false"
            :append-to-body="true"
            :visible.sync="crud.status.cu > 0" :title="crud.status.title"
            :before-close="crud.cancelCU"
            :fullscreen="true"
            width="80%"
            top="8vh">
        <el-form v-loading="formLoading" ref="form" :model="form" :rules="rules" size="small" label-width="110px" @keyup.enter.native="crud.submitCU">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <el-form-item label="图表名称" prop="name">
                        <el-input v-model="form.name" placeholder="图表名称"/>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <el-form-item label="编码" prop="code">
                        <el-input v-model="form.code" placeholder="编码"/>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <el-form-item label="展示模板" prop="displayTemplate">
                        <el-select v-model="form.displayTemplate" placeholder="请选择展示模板" clearable style="width: 100%">
                            <el-option key="1" label="Tab风格" value="tab"/>
                            <el-option key="2" label="单排布局" value="single"/>
                            <el-option key="3" label="双排布局" value="double"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <el-form-item label="X轴字段" prop="xaxisField">
                        <el-select v-model="form.xaxisField" placeholder="X轴字段" clearable style="width: 100%">
                            <el-option v-for="item in sqlColumns"
                                       :key="item.columnName"
                                       :label="item.columnName"
                                       :value="item.columnName"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <el-form-item label="Y轴字段" prop="yaxisField">
                        <el-select v-model="form.yaxisField" multiple allow-create filterable default-first-option placeholder="Y轴字段" style="width: 100%">
                            <el-option v-for="item in sqlColumns"
                                       :key="item.columnName"
                                       :label="item.columnName"
                                       :value="item.columnName"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <el-form-item label="数据类型" prop="dataType">
                        <el-select v-model="form.dataType" placeholder="请选择数据类型" clearable style="width: 100%">
                            <el-option key="1" label="SQL" value="SQL"/>
                            <el-option key="2" label="JSON" value="JSON"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col v-if="crud.form.dataType==='SQL'" :xs="24" :sm="12" :md="8" :lg="6">
                    <el-form-item label="数据源" prop="dataType">
                        <el-select v-model="form.dsId" placeholder="数据源" clearable style="width: 100%">
                            <el-option v-for="item in dict.DATA_SOURCE"
                                       :key="item.id"
                                       :label="item.name"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="16" :lg="6">
                    <el-form-item label="图表类型" prop="chartType">
                        <el-select v-model="form.graphType" placeholder="请选择图表类型" clearable multiple style="width: 100%">
                            <el-option key="1" label="柱状图" value="bar"/>
                            <el-option key="2" label="曲线图" value="line"/>
                            <el-option key="3" label="饼图" value="pie"/>
                            <el-option key="4" label="数据列表" value="table"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-form-item label="描述" prop="content">
                        <el-input v-model="form.content" placeholder="描述"/>
                    </el-form-item>
                </el-col>
                <el-col v-if="form.dataType==='SQL'" :xs="24" :sm="24" :md="24" :lg="24">
                    <el-form-item label="查询SQL" prop="cgrSql">
                        <code-edit v-model="form.cgrSql" height="200" codeType="text/x-mysql"/>
                        <el-button type="primary" icon="el-icon-info" @click="parseSql">解析SQL</el-button>
                    </el-form-item>
                </el-col>
                <el-col v-else :xs="24" :sm="24" :md="24" :lg="24">
                    <el-form-item label="数据JSON" prop="json">
                        <code-edit v-model="form.json" height="200"/>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <el-tabs>
            <el-tab-pane label="列表字段">
                <div class="button-row">
                    <el-button size="small" type="primary" icon="el-icon-plus" @click="add">新增</el-button>
                    <el-button v-show="dataListSelections.length > 0" size="small" type="primary" icon="el-icon-minus" @click="del">删除</el-button>
                </div>
                <el-table v-loading="dataListLoading" :data="form.graphReportItemList" border style="width: 100%;"
                          :row-class-name="tableRowClassName"
                          @selection-change="dataListSelectionChangeHandle">
                    <el-table-column type="selection" header-align="center" align="center" width="50"/>
                    <el-table-column type="index" header-align="center" align="center" width="50"/>
                    <el-table-column prop="fieldName" header-align="center" align="center" label="字段名">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.fieldName" size="small" placeholder="字段名"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="fieldTxt" header-align="center" align="center" label="字段文本">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.fieldTxt" size="small" placeholder="字段文本"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="orderNum" header-align="center" align="center" label="排序">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.orderNum" size="small" type="number" placeholder="排序"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="fieldType" header-align="center" align="center" label="字段类型">
                        <template slot-scope="scope">
                            <el-select v-model="scope.row.fieldType" size="small" placeholder="请选择" clearable>
                                <el-option key="1" label="数值类型" value="1"/>
                                <el-option key="2" label="日期类型" value="2"/>
                                <el-option key="3" label="字符类型" value="3"/>
                                <el-option key="4" label="长整型" value="4"/>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column prop="isShow" header-align="center" align="center" label="是否显示">
                        <template slot-scope="scope">
                            <el-checkbox true-label='Y' false-label='N' v-model="scope.row.isShow" size="small"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="isTotal" header-align="center" align="center" label="计算总计">
                        <template slot-scope="scope">
                            <el-checkbox true-label='Y' false-label='N' v-model="scope.row.isTotal" size="small"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="searchFlag" header-align="center" align="center" label="是否查询">
                        <template slot-scope="scope">
                            <el-checkbox true-label='Y' false-label='N' v-model="scope.row.searchFlag" size="small"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="queryMode" header-align="center" align="center" label="查询模式">
                        <template slot-scope="scope">
                            <el-select v-model="scope.row.searchType" size="small" placeholder="请选择" clearable>
                                <el-option key="1" label="单条件查询" value="1"/>
                                <el-option key="2" label="范围查询" value="2"/>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column prop="dictCode" header-align="center" align="center" label="字典Code">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.dictCode" size="small" placeholder="字典Code"/>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <span slot="footer" class="dialog-footer">
      <el-button @click="crud.cancelCU">取消</el-button>
      <el-button type="primary" @click="crud.submitCU">确定</el-button>
    </span>
    </el-dialog>
</template>

<script>
    import {getGraphReport, parseSql} from "./Api";
    import CodeEdit from '@/components/CodeEdit'
    import {form} from '@crud/crud'
    import CRUD from '@crud/crud'

    const defaultForm = {
        id: 0,
        name: '',
        code: '',
        xaxisField: '',
        yaxisField: [],
        yaxisText: 'yaxis_text',
        displayTemplate: 'tab',
        dataType: 'SQL',
        graphType: ['bar'],
        content: '',
        cgrSql: '',
        json: '',
        dsId: '',
        graphReportItemList: [
            {
                fieldName: '',
                fieldTxt: '',
                orderNum: 1,
                fieldType: '',
                isShow: 'Y',
                isTotal: 'N',
                searchFlag: 'N',
                dictCode: ''
            }
        ],
    };

    export default {
        components: {
            CodeEdit
        },
        mixins: [form(defaultForm)],
        dicts: ['DATA_SOURCE'],
        data() {
            return {
                dialog: false,
                formLoading: false,
                rules: {
                    name: [
                        {required: true, message: '请输入名称', trigger: 'blur'}
                    ],
                    code: [
                        {required: true, message: '请输入编码', trigger: 'blur'}
                    ],
                    xaxisField: [
                        {required: true, message: '请输入X轴字段', trigger: 'blur'}
                    ],
                    yaxisField: [
                        {required: true, message: '请输入Y轴字段', trigger: 'blur'}
                    ],
                    dsId: [
                        {required: true, message: '请选择数据源', trigger: 'blur'}
                    ],
                },
                dataList: [ // 数据列表
                    {
                        fieldName: '',
                        fieldTxt: '',
                        orderNum: 1,
                        fieldType: '',
                        isShow: 'Y',
                        isTotal: 'N',
                        searchFlag: 'N',
                        dictCode: ''
                    }
                ],
                sqlColumns: [],//sql字段集合
                dataListLoading: false, // 数据列表，loading状态
                dataListSelections: [],// 数据列表，多选项

            }
        },
        created() {

        },
        methods: {
            [CRUD.HOOK.beforeToEdit](crud, form) {
                if (form.yaxisField) {
                    form.yaxisField = form.yaxisField.split(',');
                }
                if (form.graphType) {
                    form.graphType = form.graphType.split(',');
                }
                if (form.id) {
                    this.formLoading = true;
                    getGraphReport(form.id).then((res) => {
                        this.formLoading = false;
                        if (res) {
                            form.graphReportItemList = res.data.graphReportItemList
                        } else {
                            this.$message.error(res.msg)
                        }
                    }).catch(error => {
                        this.formLoading = false
                        console.log(error)
                    })
                }

                return true
            },
            //解析SQL
            parseSql() {
                if (this.$isEmpty(this.form.dsId)) {
                    this.$notify({
                        title: '请先选择数据源',
                        type: 'warning',
                        duration: 2500
                    });
                    return;
                }
                if (this.$isEmpty(this.form.cgrSql)) {
                    this.$notify({
                        title: '请输入SQL语句',
                        type: 'warning',
                        duration: 2500
                    });
                    return;
                }
                parseSql({
                    dsId: this.form.dsId,
                    cgrSql: this.form.cgrSql
                }).then(res => {
                    let columns = res.data;
                    //清空
                    this.form.graphReportItemList.splice(0, this.form.graphReportItemList.length);

                    columns.forEach(column => {
                        this.sqlColumns.push(column);
                        this.form.graphReportItemList.push({
                            fieldName: column.columnName,
                            fieldTxt: column.columnName,
                            orderNum: 1,
                            fieldType: column.columnClassName,
                            isShow: 'Y',
                            isTotal: 'N',
                            searchFlag: 'N',
                            dictCode: ''
                        })
                    })

                    this.$notify({
                        title: '解析完成!',
                        type: 'success',
                        duration: 2500
                    });
                })
            },
            add() {
                this.form.graphReportItemList.push({
                    fieldName: '',
                    fieldTxt: '',
                    orderNum: 1,
                    fieldType: '',
                    isShow: 'Y',
                    isTotal: 'N',
                    searchFlag: 'N',
                    dictCode: ''
                })
            },
            // 添加索引
            tableRowClassName(row, index) {
                // 给每条数据添加一个索引
                row.row.index = row.rowIndex
            },
            // 多选
            dataListSelectionChangeHandle(val) {
                this.dataListSelections = val
            },
            del() {
                //拿到选中的数据
                let val = this.dataListSelections;
                //如果选中数据存在
                if (val) {
                    //将选中数据遍历
                    val.forEach((val, index) => {
                        //遍历源数据
                        this.form.graphReportItemList.forEach((v, i) => {
                            //如果选中数据和源数据的某一条唯一标识符相等，删除对应的源数据
                            if (val.index === v.index) {
                                this.form.graphReportItemList.splice(i, 1)
                            }
                        })
                    })
                }
            }
        }
    }
</script>
