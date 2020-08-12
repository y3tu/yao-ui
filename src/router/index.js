import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import db from '@/utils/localstorage'
import Config from '@/settings'
import request from '@/plugin/axios'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {isEmpty, isNotEmpty} from "@/utils/validate";
import {Message} from "element-ui";

import extraRouter from './extraRouter'


Vue.use(Router);

const constRouter = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path*',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/locking',
        name: 'locking',
        component: () => import('@/views/lockscreen/components/locking-page')
    },
    {
        path: '/login',
        name: '登录页',
        component: () => import('@/views/login/index')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: {title: '首页', icon: 'dashboard', affix: true}
            }
        ]
    },
    {
        path: '/profile',
        component: Layout,
        redirect: '/profile/index',
        hidden: true,
        children: [
            {
                path: 'index',
                component: () => import('@/views/profile/index'),
                name: 'Profile',
                meta: {title: '个人中心', icon: 'user', noCache: true}
            }
        ]
    },
    {
        path: '/error',
        component: Layout,
        redirect: 'noRedirect',
        name: 'ErrorPages',
        meta: {
            title: 'errorPages',
            icon: '404'
        },
        children: [
            {
                path: '404',
                component: () => import('@/views/error-page/404'),
                name: 'Page404',
                meta: {title: 'page404', noCache: true}
            }
        ]
    }
];

//加入额外路由
constRouter.push(...extraRouter);

const router = new Router({
    scrollBehavior: () => ({y: 0}),
    routes: constRouter
});

const whiteList = ['/login'];

//把额外路由加入白名单
extraRouter.forEach(router => {
    whiteList.push(router.path);
});

// 导航守卫，渲染动态路由
router.beforeEach((to, from, next) => {

    if (to.meta.title) {
        document.title = to.meta.title + ' - ' + Config.title
    }

    NProgress.start();
    if (db.get('locking') === '1' && to.name !== 'locking') {
        // 判断当前是否是锁定状态
        next('/locking');
        return;
    } else if (db.get('locking') === '0' && to.name === 'locking') {
        next(false);
    }
    if (whiteList.indexOf(to.path) !== -1) {
        //白名单直接放行
        next()
    } else {
        const token = db.get('ACCESS_TOKEN');
        const user = db.get('USER');
        const userRouter = db.get('USER_ROUTER');
        if (token.length && user) {
            if (isEmpty(userRouter)) {
                request.get(`base/resource/getUserRouter/${user.username}`).then((res) => {
                    const permissions = res.data.permissions;
                    store.commit('account/setPermissions', permissions);
                    let asyncRouter = res.data.routes;
                    if (isEmpty(asyncRouter)) {
                        Message.error("没有获取到用户的路由信息");
                        return;
                    }
                    db.save('USER_ROUTER', asyncRouter);
                    go(to, next, asyncRouter)
                })
            } else if (store.state.account.routes.length === 0) {
                let asyncRouter = userRouter;
                go(to, next, asyncRouter)
            } else {
                next()
            }
        } else {
            if (to.path === '/login') {
                next()
            } else {
                next('/login')
            }
        }
    }
});

router.afterEach(() => {
    NProgress.done()
});

function go(to, next, asyncRouter) {
    //添加404路由
    const unFound = {
        path: '*',
        redirect: '/404',
        hidden: true
    };
    router.addRoutes([unFound]);
    asyncRouter = filterAsyncRouter(asyncRouter);
    store.commit('account/setRoutes', asyncRouter);
    router.addRoutes(asyncRouter);
    next({...to, replace: true})
}

function filterAsyncRouter(routes) {
    const aRouter = [];
    routes.forEach(route => {
        const {path, component, componentName, resourceName, icon, type, parentId, hidden, cache, iframe} = route.data;
        const {children} = route;
        if (type === -1) {
            //顶级菜单
            if (isNotEmpty(children)) {
                aRouter.push(filterAsyncRouter(children));
            }
        } else {
            const oRouter = {
                path: path,
                component: () => {
                    let componentPath = '';
                    if (component === 'Layout' || isEmpty(component)) {
                        return import('@/views/layout')
                    } else if (component === 'Iframe' || iframe === true) {
                        return import('@/views/layout/Iframe')
                    } else {
                        componentPath = component;
                        return import(`@/views/${componentPath}.vue`)
                    }
                },
                name: isEmpty(componentName) ? resourceName : componentName,
                meta: {
                    icon: icon,
                    title: resourceName,
                    noCache: cache !== true,
                    url: path,
                    iframe: iframe
                },
                hidden: hidden,
                icon: icon,
                parentId: parentId,
                children: isEmpty(children) ? [] : filterAsyncRouter(children),
                redirect: isEmpty(children) ? '' : 'noRedirect'
            };
            aRouter.push(oRouter)
        }
    });
    return aRouter
}

export default router
