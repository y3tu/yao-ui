<template>
    <div class="readBody">
        <div class="readMain">
            <div class="readWrap">
                <div class="textBox">
                    <div class="readBox" style="font-size: 16px; font-family: microsoft yahei" v-html="bookContent.content">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import {getBookContent} from './Api'

    export default {
        name: 'bookHome',
        created() {
            let bookId = this.$route.query.bookId;
            let bookIndexId = this.$route.query.bookIndexId;
            this.$nextTick(() => {
                getBookContent(bookId, bookIndexId).then(res => {
                    if (res) {
                        let data = res.data;
                        this.preBookIndexId = data.preBookIndexId;
                        this.nextBookIndexId = data.nextBookIndexId;
                        this.book = data.book;
                        this.bookContent = data.bookContent;
                    }
                })
            })
        },
        data() {
            return {
                book: {},
                preBookIndexId: "",
                nextBookIndexId: "",
                bookContent: ""
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    @import "index";
</style>
