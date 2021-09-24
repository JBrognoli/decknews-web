import VueI18n from 'vue-i18n'
import Vue from 'vue'
import messages from './messages'
import Storage from '../utils/Storage.js'

Vue.use(VueI18n)
const storageLocale = Storage.getItem('locale')

export default new VueI18n({
  locale: storageLocale ? storageLocale : 'pt_BR',
  messages,
})
