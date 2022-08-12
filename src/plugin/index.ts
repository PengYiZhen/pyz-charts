import { PyzCharts } from './lib/PyzCharts.min';

export default {
    install: function(Vue) {
        Vue.component(PyzCharts.name, PyzCharts)
    },
}


