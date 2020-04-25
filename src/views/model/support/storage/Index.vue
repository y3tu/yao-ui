<template>
    <el-tabs v-model="activeName" style="padding-left: 8px;" @tab-click="tabClick">
        <el-tab-pane label="本地存储" name="first">
        </el-tab-pane>
        <el-tab-pane label="七牛云存储" name="second">
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: 'Storage',
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            tabClick(name) {

            }
        }


    }
</script>

<style>

</style>