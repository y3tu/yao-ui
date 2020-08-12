import request from '@/plugin/axios'

export function page(data) {
  return request.putData('support/book/book/page',data);
}

export function add(data) {
  return request.postData('support/book/book/create',data);
}

export function del(ids) {
  return request.deleteData('support/book/book/delete',ids);
}

export function edit(data) {
  return request.putData('support/book/book/update',data);
}

export function download(data,fileName) {
  return request.download('support/book/book/export',data,fileName);
}

export function resetCrawlIsStop(bookId) {
  return request.get(`support/book/book/resetCrawlIsStop/${bookId}`);
}

export default { add, edit, del, download}
