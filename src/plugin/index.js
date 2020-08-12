import request from "./axios";
// 数据字典
import dict from './dict'
// 权限指令
import {hasPermission, hasNoPermission, hasAnyPermission} from './permission'
//背景粒子效果
import VueParticlesBg from "particles-bg-vue";
//echarts图表相关
import echarts from 'echarts'
import 'echarts/lib/chart/map.js'
import 'echarts/map/js/china.js'
import '@/components/Dashboard/Widgets/libs' // chart libs

// 功能插件
import pluginError from '@/plugin/error'
import pluginLog from '@/plugin/log'


//常用方法
import {isEmpty,isNotEmpty} from "@/utils/validate"
import {deepClone} from "@/utils"


export default {
    async install (Vue, options) {

        // 字典
        Vue.use(dict);
        // 权限指令
        Vue.use(hasPermission);
        Vue.use(hasNoPermission);
        Vue.use(hasAnyPermission);
        //背景粒子效果
        Vue.use(VueParticlesBg);

        // 插件
        Vue.use(pluginError);
        Vue.use(pluginLog);
        // 挂载全局
        Vue.prototype.$echarts = echarts;
        Vue.prototype.$deepClone = deepClone;
        Vue.prototype.$isEmpty = isEmpty;
        Vue.prototype.$isNotEmpty = isNotEmpty;
        Vue.prototype.$page = request.page;
        Vue.prototype.$login = request.login;
        Vue.prototype.$get = request.get;
    }
}
