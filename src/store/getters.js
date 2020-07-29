const getters = {
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    baseApi: state => state.api.baseApi,
    fileUploadApi: state => state.api.fileUploadApi,
    imagesUploadApi: state => state.api.imagesUploadApi,

};
export default getters
