<template>
    <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
            <span class="role-span">SQL字典</span>
            <el-button
                    :loading="saveLoading"
                    icon="el-icon-check"
                    size="mini"
                    style="float: right; padding: 6px 9px"
                    type="primary"
                    @click="doSave">保存
            </el-button>
        </div>
        <el-form ref="form" :model="form" :rules="rules" size="small" label-width="100px">
            <el-form-item label="数据源" prop="dsId">
                <el-select v-model="form.dsId" placeholder="请选择" style="width: 40%">
                    <el-option v-for="item in dict.DATA_SOURCE"
                               :key="item.id"
                               :label="item.name"
                               :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="SQL" prop="sqlText">
                <textarea ref="sqlText"/>
            </el-form-item>
            <el-form-item label="条件字段" prop="whereColumn">
                <el-input v-model="form.whereColumn" style="width: 40%"/>
                <span style="color: #C0C0C0;margin-left: 10px;">多个字段用逗号分隔</span>
            </el-form-item>
            <el-form-item label="最大行数" prop="maxRows">
                <el-input-number v-model="form.maxRows" :min="1" :max="500"/>
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="form.description" style="width: 40%"/>
            </el-form-item>
            <el-form-item label="状态" prop="status" style="width: 40%">
                <el-select
                        v-model="form.status"
                        placeholder="请选择"
                        clearable
                        style="width: 110px">
                    <el-option :value="0" label="正常"/>
                    <el-option :value="1" label="禁用"/>
                </el-select>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    import CodeMirror from 'codemirror'
    import 'codemirror/addon/lint/lint.css'
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/theme/rubyblue.css'
    import 'codemirror/mode/javascript/javascript'
    import 'codemirror/addon/lint/lint'
    import 'codemirror/addon/hint/sql-hint'

    import {getDictSql, saveDictSql} from './Api'

    export default {
        // 数据字典
        dicts: ['DATA_SOURCE'],
        data() {
            return {
                saveLoading: false,
                dictId: '',
                form: {
                    dsId: '',
                    sqlText: '',
                    whereColumn: '',
                    maxRows: 99,
                    description: '',
                    status: 0
                },
                rules: {
                    dsId: [
                        {required: true, message: '数据源不能为空', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted() {
            this.sqlEditor = CodeMirror.fromTextArea(this.$refs.sqlText, {
                mode: 'text/x-mysql',
                lint: true,
                lineWrapping: true,
                tabSize: 2,
                cursorHeight: 0.9,
                // 替换主题这里需修改名称
                theme: 'rubyblue',
            });
            this.sqlEditor.setSize('auto','150px');
        },
        methods: {
            created() {
                this.$nextTick(() => {
                    this.init();
                })
            },
            init() {
                if (this.$isNotEmpty(this.dictId)) {
                    getDictSql(this.dictId).then(res => {
                        if (this.$isNotEmpty(res.data)) {
                            delete res.data.createTime;
                            delete res.data.updateTime;
                            this.form = res.data;
                            this.sqlEditor.setValue(this.form.sqlText);
                        }else {
                            this.form = {
                                dsId: '',
                                sqlText: '',
                                whereColumn: '',
                                maxRows: 99,
                                description: '',
                                status: 0
                            };
                            this.sqlEditor.setValue('');
                        }
                    })
                }
            },
            doSave() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.saveLoading = true;
                        this.form.dictId = this.dictId;
                        this.form.sqlText = this.sqlEditor.getValue();
                        saveDictSql(this.form).then(res => {
                            this.saveLoading = false;
                            this.$notify({
                                title: '保存成功',
                                type: 'success',
                                duration: 2500
                            });
                        }).catch(err => {
                            this.saveLoading = false;
                        })
                    }
                })
            }
        }
    }
</script>

<style>

</style>