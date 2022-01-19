<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div :style="{height: h+'px'}" class="Pyz-Charts-Content">
        <pyz-charts style="width: 50%;"
            v-for="(item, index) of options" :key="index"
            :option="item.option"/>
      </div>
  </div>
</template>

<script>
import DemoOption from '@/script/DemoOption'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      h: 0,
      options: [],
      value: [[20], [30], [40], [50]],
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
