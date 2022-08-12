'use strict'
class DemoOption {
    constructor(props) {
        this.value = props.value || [];
        this.option = {
            title: {
              text: 'USA Population Estimates (2012)',
              subtext: 'Data from www.census.gov',
              sublink: 'http://www.census.gov/popest/data/datasets.html',
              left: 'right'
            },
            tooltip: {
              trigger: 'item',
              showDelay: 0,
              transitionDuration: 0.2
            },
            toolbox: {
              show: true,
              //orient: 'vertical',
              left: 'left',
              top: 'top',
              feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
              }
            },
            series: [
              {
                name: '传入参数名称',
                type: 'map',
                map: 'PYZ',
                emphasis: {
                  label: {
                    show: true
                  }
                },
                data: this.value,
              }
            ]
          };
    }
}

export default DemoOption;