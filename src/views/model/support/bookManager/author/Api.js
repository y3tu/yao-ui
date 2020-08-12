import request from '@/plugin/axios'

export function page(data) {
    return request.putData('support/book/author/page', data);
}

export function add(data) {
    return request.postData('support/book/author/create', data);
}

export function del(ids) {
    return request.deleteData('support/book/author/delete', ids);
}

export function edit(data) {
    return request.putData('support/book/author/update', data);
}

export function download(data, fileName) {
    return request.download('support/book/author/export', data, fileName);
}

export default {add, edit, del, download}
