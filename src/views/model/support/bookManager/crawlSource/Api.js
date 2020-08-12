import request from '@/plugin/axios'

export function page(data) {
  return request.putData('support/book/crawlSource/page',data);
}

export function add(data) {
  return request.postData('support/book/crawlSource/create',data);
}

export function del(ids) {
  return request.deleteData('support/book/crawlSource/delete',ids);
}

export function edit(data) {
  return request.putData('support/book/crawlSource/update',data);
}

export function download(data,fileName) {
  return request.download('support/book/crawlSource/export',data,fileName);
}

export default { add, edit, del, download}
