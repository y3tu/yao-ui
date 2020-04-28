import request from '@/utils/request'

export function createDict(data) {
    return request.post('support/dict/createDict',data);
}

export function updateDict(data) {
    return request.put('support/dict/updateDict',data);
}

export function deleteDict(ids) {
    return request.deleteData('support/dict/deleteDict',ids)
}

export function createDictData(data) {
    return request.post('support/dict/createDictData',data);
}

export function deleteDictData(ids) {
    return request.deleteData('support/dict/deleteDictData',ids)
}

export function updateDictData(data) {
    return request.put('support/dict/updateDictData',data);
}

export function saveDictSql(data) {
    return request.post('support/dict/saveDictSql',data);
}

export function getDictDataByDictName(name) {
    return request.get('support/dict/getDictDataByDictName/'+name);
}

export function getDictData(code) {
    return request.get('support/dict/getDictData/'+code);
}

export function getDictSqlByDictId(dictId) {
    return request.get('support/dict/getDictSqlByDictId/'+dictId);
}




