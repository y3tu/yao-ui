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
    </div>
</template>

<script>
    import draggable from "vuedraggable";
    //获取组件
    import {
        formConf,
        inputComponents,
        selectComponents,
        layoutComponents,

    } from "./components/generator/config";

    export default {
        components: {
            draggable
        },
        data(){
            return{
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

            cloneComponent(origin) {
                const clone = this.$deepClone(origin)
                const config = clone.__config__
                config.span = this.formConf.span // 生成代码时，会根据span做精简判断
                this.createIdAndKey(clone)
                clone.placeholder !== undefined && (clone.placeholder += config.label)
                tempActiveData = clone
                return tempActiveData
            },
        }
    }
</script>