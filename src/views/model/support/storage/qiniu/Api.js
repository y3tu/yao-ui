import request from '@/plugin/axios'


export function page(data) {
    return request.postData('support/file/qiniu/page', data);
}

export function del(ids) {
    return request.deleteData('support/file/qiniu/delete', ids);
}

export function sync(data) {
    return request.get('support/file/qiniu/sync', data);
}

export function download(contentId) {
    return request.get(`support/file/qiniu/download/${contentId}`);
}

export function getConfig() {
    return request.get('support/file/qiniu/getConfig');
}

export function updateConfig(data) {
    return request.putData('support/file/qiniu/updateConfig',data);
}

export default {sync, del, download}
