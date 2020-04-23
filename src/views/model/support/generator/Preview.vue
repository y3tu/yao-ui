<template>
    <el-tabs v-model="activeName" type="card">
        <el-tab-pane v-for="item in data" :key="item.name" :lazy="true" :label="item.name" :name="item.name">
            <Java :value="item.content" :height="height"/>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import Java from '@/components/JavaEdit/index'
    import {genPreview} from "./Api";

    export default {
        name: 'GeneratorPreview',
        components: { Java },
        data() {
            return {
                data: null,
                height: '',
                activeName: 'Entity.java'
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
                this.$router.go(-1)
            })
        }
    }
</script>