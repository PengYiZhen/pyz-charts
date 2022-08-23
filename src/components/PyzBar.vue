<template>
   <!-- DOC https://www.npmjs.com/package/pyz-charts -->
   <pyz-charts @init="getInstance($event)" 
               @click="getItemInfo($event)" 
               :option="optionInstance.option" />            
</template>

<script>
 import PyzBar from '@/static/ChartsOptions/PyzBar';
  export default {
    name: 'PyzBar',
    props: {
       pyzChartsData: {
         type: Object,
         default: ()=>{return {
            keys: ['Def-1', 'Def-2', 'Def-3'],
            values: [20, 30, 40],
            targets: [40, 30, 20],
            isHai: true,
            legendTitle: ['实际', '目标'],
         }}
       }
    },
    data() {
        return {
          optionInstance: {option: null},
        };
    },
    mounted () {
      this.init();
    },
    destroyed() {
      this.$destroy();
    },
    watch: {
      pyzChartsData: {
        handler(nVal, oVal) {
          this.initPyzCharts(nVal);
        },
        immediate: true,
        deep: true,
      },
    },
    methods: {
        init() {
          this.initPyzCharts();
        },
        initPyzCharts(OptionConstructorProps) {
          this.optionInstance = new PyzBar(OptionConstructorProps || this.$props.pyzChartsData || {
            keys: ['默认-1', '默认-2', '默认-3'],
            values: [20, 30, 40],
            targets: [40, 30, 20],
            isHai: true,
            legendTitle: ['实际', '目标'],
          });
        },
        getInstance(_e) {
          console.log(_e);
        },
        getItemInfo(_ec) {
          console.log(_ec)  
        }
    }
  }
</script>

<style scoped>

</style>
