<template>
    <span class="fm-style">
        <el-container class="fm2-container">
            <el-main class="fm2-main">
                <el-container>
                    <el-aside width="250px">
                        <div class="components-list">

                            <template v-if="basicFields.length">
                                <div class="widget-cate">基础组件</div>
                                <draggable tag="ul" :list="basicComponents"
                                           v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                                           @end="handleMoveEnd"
                                           @start="handleMoveStart"
                                           :move="handleMove">
                                    <li v-if="basicFields.indexOf(item.type)>=0" class="form-edit-widget-label" :class="{'no-put': item.type === 'divider'}"
                                        v-for="(item, index) in basicComponents" :key="index">
                                        <a>
                                          <svg-icon :icon-class="item.icon"/><span style="margin-left: 6px">{{item.name}}</span>
                                        </a>
                                    </li>
                                </draggable>
                            </template>

                            <template v-if="advanceFields.length">
                                <div class="widget-cate">高级组件</div>
                                <draggable tag="ul" :list="advanceComponents"
                                           v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                                           @end="handleMoveEnd"
                                           @start="handleMoveStart"
                                           :move="handleMove">

                                  <li v-if="advanceFields.indexOf(item.type) >= 0" class="form-edit-widget-label" :class="{'no-put': item.type === 'table'}"
                                      v-for="(item, index) in advanceComponents" :key="index">
                                    <a>
                                      <svg-icon :icon-class="item.icon"/><span style="margin-left: 6px">{{item.name}}</span>
                                    </a>
                                  </li>
                                </draggable>
                            </template>


                            <template v-if="layoutFields.length">
                                <div class="widget-cate">布局组件</div>
                                <draggable tag="ul" :list="layoutComponents"
                                           v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                                           @end="handleMoveEnd"
                                           @start="handleMoveStart"
                                           :move="handleMove">

                                  <li v-if="layoutFields.indexOf(item.type) >=0" class="form-edit-widget-label no-put" v-for="(item, index) in layoutComponents"
                                      :key="index">
                                    <a>
                                      <svg-icon :icon-class="item.icon"/><span style="margin-left: 6px">{{item.name}}</span>
                                    </a>
                                  </li>
                                </draggable>
                            </template>

                        </div>
                    </el-aside>

                    <el-container class="center-container" direction="vertical">
                        <el-header class="btn-bar" style="height: 45px;">
                          <slot name="action">
                          </slot>
                          <el-button v-if="upload" type="text" size="medium" icon="el-icon-upload2" @click="handleUpload">导入Json</el-button>
                          <el-button v-if="clearable" type="text" size="medium" icon="el-icon-delete" @click="handleClear">清空</el-button>
                          <el-button v-if="preview" type="text" size="medium" icon="el-icon-view" @click="handlePreview">预览</el-button>
                          <el-button v-if="generateJson" type="text" size="medium" icon="el-icon-tickets" @click="handleGenerateJson">生成Json</el-button>
                          <el-button v-if="generateCode" type="text" size="medium" icon="el-icon-document" @click="handleGenerateCode">生成代码</el-button>
                        </el-header>
                        <el-main :class="{'widget-empty': widgetForm.list.length === 0}">
                             <widget-form v-if="!resetJson" ref="widgetForm" :data="widgetForm" :select.sync="widgetFormSelect"/>
                        </el-main>
                    </el-container>

                    <el-aside class="widget-config-container">
                        <el-container>
                          <el-header height="45px">
                            <div class="config-tab" :class="{active: configTab==='widget'}" @click="handleConfigSelect('widget')">组件属性</div>
                            <div class="config-tab" :class="{active: configTab==='form'}" @click="handleConfigSelect('form')">表单属性</div>
                          </el-header>
                          <el-main class="config-content">
                            <widget-config v-show="configTab==='widget'" :data="widgetFormSelect"/>
                            <form-config v-show="configTab==='form'" :data="widgetForm.config"/>
                          </el-main>
                        </el-container>
                    </el-aside>

                     <custom-dialog
                             :visible="previewVisible"
                             @on-close="previewVisible = false"
                             ref="widgetPreview"
                             width="1000px"
                             form>
                        <generator-form insite="true" @on-change="handleDataChange" v-if="previewVisible" :data="widgetForm" :value="widgetModels"
                                        :remote="remoteFuncs" ref="generatorForm">

                          <template v-slot:blank="scope">
                            Width <el-input v-model="scope.model.blank.width" style="width: 100px"/>
                            Height <el-input v-model="scope.model.blank.height" style="width: 100px"/>
                          </template>
                        </generator-form>

                        <template slot="action">
                          <el-button type="primary" @click="handleTest">获取数据</el-button>
                          <el-button @click="handleReset">重置</el-button>
                        </template>
                     </custom-dialog>

                    <custom-dialog
                            :visible="uploadVisible"
                            @on-close="uploadVisible = false"
                            @on-submit="handleUploadJson"
                            ref="uploadJson"
                            width="800px"
                            form>
                        <el-alert type="info" title="JSON格式如下，直接复制生成的json覆盖此处代码点击确定即可"/>
                        <code-edit v-model="jsonEg" height="400" codeType="text/x-json"/>
                    </custom-dialog>

                    <custom-dialog
                            :visible="jsonVisible"
                            @on-close="jsonVisible = false"
                            ref="jsonPreview"
                            width="800px"
                            form>
                        <code-edit v-model="jsonTemplate" height="400" codeType="text/x-json"/>
                        <template slot="action">
                            <el-button type="primary" class="json-btn" :data-clipboard-text="jsonCopyValue">复制数据</el-button>
                        </template>
                    </custom-dialog>

                    <custom-dialog
                            :visible="codeVisible"
                            @on-close="codeVisible = false"
                            ref="codePreview"
                            width="800px"
                            form
                            :action="false">
                    <el-tabs type="border-card" style="box-shadow: none;" v-model="codeActiveName">
                      <el-tab-pane label="Vue Component" name="vue">
                           <code-edit v-model="vueTemplate" height="500" codeType="javascript"/>
                      </el-tab-pane>
                      <el-tab-pane label="HTML" name="html">
                           <code-edit v-model="htmlTemplate" height="500" codeType="html"/>
                      </el-tab-pane>
                    </el-tabs>
                  </custom-dialog>

                </el-container>
            </el-main>
        </el-container>
    </span>
