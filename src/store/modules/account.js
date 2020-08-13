import util from '@/utils'

export default {
    namespaced: true,
    state: {
        accessToken: util.db.get('ACCESS_TOKEN'),//token
        refreshToken: util.db.get('REFRESH_TOKEN'),//刷新token
        expireTime: util.db.get('EXPIRE_TIME', 0),//token失效时间
        user: util.db.get('USER'),//当前登录用户信息
        permissions: util.db.get('PERMISSIONS'),//用户权限
        routes: []//用户菜单路由
    },
    mutations: {
        setAccessToken(state, val) {
            util.db.save('ACCESS_TOKEN', val);
            state.accessToken = val
        },
        setRefreshToken(state, val) {
            util.db.save('REFRESH_TOKEN', val);
            state.refreshToken = val
        },
        setExpireTime(state, val) {
            util.db.save('EXPIRE_TIME', val);
            state.expireTime = val
        },
        setUser(state, val) {
            util.db.save('USER', val);
            state.user = val
        },
        setPermissions(state, val) {
            util.db.save('PERMISSIONS', val);
            state.permissions = val
        },
        setRoutes(state, val) {
            state.routes = val
        }
    }
}
