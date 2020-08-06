module.exports = {
    title: 'Yao',
    // 获取令牌时，请求头信息(Basic Base64.encode(client_id:client_secret))
    authorizationValue: 'Basic ZmViczoxMjM0NTY=',
    // 社交登录后台地址
    socialLoginUrl: 'http://116.85.42.174:8301/auth/social/login',
    pages: {
        // FEBS-Admin 控制台地址
        springBootAdminUrl: 'http://localhost:8401/login',
        // kibana 控制台地址
        kibanaUrl: 'http://localhost:5601',
        // nacos 控制台地址
        nacosUrl: 'http://www.y3tu.cn:8848/nacos',
        // skywalking地址
        skywalkingUrl: 'http://localhost:8080/',
        // 文档中心
        docUrl: 'http://116.85.42.174:8301/doc.html',
        // Granfana控制台
        grafanaUrl: 'http://localhost:8404/',
    }
};
