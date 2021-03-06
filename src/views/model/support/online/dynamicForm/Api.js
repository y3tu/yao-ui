import request from '@/plugin/axios'

export function page(data) {
  return request.putData('support/online/dynamicForm/page',data);
}

export function add(data) {
  return request.postData('support/online/dynamicForm/create',data);
}

export function del(ids) {
  return request.deleteData('support/online/dynamicForm/delete',ids);
}

export function edit(data) {
  return request.putData('support/online/dynamicForm/update',data);
}

export function download(data,fileName) {
  return request.download('support/online/dynamicForm/export',data,fileName);
}

export function getByCode(code) {
  return request.get(`support/online/dynamicForm/getByCode/${code}`)
}

export function saveJson(data) {
  return request.postData('support/online/dynamicForm/saveJson',data);
}

export default { add, edit, del, download}
