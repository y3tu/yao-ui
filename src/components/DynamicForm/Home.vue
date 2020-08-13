<template>
    <div class="container">
        <div class="left-board">
            <el-scrollbar class="left-scrollbar">
                <div class="components-list">
                    <div v-for="(item, listIndex) in leftComponents" :key="listIndex">
                        <div class="components-title">
                            <svg-icon icon-class="component" />
                            {{ item.title }}
                        </div>
                        <draggable
                                class="components-draggable"
                                :list="item.list"
                                :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
                                :clone="cloneComponent"
                                draggable=".components-item"
                                :sort="false"
                                @end="onEnd">
                            <div
                                    v-for="(element, index) in item.list"
                                    :key="index"
                                    class="components-item"
                                    @click="addComponent(element)">
                                <div class="components-body">
                                    <svg-icon :icon-class="element.__config__.tagIcon" />
                                    {{ element.__config__.label }}
                                </div>
                            </div>
                        </draggable>
                    </div>
                </div>
            </el-scrollbar>
        </div>

        <div class="center-board">
            <div class="action-bar">
                <el-button icon="el-icon-video-play" type="text" @click="run">
                    运行
                </el-button>
                <el-button icon="el-icon-view" type="text" @click="showJson">
                    查看json
                </el-button>
                <el-button icon="el-icon-download" type="text" @click="download">
                    导出vue文件
                </el-button>
                <el-button class="copy-btn-main" icon="el-icon-document-copy" type="text" @click="copy">
                    复制代码
                </el-button>
                <el-button class="delete-btn" icon="el-icon-delete" type="text" @click="empty">
                    清空
                </el-button>
            </div>

            <el-scrollbar class="center-scrollbar">
                <el-row class="center-board-row" :gutter="formConf.gutter">
                    <el-form
                            :size="formConf.size"
                            :label-position="formConf.labelPosition"
                            :disabled="formConf.disabled"
                            :label-width="formConf.labelWidth + 'px'">
                        <draggable class="drawing-board" :list="drawingList" :animation="340" group="componentsGroup">
                            <draggable-item
                                    v-for="(item, index) in drawingList"
                                    :key="item.renderKey"
                                    :drawing-list="drawingList"
                                    :current-item="item"
                                    :index="index"
                                    :active-id="activeId"
                                    :form-conf="formConf"
                                    @activeItem="activeFormItem"
                                    @copyItem="drawingItemCopy"
                                    @deleteItem="drawingItemDelete"/>
                        </draggable>
                        <div v-show="!drawingList.length" class="empty-info">
                            从左侧拖入或点选组件进行表单设计
                        </div>
                    </el-form>
                </el-row>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
    import draggable from "vuedraggable";
    import DraggableItem from './DraggableItem'


    import {
        getDrawingList, saveDrawingList, getIdGlobal, saveIdGlobal, getFormConf
    } from './util/db'

    //获取组件
    import {
        formConf,
        inputComponents,
        selectComponents,
        layoutComponents,

    } from "./components/generator/config";
    import drawingDefault from './components/generator/drawingDefault'


    let tempActiveData;
    const idGlobal = getIdGlobal();

    export default {
        components: {
            draggable,
            DraggableItem
        },
        data(){
            return{
                idGlobal,
                drawingList: drawingDefault,
                activeId: drawingDefault[0].formId,
                formConf,
                inputComponents,
                selectComponents,
                layoutComponents,

                leftComponents: [
                    {
                        title: '输入型组件',
                        list: inputComponents
                    },
                    {
                        title: '选择型组件',
                        list: selectComponents
                    },
                    {
                        title: '布局型组件',
                        list: layoutComponents
                    }
                ]
            }
        },
        methods:{
            activeFormItem(currentItem) {
                this.activeData = currentItem;
                this.activeId = currentItem.__config__.formId
            },
            onEnd(obj) {
                if (obj.from !== obj.to) {
                    this.activeData = tempActiveData
                    this.activeId = this.idGlobal
                }
            },
            addComponent(item) {
                const clone = this.cloneComponent(item)
                this.drawingList.push(clone)
                this.activeFormItem(clone)
            },
            cloneComponent(origin) {
                const clone = this.$deepClone(origin);
                const config = clone.__config__;
                config.span = this.formConf.span; // 生成代码时，会根据span做精简判断
                this.createIdAndKey(clone);
                clone.placeholder !== undefined && (clone.placeholder += config.label);
                tempActiveData = clone;
                return tempActiveData
            },
            createIdAndKey(item) {
                const config = item.__config__;
                config.formId = ++this.idGlobal;
                config.renderKey = `${config.formId}${+new Date()}`; // 改变renderKey后可以实现强制更新组件
                if (config.layout === 'colFormItem') {
                    item.__vModel__ = `field${this.idGlobal}`
                } else if (config.layout === 'rowFormItem') {
                    config.componentName = `row${this.idGlobal}`;
                    !Array.isArray(config.children) && (config.children = []);
                    delete config.label // rowFormItem无需配置label属性
                }
                if (Array.isArray(config.children)) {
                    config.children = config.children.map(childItem => this.createIdAndKey(childItem))
                }
                return item
            },
            drawingItemCopy(item, list) {
                let clone = this.$deepClone(item)
                clone = this.createIdAndKey(clone)
                list.push(clone)
                this.activeFormItem(clone)
            },
            drawingItemDelete(index, list) {
                list.splice(index, 1)
                this.$nextTick(() => {
                    const len = this.drawingList.length;
                    if (len) {
                        this.activeFormItem(this.drawingList[len - 1])
                    }
                })
            },
            run(){

            },
            showJson(){

            },
            download(){

            },
            copy(){

            },
            empty(){

            }
        }
    }
</script>

<style lang='scss'>
    @import './styles/home';
</style>
