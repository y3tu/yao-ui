import request from '@/utils/request'

export function page(data) {
  return request.putData('support/file/picture/page',data);
}

export function add(data) {
  return request.postData('support/file/picture/create',data);
}

export function del(ids) {
  return request.deleteData('support/file/picture/delete',ids);
}

export function edit(data) {
  return request.putData('support/file/picture/update',data);
}

export function sync(data) {
  return request.get('support/file/picture/sync',data);
}

export function download(data,fileName) {
  return request.download('support/file/picture/export',data,fileName);
}

export default { add, edit, del, sync}
