<template>
    <el-tabs v-model="activeName" style="padding-left: 8px;" @tab-click="tabClick">
        <el-tab-pane label="本地存储" name="first">
            <local ref="local"/>
        </el-tab-pane>
        <el-tab-pane label="七牛云存储" name="second">
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import Local from './local/Index'

    export default {
        name: 'Storage',
        components: {Local},
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