const getters = {
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    baseApi: state => state.api.baseApi,
    fileUploadApi: state => state.api.fileUploadApi,
    imagesUploadApi: state => state.api.imagesUploadApi,
    qiNiuUploadApi: state=>state.api.qiNiuUploadApi
};
export default getters
