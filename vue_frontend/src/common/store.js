import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        islogin: false //是否已登录
    },
    mutations: {
        loginSuccess(state) { //登录成功，改变登录状态为true
            state.islogin = true;
        }
    },
    actions: {

    }
})