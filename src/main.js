import Vue from 'vue'
import App from './App.vue'
import * as Echart from 'echarts-for-vue'
import PyzCharts from 'pyz-charts'
//import PC from '@/plugin/index'


//Vue.use(PC)
Vue.use(PyzCharts);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
