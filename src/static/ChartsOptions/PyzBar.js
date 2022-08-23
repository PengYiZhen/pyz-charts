'use strict';
/**
 * @class
 * @property
 */
export default class Bar {
    constructor(props) {
        this.keys = props.keys || ['默认1', '默认2'];
        this.values = props.values || [20, 30];
        this.title = props.title || `默认标题`;
        this.targets = props.targets || [30, 20];
        this.legendTitle = props.legendTitle || ['Default-1', 'Default-2'];
        this.isHai = props.isHai || false;
        this.colorRedOption = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                    offset: 0, color: 'rgba(252, 2, 33, 1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(252, 2, 33, 0.5)' // 100% 处的颜色
                }],
            global: false // 缺省为 false
        };
        this.colorYellowOption = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                    offset: 0, color: 'rgba(255, 255, 0, 1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(255, 255, 0, .5)' // 100% 处的颜色
                }],
            global: false // 缺省为 false
        };
        this.colorGreenOption = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                    offset: 0, color: 'rgba(65, 218, 88, 1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(65, 218, 88, 0.5)' // 100% 处的颜色
                }],
            global: false // 缺省为 false
        };
        this.option = {
            title: {
                text: `${this.title}`,
                right: 0,
                top: 0,
                left: 0,
                bottom: 0,
                textStyle: {
                    color: '#000',
                    fontSize: 20,
                    fontWeight: 700,
                }
            },
            tooltip: {
                trigger: 'axis',
                confine: true,
                enterable: true,
                transitionDuration: 1,
                backgroundColor: 'rgba(0, 0, 0, .7)',
                // formatter: null
                textStyle: {
                    color: '#fff',
                },
                axisPointer: {
                    type: 'shadow',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            grid: {
                top: "5%",
                bottom: "5%",
                left: "0%",
                right: "0%",
            },
            legend: {
                left: '35%',
                textStyle: {
                    color: "#000",
                    fontWeight: 700,
                    fontSize: 16,
                },
                data: this.legendTitle,
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: "rgb(0,0,0)",
                        }
                    },
                    data: this.keys,
                    axisPointer: {
                        type: 'shadow',
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#000',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: 16,
                        },
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        //formatter: '{value}--',
                        color: 'rgb(0,0,0)',
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgb(246,251,253,0.2)",
                        }
                    },
                },
            ],
            series: [
                {
                    name: this.legendTitle[0],
                    type: 'bar',
                    data: this.values,
                    barWidth: '30%',
                    itemStyle: {
                        normal: {
                            color: (params) => {
                                let value = Number(params.value);
                                let target = Number(this.targets[params.dataIndex]);
                                if (this.isHai) {
                                    return value >= target ? this.colorGreenOption : this.colorRedOption;
                                }
                                else {
                                    return value < target ? this.colorGreenOption : this.colorRedOption;
                                }
                            },
                            label: {
                                show: true,
                                formatter: '{c}%',
                                position: 'top',
                                // position:['15%','20%'],
                                textStyle: {
                                    color: '#000',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    // textShadowBlur: 3,
                                    // textShadowOffsetX: 2,
                                    // textShadowOffsetY: 3,
                                    // textShadowColor: 'rgba(0, 0, 0, 1)',
                                }
                            }
                        },
                    }
                },
                {
                    name: this.legendTitle[1],
                    type: 'line',
                    yAxisIndex: 0,
                    data: this.targets,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0, color: 'rgba(16, 164, 253, 1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(16, 164, 253, 0.5)' // 100% 处的颜色
                                }],
                            global: false // 缺省为 false
                        }
                    }
                }
            ]
        };
    }
    /**
     * @param {null} unknown 可定义
     * @returns {void} 无返回
     */
    init() {
    }
    /**
     *
     * @param prop
     * @returns prop
     */
    get(prop) {
        return prop;
    }
}
