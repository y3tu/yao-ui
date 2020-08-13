import util from '@/utils'

const auth = {
    getToken() {
        return util.db.get('ACCESS_TOKEN', '')
    },

    getRefreshToken() {
        return util.db.get('REFRESH_TOKEN', '')
    },

    getExpireTime() {
        return util.db.get('EXPIRE_TIME', 0)
    },

    getUser() {
        return util.db.get('USER', 0)
    }
};

export default auth
