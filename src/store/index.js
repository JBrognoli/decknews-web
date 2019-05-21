import Vue from 'vue/types'
import Vuex from 'vuex/types'
import moduloes from './modules'

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
