import request from '@/utils/request'

export function page(data) {
  return request.putData('book/book/author/page',data);
}

export function add(data) {
  return request.postData('book/book/author/create',data);
}

export function del(ids) {
  return request.deleteData('book/book/author/delete',ids);
}

export function edit(data) {
  return request.putData('book/book/author/update',data);
}

export default { add, edit, del }
