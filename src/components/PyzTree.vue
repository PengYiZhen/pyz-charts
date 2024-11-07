<template>
   <!-- DOC https://www.npmjs.com/package/pyz-charts -->
   <pyz-charts @init="getInstance($event)" 
               @click="getItemInfo($event)" 
               :option="optionInstance.option" />            
</template>

<script>
 import PyzTree from '@/static/ChartsOptions/PyzTree';
  export default {
    name: 'PyzTree',
    props: {
       pyzChartsData: {
         type: Object,
         default: ()=>{return {
            values: [20, 30, 40],
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
          this.optionInstance = new PyzTree(OptionConstructorProps || {
            keys: ['默认-1', '默认-2', '默认-3'],
            values: [{
              name: "root",
              children: [
                {
                  name: "Def-1",
                },
                {
                  name: "Def-2",
                },
                {
                  name: "Def-3",
                }
              ]
            }],
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
