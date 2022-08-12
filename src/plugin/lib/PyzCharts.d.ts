import * as echarts from 'echarts';
export declare enum PyzChartsEventType {
    click = "click",
    dblclick = "dblclick",
    mousedown = "mousedown",
    mousemove = "mousemove",
    mouseup = "mouseup",
    mouseover = "mouseover",
    mouseout = "mouseout",
    globalout = "globalout",
    contextmenu = "contextmenu",
    resize = "resize",
    init = "init"
}
export declare const PyzChartsEvents: string[];
export declare const PyzCharts: {
    name: string;
    props: {
        option: {
            type: ObjectConstructor;
            default: () => {};
        };
        watchRenderDeeper: {
            type: ObjectConstructor;
            default: any;
        };
        jsonMap: {
            type: ObjectConstructor;
            default: any;
        };
        mapName: {
            type: StringConstructor;
            default: string;
        };
    };
    data(): {
        tag: string;
        styled: string;
        ABCD: string[];
        abcd: string[];
        className: string;
        idName: string;
        ectp: any;
    };
    created(): void;
    mounted(): void;
    render(createElement: Function): any;
    destroyed(): void;
    watch: {
        option(val: echarts.EChartOption): void;
        watchRenderDeeper(): void;
    };
    methods: {
        init(val: echarts.EChartOption): void;
        initClassName(): void;
        initECharts(val: echarts.EChartOption): void;
        registoryResize(target?: HTMLCanvasElement | HTMLDivElement | null): void;
        rel(): void;
        removeResize(): void;
        registryEchartsEvents(target?: echarts.EChartsType): void;
    };
};
