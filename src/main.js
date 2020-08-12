import Vue from 'vue'

//主页
import App from './App'
//store状态
import store from './store'
//路由
import router from './router'
//ElementUI
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import '@/styles/element-variables.scss'
import '@/styles/index.scss' //全局css
//国际化
import i18n from '@/lang'
//图标
import './icons'
// 核心插件
import plugin from '@/plugin'
// filter
import * as filters from './filters'

// 核心插件
Vue.use(plugin);


// 国际化
Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value)
});

//注册filter
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
});
