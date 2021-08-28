import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/Login.vue";
import Report from "./components/Report.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Report
        },
        // {
        //     path: '/',
        //     redirect: '/login'
        // },
        {
            path: '/login',
            component: Login
        }
    ]
})