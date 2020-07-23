import request from '@/utils/request'

export function page(data) {
    return request.putData('support/book/crawlSingleTask/page', data);
}

export function add(data) {
    return request.postData('support/book/crawlSingleTask/create', data);
}

export function del(ids) {
    return request.deleteData('support/book/crawlSingleTask/delete', ids);
}

export function edit(data) {
    return request.putData('support/book/crawlSingleTask/update', data);
}

export function download(data, fileName) {
    return request.download('support/book/crawlSingleTask/export', data, fileName);
}

export function resetTask(data) {
  return request.post('support/book/crawlSingleTask/resetTask', data);
}

export default {add, edit, del, download}
