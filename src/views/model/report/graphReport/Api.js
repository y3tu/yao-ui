import request from '@/utils/request'

export function page(data) {
  return request.putData('support/report/graphReport/page',data);
}

export function add(data) {
  return request.postData('support/report/graphReport/create',data);
}

export function del(ids) {
  return request.deleteData('support/report/graphReport/delete',ids);
}

export function edit(data) {
  return request.putData('support/report/graphReport/update',data);
}

export function download(data,fileName) {
  return request.download('support/report/graphReport/export',data,fileName);
}

export function getGraphReport(id) {
  return request.get(`support/report/graphReport/getGraphReport/${id}`);
}

export function getChartsData(id) {
  return request.get(`support/report/graphReport/getChartsData/${id}`);
}

export default { add, edit, del, download}
