import util from '@/utils'
import {getLanguage} from '@/lang/index'

export default {
    namespaced: true,
    state: {
        settingBar: {
            opened: false
        },
        sidebar: {
            opened: util.db.get('SIDEBAR_STATUS', true),
            withoutAnimation: false
        },
        device: 'desktop',
        language: getLanguage(),
        sidebarLogo: util.db.get('SIDEBAR_LOGO', true),
        multipage: util.db.get('MULTIPAGE', true),
        fixSiderbar: util.db.get('FIX_SIDERBAR', true),
        fixHeader: util.db.get('FIX_HEADER', true),
        colorList: [
            'rgb(245, 34, 45)',
            'rgb(250, 84, 28)',
            'rgb(250, 173, 20)',
            'rgb(66, 185, 131)',
            'rgb(82, 196, 26)',
            'rgb(24, 144, 255)',
            'rgb(47, 84, 235)',
            'rgb(114, 46, 209)'
        ],
        color: util.db.get('COLOR', 'rgb(24, 144, 255)'),
        theme: '#1890FF'
    },
    mutations: {
        //侧边菜单导航开关切换
        toggleSidebar: state => {
            state.sidebar.opened = !state.sidebar.opened;
            state.sidebar.withoutAnimation = false;
            if (state.sidebar.opened) {
                util.db.save('SIDEBAR_STATUS', 1)
            } else {
                util.db.save('SIDEBAR_STATUS', 0)
            }
        },
        //打开侧边菜单导航
        closeSidebar: (state, withoutAnimation) => {
            util.db.save('SIDEBAR_STATUS', 0);
            state.sidebar.opened = false;
            state.sidebar.withoutAnimation = withoutAnimation
        },
        //打开设置导航
        openSettingBar(state, val) {
            state.settingBar.opened = val
        },
        setMultipage(state, multipage) {
            util.db.save('MULTIPAGE', multipage);
            state.multipage = multipage
        },
        fixSiderbar(state, val) {
            util.db.save('FIX_SIDERBAR', val);
            state.fixSiderbar = val
        },
        fixHeader(state, val) {
            util.db.save('FIX_HEADER', val);
            state.fixHeader = val
        },
        setSettingBar(state, val) {
            state.settingBar.opened = val
        },
        setColor(state, color) {
            util.db.save('COLOR', color);
            state.color = color
        },
        setLanguage: (state, language) => {
            util.db.save('LANGUAGE', language);
            state.language = language
        },
        toggleDevice: (state, device) => {
            state.device = device
        },
        setSidebarLogo(state, val) {
            util.db.save('SIDEBAR_LOGO', val);
            state.sidebarLogo = val
        },
        setTheme(state, val) {
            state.theme = val
        }
    }
}
