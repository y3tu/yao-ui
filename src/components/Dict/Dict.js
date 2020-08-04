import Vue from 'vue'
import {getDictData} from "@/views/model/base/tool/dict/Api";

export default class Dict {
    constructor(dict) {
        this.dict=dict;
    }

    async init(codes,completeCallback){
        if (codes === undefined || codes === null) {
            throw new Error('need Dict names')
        }
        const ps = [];
        codes.forEach(code=>{
            Vue.set(this.dict.dict, code, {});
            Vue.set(this.dict.name, code, {});
            Vue.set(this.dict, code, [])

            ps.push(getDictData(code).then(res=>{
                let dictDataArr = res.data;
                this.dict[code].splice(0, 0, ...dictDataArr);
                dictDataArr.forEach(dictData=>{
                    Vue.set(this.dict.dict[code], dictData.value, dictData);
                    Vue.set(this.dict.name[code], dictData.value, dictData.name)
                });
            }))
        });
        await Promise.all(ps);
        completeCallback()
    }
}