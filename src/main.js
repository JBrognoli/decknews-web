import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import firebase from 'firebase';
import VueLocalStorage from 'vue-localstorage'
import firebaseui from 'firebaseui';
import i18n from './translations/lang'

Vue.use(VueLocalStorage);

Vue.config.productionTip = false;

Vue.use(Vuetify, {
    theme: {
      primary: '#000000',
      secondary: '#000000',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    },
    iconfont: 'fa',
  },
);

let app = '';

const firebaseConfig = {
  apiKey: "AIzaSyCKthlq_Se9opnAp4sSEh-SQLhDrUwBcJ4",
  authDomain: "decknews-50.firebaseapp.com",
  databaseURL: "https://decknews-50.firebaseio.com",
  projectId: "decknews-50",
  storageBucket: "decknews-50.appspot.com",
  messagingSenderId: "746329258213",
  appId: "1:746329258213:web:e1d184c415d6f5cd"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      i18n,
      render: h => h(App)
    }).$mount('#app')
  }
});
