import Vue from 'vue'
import Router from 'vue-router'
import Styleguide from './views/Styleguide.vue'
import Login from './views/Login.vue'
import BaseTable from './components/BaseTable.vue'
import TimeRegister from "@/components/TimeRegister.vue";


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: TimeRegister
        },
        {
            path: '/users',
            name: 'users',
            component: BaseTable
        },
        {
            path: '/styleguide',
            name: 'styleguide',
            component: Styleguide
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        }
    ]
})
