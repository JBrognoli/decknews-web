import Vue from 'vue'
import Router from 'vue-router'
import Styleguide from './views/Styleguide.vue'
import darkHome from './views/darkHome.vue'
import Login from './views/Login.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/styleguide',
      name: 'styleguide',
      component: Styleguide
    },

    {
      path: '/darkhome',
      name: 'darkHome',
      component: darkHome
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
