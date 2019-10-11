import Vue from 'vue'
import { VueHammer } from 'vue2-hammer'
import App from './App.vue'
import Api from './Api'
import ServiceBus from './ServiceBus'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

//use the plugins
Vue.use(VueHammer)
Vue.use(VueMaterial)

// Controllers now have this.$api.get('/todo/')
const api = new Api()

// Controllers now have this.$bus.$emit
const bus = new ServiceBus()

new Vue({
  el: '#app',
  data: {
    event: '',
    loading: true
  },
  render: h => h(App)
})
