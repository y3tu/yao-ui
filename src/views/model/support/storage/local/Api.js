import request from '@/utils/request'


export function page(data) {
    return request.postData('support/file/localStorage/page', data);
}

export function add(data) {
    return request.postData('support/file/localStorage/create', data);
}

export function del(ids) {
    return request.deleteData('support/file/localStorage/delete', ids);
}

export function edit(data) {
    return request.putData('support/file/localStorage/update', data);
}

export default {add, edit, del}
