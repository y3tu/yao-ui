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

                                  <li v-if="layoutFields.indexOf(item.type) >=0" class="form-edit-widget-label no-put" v-for="(item, index) in layoutComponents" :key="index">
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
                             <widget-form v-if="!resetJson" ref="widgetForm" :data="widgetForm" :select.sync="widgetFormSelect"></widget-form>
                        </el-main>
                    </el-container>

                    <el-aside class="widget-config-container">
                        <el-container>
                          <el-header height="45px">
                            <div class="config-tab" :class="{active: configTab==='widget'}" @click="handleConfigSelect('widget')">组件属性</div>
                            <div class="config-tab" :class="{active: configTab==='form'}" @click="handleConfigSelect('form')">表单属性</div>
                          </el-header>
                          <el-main class="config-content">
                            <widget-config v-show="configTab==='widget'" :data="widgetFormSelect"></widget-config>
                            <form-config v-show="configTab==='form'" :data="widgetForm.config"></form-config>
                          </el-main>
                        </el-container>
                    </el-aside>


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

    import {basicComponents, layoutComponents, advanceComponents} from './componentsConfig.js'


    export default {
        name: 'fm-making-form',
        components: {
            Draggable,
            WidgetForm,
            WidgetConfig,
            FormConfig,
        },
        props: {
            preview: {
                type: Boolean,
                default: false
            },
            generateCode: {
                type: Boolean,
                default: false
            },
            generateJson: {
                type: Boolean,
                default: false
            },
            upload: {
                type: Boolean,
                default: true
            },
            clearable: {
                type: Boolean,
                default: false
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

            handleUpload() {

            },
            handleClear() {

            },
            handlePreview() {

            },
            handleGenerateJson() {

            },
            handleGenerateCode() {

            }

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
