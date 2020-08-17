<template>
    <making-form :json="json" :save=true @saveJson="save"/>
</template>

<script>
    import MakingForm from '@/components/DynamicForm/Container.vue'
    import {getByCode,saveJson} from './Api'

    export default {
        name:'DynamicFormDesign',
        components:{MakingForm},
        data(){
          return{
              json:'',
              code:''
          }
        },
        created() {
            this.code = this.$route.query.code;
            this.$nextTick(() => {
                getByCode(this.code).then(res => {
                    if (res) {
                        let data = res.data;
                        this.json = data.json;
                    }
                })
            })
        },
        methods:{
            save(json){
                saveJson({
                    json:json,
                    code:this.code
                }).then(res=>{
                    if(res){
                        this.$message.success('保存成功!');
                    }
                })
            }
        }
    }
</script>