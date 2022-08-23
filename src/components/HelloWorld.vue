<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div :style="{height: h+'px'}" class="Pyz-Charts-Content">
        <pyz-charts style="width: 50%;"
            v-for="(item, index) of options" :key="index"
            :option="item.option"/>
    </div>
    <div>
       <pyz-charts style="height: 500px; width: 100%;" 
       :option="mapOption.option" 
       :json-map="jsonMap" />
    </div>
    <div style="height: 500px; width: 100%;">
      <pyz-bar :pyz-charts-data="pyzChartsDatas"/> 
    </div>
  </div>
</template>

<script>
import DemoOption from '@/script/DemoOption'
import MapOption from "../script/MapOption";
import PyzBar from './PyzBar.vue';
export default {
  name: 'HelloWorld',
  props: ['msg'],
  components: { PyzBar },
  data(){
    return {
      h: 0,
      options: [],
      pyzChartsDatas: {targets: [1,2,3,4,5,6,7], keys: [1,2,3,4,5,6,7], values: [1,2,3,4,5,6,7], legendTitle: ['Pyz', 'Charts']},
      mapOption: new MapOption({
        value: [
          {"我": 3000},
          {"你": 900},
          {"他": 700},
        ]
      }),
      value: [[20], [30]],
      jsonMap:{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "我"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -34.80468749999999,
              65.80277639340238
            ],
            [
              17.2265625,
              65.80277639340238
            ],
            [
              17.2265625,
              74.01954331150228
            ],
            [
              -34.80468749999999,
              74.01954331150228
            ],
            [
              -34.80468749999999,
              65.80277639340238
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "他"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -14.0625,
              59.712097173322924
            ],
            [
              -24.609375,
              52.05249047600099
            ],
            [
              -24.960937499999996,
              45.336701909968134
            ],
            [
              -16.875,
              38.272688535980976
            ],
            [
              -4.21875,
              46.07323062540835
            ],
            [
              -9.140625,
              32.84267363195431
            ],
            [
              -14.0625,
              29.53522956294847
            ],
            [
              14.765625,
              42.032974332441405
            ],
            [
              11.953125,
              51.83577752045248
            ],
            [
              0.703125,
              59.712097173322924
            ],
            [
              -14.0625,
              59.712097173322924
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "你"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              38.3203125,
              60.58696734225869
            ],
            [
              67.8515625,
              63.54855223203644
            ],
            [
              98.7890625,
              63.860035895395306
            ],
            [
              72.7734375,
              74.21198251594369
            ],
            [
              85.078125,
              79.03843742487174
            ],
            [
              49.21875,
              77.38950400539731
            ],
            [
              63.984375,
              49.83798245308484
            ],
            [
              88.59374999999999,
              42.293564192170095
            ],
            [
              105.1171875,
              44.59046718130883
            ],
            [
              110.390625,
              57.326521225217064
            ],
            [
              81.9140625,
              59.712097173322924
            ],
            [
              51.67968749999999,
              48.45835188280866
            ],
            [
              54.140625,
              39.095962936305476
            ],
            [
              103.71093749999999,
              61.270232790000634
            ],
            [
              99.140625,
              64.77412531292873
            ],
            [
              90.703125,
              43.32517767999296
            ],
            [
              105.1171875,
              61.270232790000634
            ],
            [
              79.1015625,
              63.39152174400882
            ],
            [
              63.6328125,
              63.39152174400882
            ],
            [
              57.30468749999999,
              56.17002298293205
            ],
            [
              54.4921875,
              68.65655498475735
            ],
            [
              61.17187499999999,
              71.74643171904148
            ],
            [
              71.015625,
              69.65708627301174
            ],
            [
              83.3203125,
              67.20403234340081
            ],
            [
              64.3359375,
              74.68325030051861
            ],
            [
              64.3359375,
              76.26869465080624
            ],
            [
              69.60937499999999,
              76.84081641443098
            ],
            [
              72.421875,
              74.77584300649235
            ],
            [
              38.3203125,
              60.58696734225869
            ]
          ]
        ]
      }
    }
  ]
}
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
