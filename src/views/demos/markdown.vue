<template>
    <div class="app-container">
        <p class="warn-content">
            Markdown 基于
            <el-link type="primary" href="https://github.com/hinesboy/mavonEditor" target="_blank">MavonEditor</el-link>
            ，图片上传使用
            <el-link type="primary" href="https://sm.ms/" target="_blank">SM.MS</el-link>
        </p>
        <mavon-editor ref="md" :style="'height:' + height" @imgAdd="imgAdd"/>
    </div>
</template>


<script>
    import request from '@/utils/request'

    import {mapGetters} from 'vuex'
    import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import Vue from 'vue'

    Vue.use(mavonEditor)

    export default {
        name: 'Markdown',
        data() {
            return {
                height: document.documentElement.clientHeight - 200 + 'px'
            }
        },
        computed: {
            ...mapGetters([
                'imagesUploadApi'
            ])
        },
        mounted() {
            const that = this
            window.onresize = function temp() {
                that.height = document.documentElement.clientHeight - 200 + 'px'
            }
        },
        methods: {
            imgAdd(pos, $file) {
                request.upload(this.imagesUploadApi, $file).then(res => {
                    this.$refs.md.$img2Url(pos, res.data)
                })
            }
        }
    }
</script>

<style scoped>
</style>
