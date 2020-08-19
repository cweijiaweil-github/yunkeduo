import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'

Vue.use(Router)

let router_login = new Router({
    routes: [{
            path: '/ddd',
            name: 'Login',
            component: Login
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }

    ]
})


export default router_login;