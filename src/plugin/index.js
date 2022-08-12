"use strict";
exports.__esModule = true;
var PyzCharts_1 = require("./lib/PyzCharts.min");
exports["default"] = {
    install: function (Vue) {
        Vue.component(PyzCharts_1.PyzCharts.name, PyzCharts_1.PyzCharts);
    }
};
