import request from '@/utils/request'

/**
 * 获取数据源中的所有表信息
 * @param data
 */
export function getTables(data) {
    return request.get('base/generator/getTables', data);
}

/**
 * 获取代码生成配置
 */
export function getGenConfig(data) {
    return request.postData('base/generator/getGenConfig',data);
}

/**
 * 更新代码生成配置
 */
export function saveGenConfig(data) {
    return request.postData('base/generator/saveGenConfig', data)
}

export function saveColumnConfig(data) {
    return request.postData('base/generator/saveColumnConfig', data)
}

export function genPreview(data) {
    return request.postData('base/generator/genPreview',data);
}

export function sync(data) {
    return request.postData('base/generator/sync',data);
}


/**
 * 代码生成打包下载
 */
export function genZip(data) {
    let fileName = data.tableName + '.zip';
    return  request.download('base/generator/genZip',data,fileName);
}