// el-select 中自动填充option数据

import {getDictData} from "@/views/model/support/dict/Api";
import { Option } from 'element-ui';

export const dict = {
    install(Vue) {
        Vue.directive('dict', {
            bind(el, binding, vnode) {
                const code = binding.value;
                getDictData(code).then(res => {
                    let dictDataArr = res.data;
                    for (const dictData of dictDataArr) {
                        //todo
                       //  vnode.children = `
                       //      <el-option
                       //          :label="${dictData.name}"
                       //          :value="${dictData.value}">
                       //      </el-option>
                       // `;
                        vnode.children.push(Option);
                    }
                });
            }
        })
    }
};