import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      user,
    }
  });
  return Store
};
