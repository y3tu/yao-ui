import request from '@/plugin/axios'


export function page(data) {
    return request.postData('support/file/localStorage/page', data);
}

export function del(ids) {
    return request.deleteData('support/file/localStorage/delete', ids);
}

export function edit(data) {
    return request.putData('support/file/localStorage/update', data);
}

export function download(storageId, fileName) {
    return request.downloadGet(`support/file/localStorage/file/${storageId}`, fileName);
}

export function downloadBatch(data, fileName) {
    return request.download('support/file/localStorage/fileBatch', data,fileName);
}

export default {edit, del}
