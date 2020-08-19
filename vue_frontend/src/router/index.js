import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Sysmain from '@/components/sysmain/Sysmain'

// import router_login from './login/router_login'
// import router_sysmain from './sysmain/router_sysmain'

Vue.use(Router)

export default new Router({
    routes: [
        // ...router_login, //登录---路由
        // ...router_sysmain, //客服系统主页面--- 路由 
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: { auth: true } //是否需要判断登录
        },
        {
            path: '/sysmain',
            name: 'Sysmain',
            component: Sysmain,
            meta: { auth: true } //是否需要判断登录
        }
    ]
})