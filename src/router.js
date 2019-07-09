import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

import Styleguide from './views/Styleguide.vue'
import Login from './views/Login.vue'
import Signup from "./views/Signup.vue";

import BaseDeck from "./components/BaseDeck.vue"

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: Signup,
    },
    {
      path: '/home',
      name: 'home',
      component: BaseDeck,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/styleguide',
      name: 'styleguide',
      component: Styleguide,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
