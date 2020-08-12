import request from '@/plugin/axios'

export function fetchDashboard(data) {
    return request.putData('support/report/graphReport/page', data);
}

export function updateDashboard(data) {
    return request.putData('support/report/graphReport/page', data);
}

export function fetchTemplate(data) {
    return request.putData('support/report/graphReport/page', data);
}

export function updateTemplate(data) {
    return request.putData('support/report/graphReport/page', data);
}
