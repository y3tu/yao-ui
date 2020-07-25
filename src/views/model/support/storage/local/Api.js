import request from '@/utils/request'


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


export function previewImage(url) {
    return request.previewImage(url);
}

export default {edit, del}
