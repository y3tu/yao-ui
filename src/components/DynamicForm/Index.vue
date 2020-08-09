<template>
    <div class="container">
        <div class="left-board">
            <el-scrollbar class="left-scrollbar">
                <el-tabs v-model="activeTabName" :stretch="true">
                    <el-tab-pane label="常用组件" name="common">
                        <div class="components-list">
                            <draggable
                                    class="components-draggable"
                                    :list="commonComponents"
                                    :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
                                    :clone="cloneComponent"
                                    draggable=".components-item"
                                    :sort="false"
                                    @end="onEnd"/>
                        </div>
                    </el-tab-pane>
                </el-tabs>
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
        commonComponents,
        customMadeComponents,
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
                commonComponents,
                customMadeComponents,
                activeTabName: "common",
            }
        }
    }
</script>