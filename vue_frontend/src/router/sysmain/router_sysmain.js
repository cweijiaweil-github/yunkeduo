import Vue from 'vue'
import Router from 'vue-router'
import Sysmain from '@/components/sysmain/Sysmain'

Vue.use(Router)

let router_sysmain = new Router({
    routes: [{
        path: '/sysmain',
        name: 'Sysmain',
        component: Sysmain
    }]
})

export default router_sysmain;