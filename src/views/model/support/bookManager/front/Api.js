import request from '@/utils/request'

export function getBookContent(bookId,bookIndexId) {
    return request.get(`support/bookContent/content/${bookId}/${bookIndexId}`);
}
