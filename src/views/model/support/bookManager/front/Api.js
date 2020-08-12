import request from '@/plugin/axios'

export function getBookContent(bookId,bookIndexId) {
    return request.get(`support/bookContent/content/${bookId}/${bookIndexId}`);
}
