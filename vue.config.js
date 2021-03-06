'use strict';
const settings = require('./src/settings.js');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = settings.title; // page title

const port = 80; // dev port

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    // 打包时不生成.map文件 避免看到源码
    productionSourceMap: false,
    devServer: {
        port: port,
        open: false,
        overlay: {
            warnings: false,
            errors: true
        }

    },

    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src'),
                '@crud': resolve('src/components/Crud')
            }
        }
    },

    chainWebpack(config) {
        //set svg-sprite-loader;
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();

        // set preserveWhitespace
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options
            }).end()

        //移除prefetch
        config.plugins.delete('prefetch')
    }
};

