webpackJsonp([5,11],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translation_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_routing__ = __webpack_require__(565);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { PopularApp } from './popularApp';
//import { PieChart } from './pieChart';
//import { TrafficChart } from './trafficChart';
//import { UsersMap } from './usersMap';
//import { LineChart } from './lineChart';
//import { Feed } from './feed';
//import { Todo } from './todo';
//import { Calendar } from './calendar';
//import { CalendarService } from './calendar/calendar.service';
//import { FeedService } from './feed/feed.service';
//import { LineChartService } from './lineChart/lineChart.service';
//import { PieChartService } from './pieChart/pieChart.service';
//import { TodoService } from './todo/todo.service';
//import { TrafficChartService } from './trafficChart/trafficChart.service';
//import { UsersMapService } from './usersMap/usersMap.service';
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__dashboard_component__["a" /* Dashboard */]
        ],
        providers: []
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard = (function () {
    function Dashboard() {
    }
    return Dashboard;
}());
Dashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        styles: [__webpack_require__(610)],
        template: __webpack_require__(630)
    }),
    __metadata("design:paramtypes", [])
], Dashboard);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__(524);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* Dashboard */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1620px) {\n  .row.shift-up > * {\n    margin-top: -573px; } }\n\n@media screen and (max-width: 1620px) {\n  .card.feed-panel.large-card {\n    height: 824px; } }\n\n.user-stats-card .card-title {\n  padding: 0 0 15px; }\n\n.blurCalendar {\n  height: 475px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n    <!--<pie-chart></pie-chart>-->\n  </div>\n</div>\n\n<div class=\"row\">\n  <ba-card class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-12\"\n                     cardTitle=\"dashboard.acquisition_channels\" baCardClass=\"traffic-panel medium-card\">\n    <!--<traffic-chart></traffic-chart>-->\n  </ba-card>\n\n  <ba-card class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-12\"\n           cardTitle=\"dashboard.users_by_country\" baCardClass=\"medium-card\">\n    <!--<users-map></users-map>-->\n  </ba-card>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xlg-9 col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12\">\n    <div class=\"row\">\n      <ba-card class=\"col-xlg-8 col-xl-12 col-lg-12 col-md-7 col-sm-12 col-12\"\n               cardTitle=\"dashboard.revenue\" baCardClass=\"medium-card\">\n        <!--<line-chart></line-chart>-->\n      </ba-card>\n      <ba-card class=\"col-xlg-4 col-xl-12 col-lg-12 col-md-5 col-sm-12 col-12\"\n               baCardClass=\"popular-app medium-card\">\n        <!--<popular-app></popular-app>-->\n      </ba-card>\n    </div>\n  </div>\n\n  <div class=\"col-xlg-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12\">\n    <ba-card cardTitle=\"dashboard.feed\"\n             baCardClass=\"large-card with-scroll feed-panel\">\n      <!--<feed></feed>-->\n    </ba-card>\n  </div>\n\n</div>\n\n<div class=\"row shift-up\">\n  <ba-card class=\"col-xlg-3 col-lg-6 col-md-12 col-sm-12 col-12\" cardTitle=\"dashboard.todo_list\"\n           baCardClass=\"xmedium-card feed-comply-panel with-scroll todo-panel\">\n    <!--<todo></todo>-->\n  </ba-card>\n  <ba-card class=\"col-xlg-6 col-lg-6 col-md-12 col-sm-12 col-12\" cardTitle=\"dashboard.calendar\"\n           baCardClass=\"xmedium-card feed-comply-panel with-scroll calendar-panel\">\n    <!--<calendar></calendar>-->\n  </ba-card>\n</div>\n"

/***/ })

});
//# sourceMappingURL=5.chunk.js.map