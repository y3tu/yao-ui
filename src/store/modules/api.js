const baseUrl = process.env.VUE_APP_BASE_API;
const api = {
  state: {
    // 部署包上传
    deployUploadApi: baseUrl + '/api/deploy/upload',
    // SQL脚本上传
    databaseUploadApi: baseUrl + '/api/database/upload',
    // 实时控制台
    socketApi: baseUrl + '/websocket?token=kl',
    // 图片上传
    imagesUploadApi: baseUrl + '/support/file/picture/upload',
    // 修改头像
    updateAvatarApi: baseUrl + '/api/users/updateAvatar',
    // 上传文件到七牛云
    qiNiuUploadApi: baseUrl + '/support/file/qiniu/upload',
    // Sql 监控
    sqlApi: baseUrl + '/druid/index.html',
    // swagger
    swaggerApi: baseUrl + '/swagger-ui.html',
    // 文件上传
    fileUploadApi: baseUrl + '/support/file/localStorage/upload',
    // baseUrl，
    baseApi: baseUrl
  }
};

export default api
