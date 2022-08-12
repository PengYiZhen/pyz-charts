'use strict'
import * as echarts from 'echarts';
export enum PyzChartsEventType {
    click = 'click', 
    dblclick = 'dblclick', 
    mousedown = 'mousedown', 
    mousemove = 'mousemove', 
    mouseup = 'mouseup', 
    mouseover = 'mouseover', 
    mouseout = 'mouseout', 
    globalout = 'globalout',
    contextmenu = 'contextmenu',

    resize = 'resize',
    init = 'init',
}
export const PyzChartsEvents = [
    'click', 
    'dblclick', 
    'mousedown', 
    'mousemove', 
    'mouseup', 
    'mouseover', 
    'mouseout', 
    'globalout',
    'contextmenu'
];

export const PyzCharts =  {
    //template: `<div :id="idName" :class="{[className]: true}" class="PE-Charts"></div>`,
    name: "PyzCharts",
    props: {
        option: {
            type: Object,
            default: ()=>{return {}},
        },
        watchRenderDeeper: {
            type: Object,
            default: null,
        },
        jsonMap: {
            type: Object,
            default: null,
        },
        mapName: {
            type: String,
            default: "PYZ",
        }
    },
    data() {
        return {
            tag: 'div',
            styled: `height:100%; width: 100%;`,
            ABCD: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            abcd: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
            className: 'PE-Charts',
            idName: 'PE-Charts-ID',
            ectp: null,
        }
    },
    created() {
        this.initClassName();
    },
    mounted() {
        this.$nextTick(()=>{setTimeout(()=>{this.init(this.$props.option)});})
    },
    render(createElement: Function) {
        return createElement(this.tag,{attrs: {id: this.idName, class: this.className, style: this.styled,}});
    },
    destroyed() {
        this.removeResize();
        this.$destroy();
    },
    watch: {
        option(val: echarts.EChartOption) {
            this.initECharts(val)
        },
        watchRenderDeeper() {
            this.$forceUpdate()
        },
    },
    methods: {
        init(val: echarts.EChartOption): void {
            this.initECharts(val);
        },
        initClassName(): void {
            this.ABCD.forEach(()=>{
                this.className += `${this.ABCD[parseInt(String(Math.random() * 10))]}${parseInt(String(Math.random() * 10))}`
                this.idName += `${this.abcd[parseInt(String(Math.random() * 10))]}${parseInt(String(Math.random() * 10))}`;
            });
        },
        // @Params val: option interface
        initECharts(val: echarts.EChartOption): void {
            if(this.ectp){this.ectp.setOption(val)}else{
                let ecDom: HTMLCanvasElement | HTMLDivElement | null = document.querySelector(`.${this.className}`);
                if(ecDom && this.$props.jsonMap) { // 防止引入生命周期 NULL
                    echarts.registerMap(this.$props.mapName, JSON.parse(JSON.stringify(this.$props.jsonMap)));
                    this.ectp = echarts.init(ecDom);
                    this.$emit(PyzChartsEventType.init, this.ectp); // 回传 ECharts 实例
                    <echarts.EChartsType>this.ectp.setOption(val);
                    this.registryEchartsEvents(this.ectp);
                }else if(ecDom) {
                    this.ectp = echarts.init(ecDom);
                    this.$emit(PyzChartsEventType.init, this.ectp); // 回传 ECharts 实例
                    <echarts.EChartsType>this.ectp.setOption(val);
                    this.registryEchartsEvents(this.ectp);
                }
            }//this.ectp.dispose();
        },
        // @Params val Events List
        registoryResize(target?: HTMLCanvasElement | HTMLDivElement | null): void {
            window.addEventListener(PyzChartsEventType.resize, this.rel, true)
        },
        // @Parmas Event BLO
        rel() : void {
            this.ectp.resize();
        },
        // @Remote Events
        removeResize(): void {
            window.removeEventListener(PyzChartsEventType.resize, this.rel, true)
        },
        // @Registry Events
        registryEchartsEvents(target?: echarts.EChartsType): void {
            if(target) {
                let defaultEvent: Array<string> = PyzChartsEvents;
                this.registoryResize();
                defaultEvent.forEach((item: string)=>{
                    target.on(item, (params: any)=>{
                        this.$emit(item, params);
                    })
                });
            }
        }
    },
}

