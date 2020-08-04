<template>
    <el-tabs v-model="activeName" type="card">
        <el-tab-pane v-for="item in data" :key="item.name" :lazy="true" :label="item.name" :name="item.name">
            <code-edit :value="item.content" :height="height" code-type="text/x-java"/>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import CodeEdit from '@/components/CodeEdit/index'
    import {genPreview} from "./Api";

    export default {
        name: 'GeneratorPreview',
        components: { CodeEdit },
        data() {
            return {
                data: null,
                height: '',
                activeName: 'Entity.java'
            }
        },
        computed: {
            visitedViews() {
                return this.$store.state.tagsView.visitedViews
            },
            routes() {
                return this.$store.state.account.routes
            }
        },
        created() {
            this.height = document.documentElement.clientHeight - 180 + 'px';
            let data = {
                tableName:this.$route.query.tableName,
                dsId:this.$route.query.dsId
            };
            genPreview(data).then(res => {
                this.data = res.data
            }).catch(() => {
                //预览异常 关闭当前预览页面 跳回上一个页面
                this.$store.dispatch('tagsView/delView',  this.$route)
                this.$router.go(-1)
            })
        }
    }
</script>