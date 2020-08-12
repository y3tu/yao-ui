import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import setting from './modules/setting'
import tagsView from './modules/tagsView'
import api from './modules/api'
import log from './modules/log'

import getters from './getters'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        account,
        setting,
        tagsView,
        api,
        log
    },
    getters
});

export default store
