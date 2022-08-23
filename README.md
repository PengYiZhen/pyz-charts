
>  Vue.js 2.6

## Pyz-Charts
- pyz-charts will stay with Vue 2.x

## Install
[![Build Status](https://github.com/tj/commander.js/workflows/build/badge.svg)](https://github.com/tj/commander.js/actions?query=workflow%3A%22build%22)
[![NPM Version](http://img.shields.io/npm/v/pyz-charts.svg?style=flat)](https://www.npmjs.org/package/pyz-charts)
[![NPM Downloads](https://img.shields.io/npm/dm/pyz-charts.svg?style=flat)](https://npmcharts.com/compare/pyz-charts?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=pyz-charts)](https://packagephobia.now.sh/result?p=pyz-charts)
```shell
npm install pyz-charts
```
```html
<version: 1.2.3+>
新增 Npm Shell 强大命令处理
自动创建ChartsOption的 Cli 工具链.
自动创建VueComponents组件，自动封装props,watch等等.
无需一行代码即可创建漂亮的VueCharts.
帮助您急速开发项目.
模板集合并不完善，暂时更新了一部分!
觉得不错点个github Stat
谢谢你们的支持！我们让代码愈来愈额简单！ 
使用如下：
```
```json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "pco": "pyz-charts"
  }
}
```
```text
在"script"中添加"pco",这个可以任意写，值必须是"pyz-charts"
执行：npm run pco
```
```shell
npm run pco
```
``` xsdregexp
version: 1.1.1+
1、解决了resize冲突问题，加入句柄对象
2、解决了Vue动态绑定渲染层!DOCTYPE标准的高度不能加载的问题
3、释放句柄对象、提升性能
4、依赖echarts所以项目文件不用在npm i echarts这个过程，
防止main.js导入过多依赖影响首次加载性能。
5、兼容TS版本
1. Solved the resize conflict problem and added the handle object

2. Solved Vue dynamic binding render layer! The height of the DOCTYPE Standard cannot be loaded

3. Release handle object and improve performance

4. The project file does not need to be in the NPM I echars process because it depends on echars,

Prevent the main.js from importing too many dependencies and affecting the first load performance.

5. Compatible TS version
version: 1.1.5+
1、新增了geoJSON自定义echarts图形绘制,可绘制任意图形
1. Added geojson custom ecarts graphics drawing, which can draw any graphics
```
![image](https://m.qpic.cn/psc?/V51ZBodV00BBWb0BqWnT2LcHfN1UCFpB/bqQfVz5yrrGYSXMvKr.cqbcCjXse69.kgcZur164k.VDi3TXqMGsfkJmOe6ZUrznKQQEinFzvfZmzBvbDCzt3Le7GqH.xiSoQb*zn1NtTtY!/b&bo=Ygc4BAAAAAABB3k!&rf=viewer_4)
### Vue import use

```js
// main.js 
import Vue from 'vue';
import PyzCharts from "pyz-charts";

Vue.use(PyzCharts)
```
## Quick Start
``` vue
<!-- a.template -->
<template>
  <pyz-charts @init="callbackEchartsInstance" :option="youEhartsOption"/>
</template>
```
- 1、封装了所有的echarts事件,支持所有事件@click等
- 2、@init事件回调（instance）实例，可以做深度检测,和扩展。
- 3、option绑定v-bind是echarts的option配置文件，可以写成Option类的实例
- 例如:

-1. Encapsulates all ecarts events and supports all events @ click, etc

-2. The @ init event callback (instance) instance can be used for deep detection and extension.

-3. Option binding v-bind is the option configuration file of ecarts, which can be written as an instance of the option class

-For example:
``` vue
<!-- a.template -->
<template>
  <pyz-charts @click="clickMethod" 
  @mousemove="mousemoveMethod" 
  @mouseover="mouseoverMethod" 
  @keydown="keydownMethod" 
  @keyup="keyupMethod" 
  ...
  :option="youEhartsOption"/>
</template>

```
- 绘制自定义各种图形的Echarts使用方法
- How to use echorts to draw and customize various graphics
```ts
jsonMap: object //geoJSON产生的绘制数据对象
mapName: string //自定义绘制地图的名称与charts series map 名称一致默认PYZ
/*
**  A地图绘制的属性名称 与 B=>series 中的 data: {name: 123}, 
**  A是B的属性名称的父级，B中的name必须包含在A中范围
*/
```
``` vue
<!-- a.template -->
<template>
  <pyz-charts
  mapJSON
  :json-map="jsonMap"
  map-name="map"
  ...
  :option="youEhartsOption"/>
</template>

```
#### Option建议写法
``` ts
  'use strict'
  class CarOption {
      public option: any;
      constructor(props){
         this.option = {};
      }
  }
```

``` vue
<script>
// a.vue
  export default {
      ...
     methods: {
         callbackEchartsInstance(ecInstance) {
            ?ecInstance.setOption(option)
            or
            ?ecInstance?....
         }
     }
  }
</script>
```


## Browser Support
- 支持Vue
- ES6 module



## Development
- Vue Cli

## 作者
- 彭一真
## LICENSE
[MIT](LICENSE)
