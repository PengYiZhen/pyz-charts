<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>手写模式圈图</h1>
    <h3></h3>
    <div :style="{height: h+'px'}" class="Pyz-Charts-Content">
        <pyz-charts style="width: 50%;"
            v-for="(item, index) of options" :key="index"
            :option="item.option"/>
    </div>
    <h1>自定意各种形状地图</h1>
    <h3></h3>
    <div>
       <pyz-charts style="height: 500px; width: 100%;" 
       :option="mapOption.option" 
       :json-map="jsonMap" />
    </div>
    <!-- 下面是执行命令行生成的 npm run pco -->
    <h1>折线图</h1>
    <h3></h3>
    <div>
      <PyzLine />
    </div>
    <h1>柱状图</h1>
    <h3></h3>
    <div style="height: 500px; width: 100%;">
      <pyz-bar :pyz-charts-data="pyzChartsDatas"/> 
    </div>
    <h1>树状图</h1>
    <h3></h3>
    <div style="height: 500px; width: 100%;">
      <pyz-tree /> 
    </div>
  </div>
</template>

<script>
import DemoOption from '@/script/DemoOption';
import MapOption from "../script/MapOption";
import PyzBar from './PyzBar.vue';
import cdMap from '../script/CD.json';
import PyzLine from './PyzLine.vue';
import PyzTree from './PyzTree.vue';

export default {
  name: 'HelloWorld',
  props: ['msg'],
  components: { PyzBar, PyzLine, PyzTree, },
  data(){
    return {
      h: 0,
      options: [],
      pyzChartsDatas: {targets: [1,2,3,4,5,6,7], keys: [1,2,3,4,5,6,7], values: [1,2,3,4,5,6,7], legendTitle: ['Pyz', 'Charts']},
      mapOption: new MapOption({
        value: [
          {name: "锦江区", value: 9000},
          {name: "龙泉驿区", value: 9000}
        ]
      }),
      value: [[20], [30]],
      jsonMap: cdMap,//geoMap,
    }
  },
  mounted() {
    this.init();
  },
  destroyed() {
    this.$destroy();
  },
  methods: {
    init() {
      this.h = window.innerHeight-300;
      this.value.forEach((item)=> {
        this.options.push(new DemoOption({
          value: item, // 动态传参
        }))
      });
      setInterval(()=>{
        this.pyzChartsDatas.values = new Array(parseInt(Math.random()*10),
         parseInt(Math.random()*10), 
         parseInt(Math.random()*10), 
         parseInt(Math.random()*10), 
         parseInt(Math.random()*10), 
         parseInt(Math.random()*10), 
         parseInt(Math.random()*10))
      },2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.Pyz-Charts-Content {
  display: flex; flex-direction: row; justify-content: center; flex-wrap: wrap; align-items: center;
}

</style>
