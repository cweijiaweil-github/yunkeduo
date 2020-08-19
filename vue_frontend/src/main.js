// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.use(ElementUI);
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    //根据字段判断是否路由过滤
    console.log(to.name)
    console.log(to.matched[0])
    console.log(to.matched[0].meta.auth)
    if (to.matched.some(record => record.meta.auth)) {
        alert(to.name)
        let islogin = localStorage.getItem("islogin"); //获取本地登录状态);
        if (islogin !== null) {
            next()
        } else {
            //防止无限循环
            if (to.name === 'login') {
                next();
                return
            }
            next({
                path: '/',
            });
        }
    } else {
        next() //若点击的是不需要验证的页面,则进行正常的路由跳转
    }
})

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})