</template>

<script>
    import Draggable from 'vuedraggable'
    import WidgetForm from './WidgetForm'
    import WidgetConfig from './WidgetConfig'
    import FormConfig from './FormConfig'
    import CustomDialog from './CustomDialog'
    import GeneratorForm from './GeneratorForm'
    import CodeEdit from '@/components/CodeEdit'
    import Clipboard from 'clipboard'
    import generateCode from './generateCode.js'


    import {basicComponents, layoutComponents, advanceComponents} from './componentsConfig.js'


    export default {
        name: 'fm-making-form',
        components: {
            Draggable,
            WidgetForm,
            WidgetConfig,
            FormConfig,
            CustomDialog,
            GeneratorForm,
            CodeEdit
        },
        props: {
            preview: {
                type: Boolean,
                default: true
            },
            generateCode: {
                type: Boolean,
                default: true
            },
            generateJson: {
                type: Boolean,
                default: true
            },
            upload: {
                type: Boolean,
                default: true
            },
            clearable: {
                type: Boolean,
                default: true
            },
            basicFields: {
                type: Array,
                default: () => ['input', 'textarea', 'number', 'radio', 'checkbox', 'time', 'date', 'rate', 'color', 'select', 'switch', 'slider', 'text']
            },
            advanceFields: {
                type: Array,
                default: () => ['blank', 'imgupload', 'editor', 'cascader']
            },
            layoutFields: {
                type: Array,
                default: () => ['grid']
            }
        },
        data() {
            return {
                basicComponents,
                layoutComponents,
                advanceComponents,
                resetJson: false,
                widgetForm: {
                    list: [],
                    config: {
                        labelWidth: 100,
                        labelPosition: 'right',
                        size: 'small'
                    },
                },
                configTab: 'widget',
                widgetFormSelect: null,
                previewVisible: false,
                jsonVisible: false,
                codeVisible: false,
                uploadVisible: false,
                remoteFuncs: {
                    func_test(resolve) {
                        setTimeout(() => {
                            const options = [
                                {id: '1', name: '1111'},
                                {id: '2', name: '2222'},
                                {id: '3', name: '3333'}
                            ];

                            resolve(options)
                        }, 2000)
                    },
                    funcGetToken(resolve) {
                        request.get('http://tools-server.xiaoyaoji.cn/api/uptoken').then(res => {
                            resolve(res.uptoken)
                        })
                    },
                    upload_callback(response, file, fileList) {
                        console.log('callback', response, file, fileList)
                    }
                },

                widgetModels: {},
                jsonEg: '',
                jsonCopyValue: '',
                jsonTemplate: '',
                jsonClipboard: null,
                vueTemplate: '',
                htmlTemplate: '',
                codeActiveName: 'vue',
            }
        },
        methods: {
            handleConfigSelect(value) {
                this.configTab = value
            },
            handleMoveEnd(evt) {
                console.log('end', evt)
            },
            handleMoveStart({oldIndex}) {
                console.log('start', oldIndex, this.basicComponents)
            },
            handleMove() {
                return true
            },
            handleClear() {
                this.widgetForm = {
                    list: [],
                    config: {
                        labelWidth: 100,
                        labelPosition: 'right',
                        size: 'small',
                        customClass: ''
                    },
                };
                this.widgetFormSelect = {}
            },
            handlePreview() {
                console.log(this.widgetForm);
                this.previewVisible = true
            },
            handleGenerateJson() {
                this.jsonVisible = true;
                this.jsonTemplate = JSON.stringify(this.widgetForm,null,4);
                if (!this.jsonClipboard) {
                    this.jsonClipboard = new Clipboard('.json-btn');
                    this.jsonClipboard.on('success', (e) => {
                        this.$message.success('复制成功')
                    })
                }
                this.jsonCopyValue = JSON.stringify(this.widgetForm)
            },
            handleGenerateCode() {
                this.codeVisible = true;
                this.htmlTemplate = generateCode(JSON.stringify(this.widgetForm), 'html');
                this.vueTemplate = generateCode(JSON.stringify(this.widgetForm), 'vue')
            },
            handleUpload() {
                this.uploadVisible = true
            },
            handleUploadJson() {
                try {
                    this.setJSON(JSON.parse(this.jsonEg));
                    this.uploadVisible = false
                } catch (e) {
                    this.$message.error(e.message);
                    this.$refs.uploadJson.end()
                }
            },
            handleTest() {
                this.$refs.generatorForm.getData().then(data => {
                    this.$alert(data, '').catch(e => {
                    });
                    this.$refs.widgetPreview.end()
                }).catch(e => {
                    this.$refs.widgetPreview.end()
                })
            },
            handleReset() {
                this.$refs.generatorForm.reset()
            },
            handleDataChange(field, value, data) {
                console.log(field, value, data)
            },
            setJSON(json) {
                this.widgetForm = json;
                if (json.list.length > 0) {
                    this.widgetFormSelect = json.list[0]
                }
            },
        },
        watch: {
            widgetForm: {
                deep: true,
                handler: function (val) {
                    console.log(this.$refs.widgetForm)
                }
            },
        }
    }

</script>

<style lang="scss">
    @import "./styles/index.scss";
    @import "./styles/cover.scss";
</style>
