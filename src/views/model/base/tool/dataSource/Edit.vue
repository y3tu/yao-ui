<template>
    <el-dialog
            :title="title"
            :width="width"
            top="50px"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :visible.sync="isVisible">
        <el-form ref="form" :model="dataSource" :rules="rules" label-position="right" label-width="120px">
            <el-form-item label="数据源名称" prop="name">
                <el-input v-model="dataSource.name"/>
            </el-form-item>
            <el-form-item label="数据源类型" prop="type">
                <el-select v-model="dataSource.type" placeholder="请选择" class="filter-item">
                    <el-option value="mysql" label="mysql"/>
                    <el-option value="oracle" label="oracle"/>
                </el-select>
            </el-form-item>
            <el-form-item label="驱动" prop="driverClass">
                <el-input v-model="dataSource.driverClass"/>
            </el-form-item>
            <el-form-item label="数据源连接Url" prop="jdbcUrl">
                <el-input v-model="dataSource.jdbcUrl" />
            </el-form-item>
            <el-form-item label="登录用户名" prop="username">
                <el-input v-model="dataSource.username"/>
            </el-form-item>
            <el-form-item label="登录密码" prop="password">
                <el-input v-model="dataSource.password" show-password/>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="warning" plain :loading="buttonLoading" @click="isVisible = false">
                {{ $t('common.cancel') }}
            </el-button>
            <el-button type="primary" plain :loading="buttonLoading" @click="submitForm">
                {{ $t('common.confirm') }}
            </el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name:'dataSourceEdit',
        props: {
            dialogVisible: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            }
        },
        data(){
            return{
                dataSource:this.initDataSource(),
                screenWidth: 0,
                width: this.initWidth(),
                buttonLoading:false,
                rules:{
                    name:{required: true, message: this.$t('rules.require'), trigger: 'blur'},
                    type:{required: true, message: this.$t('rules.require'), trigger: 'blur'},
                    driverClass:{required: true, message: this.$t('rules.require'), trigger: 'blur'},
                    jdbcUrl:{required: true, message: this.$t('rules.require'), trigger: 'blur'},
                    username:{required: true, message: this.$t('rules.require'), trigger: 'blur'},
                    password:{required: true, message: this.$t('rules.require'), trigger: 'blur'}
                },

            }
        },
        mounted() {
            window.onresize = () => {
                return (() => {
                    this.width = this.initWidth()
                })()
            }
        },
        computed: {
            isVisible: {
                get() {
                    return this.dialogVisible
                },
                set() {
                    this.close();
                    this.reset()
                }
            }
        },
        methods: {
            initDataSource(){
                return {
                    id: '',
                    name: '',
                    type:'',
                    driverClass: '',
                    jdbcUrl: '',
                    username: '',
                    password: ''
                }
            },
            initWidth() {
                this.screenWidth = document.body.clientWidth;
                if (this.screenWidth < 991) {
                    return '90%'
                } else if (this.screenWidth < 1400) {
                    return '45%'
                } else {
                    return '800px'
                }
            },
            setDataSource(val) {
                this.dataSource = {...val}
            },
            close() {
                this.$emit('close')
            },
            reset() {
                this.$refs.form.clearValidate();
                this.$refs.form.resetFields();
                this.dataSource=this.initDataSource();
            },
            submitForm(){
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.buttonLoading = true;
                        if (!this.dataSource.id) {
                            // create
                            this.$post('base/dataSource/create', {...this.dataSource}).then(() => {
                                this.buttonLoading = false;
                                this.isVisible = false;
                                this.$message({
                                    message: this.$t('tips.createSuccess'),
                                    type: 'success'
                                });
                                this.$emit('success')
                            }).catch(() => {
                                this.buttonLoading = false;
                            });
                        }else {
                            // update
                            this.dataSource.createTime = this.dataSource.modifyTime  = null;
                            this.$put('base/dataSource/update', {...this.dataSource}).then(() => {
                                this.buttonLoading = false;
                                this.isVisible = false;
                                this.$message({
                                    message: this.$t('tips.updateSuccess'),
                                    type: 'success'
                                });
                                this.$emit('success')
                            }).catch(() => {
                                this.buttonLoading = false;
                            });
                        }
                    }else {
                        return false;
                    }
                })
            }
        }
    }
</script>

<style>

</style>