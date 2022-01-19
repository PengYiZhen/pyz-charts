import Vue from 'vue'
import App from './App.vue'
import PyzCharts from 'pyz-charts'

Vue.use(PyzCharts);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
