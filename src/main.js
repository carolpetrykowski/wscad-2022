import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Navigation from 'vue-nav'

Vue.config.productionTip = false
Vue.use(Navigation)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
