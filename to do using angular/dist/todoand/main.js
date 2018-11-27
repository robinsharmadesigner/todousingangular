(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<app-todotitle></app-todotitle>\r\n<app-todojson></app-todojson>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todoand';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _todojson_todojson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todojson/todojson.component */ "./src/app/todojson/todojson.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _todotitle_todotitle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todotitle/todotitle.component */ "./src/app/todotitle/todotitle.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
                _todojson_todojson_component__WEBPACK_IMPORTED_MODULE_5__["TodojsonComponent"],
                _todotitle_todotitle_component__WEBPACK_IMPORTED_MODULE_7__["TodotitleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.newtodo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DataService.prototype.getData = function () {
        return this.http.get('https://api.myjson.com/bins/hmuvw');
    };
    DataService.prototype.addtodo = function (data) {
        this.newtodo.next(data);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu\">\r\n  <a class=\"logo\" href=# >ToDo Web Application</a>   \r\n  <a class=\"active\" href=\"#home\">Home</a>\r\n  <a href=\"#users\">Users</a>\r\n  <a href=\"#tasks\">Tasks</a>\r\n  <a href=\"#about\">About</a>\r\n  <p class=username>Username: <span id=\"uname\"></span></p>\r\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.scss":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  overflow: hidden;\n  background-color: black; }\n  nav a {\n    float: left;\n    color: white;\n    text-align: center;\n    padding: 20px 20px;\n    text-decoration: none;\n    font-size: 20px; }\n  nav a:hover {\n    background-color: #c4c4c0;\n    color: black; }\n  nav p {\n    float: right;\n    color: white;\n    padding-right: 2%;\n    font-size: 20px; }\n  nav .logo {\n    font-weight: bolder;\n    background-color: #5696f7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9DOlxcVXNlcnNcXHNoYXJtXFxhc3NpZ25tZW50LTYtYW5ndWxhci1ieXRlLW1lL3NyY1xcYXBwXFxuYXYtYmFyXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQWdCO0VBQ2hCLHdCQUF3QixFQTRCekI7RUE5Qkg7SUFLTSxZQUFXO0lBQ1gsYUFSb0I7SUFTcEIsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsZ0JBQWUsRUFDaEI7RUFYTDtJQWNNLDBCQUFvQztJQUNwQyxhQUFZLEVBQ2I7RUFoQkw7SUFtQk0sYUFBWTtJQUNaLGFBdEJvQjtJQXVCcEIsa0JBQWlCO0lBQ2pCLGdCQUFlLEVBRWQ7RUF4QlA7SUEyQlEsb0JBQW1CO0lBQ25CLDBCQUFtQyxFQUNwQyIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cclxubmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgYmxhY2s7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBjb2xvcjokY29sb3I7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTk2LCAxOTIpO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmxvZ297XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDE1MCwgMjQ3KTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/todojson/todojson.component.html":
/*!**************************************************!*\
  !*** ./src/app/todojson/todojson.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  <div id=\"divOut\" >\r\n      <!--   tasks will appear here   -->  \r\n      <!-- <div class=\"text\" *ngFor=\"let jdata of jsondata$\">\r\n      <div class=\"removejson\">x</div>{{jdata.title}}\r\n      <input type=\"text\" id=\"taskText\">\r\n      <button id=\"addTaskBtn\">+</button><br>\r\n      <ul><li *ngFor=\"let task of jdata.todoitem \">{{task}}<span class=\"removejtask\" id=\"remove\">x</span></li></ul>\r\n     <br>\r\n      <span>Author:</span>{{jdata.author}}<br>\r\n      <span>Date:</span>{{jdata.date}}\r\n      </div>\r\n       -->\r\n      \r\n      <div class=\"text\" *ngFor=\"let jdata of todocards$\" id={{jdata.id}}>\r\n            <div class=\"removejson\" (click)=\"removeTitle($event)\">x</div>{{jdata.title}}\r\n            <input type=\"text\" id=\"taskText\" class=\"taskin\">\r\n            <button id=\"addTaskBtn\" (click)=\"addTask($event)\">+</button><br>\r\n            <ul><li *ngFor=\"let task of jdata.list\"  id={{task.id}} (click)=\"strike($event)\">{{task.title}}<span class=\"removejtask\" id=\"remove\" (click)=\"removeTask($event)\">x</span></li></ul>\r\n            <!-- <br> -->\r\n            <span>Author:</span>{{jdata.author}}<br>\r\n            <span>Date:</span>{{jdata.date}}\r\n            </div>  \r\n  </div>\r\n\r\n      \r\n  \r\n  <!-- \"title\":\"Work\",\"todoitem\":[\"Class\",\"Assignment\",\"Quiz\"],\"author\":\"MOJO\",\"date\":\"22/12/2018\" -->"

/***/ }),

/***/ "./src/app/todojson/todojson.component.scss":
/*!**************************************************!*\
  !*** ./src/app/todojson/todojson.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#divOut .text {\n  float: left;\n  /* display: inline-block; */\n  padding: 0 12px 6px 12px;\n  border: 2px solid #5696f7;\n  min-width: 15%;\n  min-height: 30%;\n  margin: 1%; }\n  #divOut .text .removejson {\n    float: left;\n    margin: 0px 0px 0px 0px;\n    cursor: pointer;\n    /* display: inline-block;  */\n    padding: 0 12px 6px 12px;\n    border: 1px solid #5696f7; }\n  #divOut .text ul {\n    padding: 0px;\n    margin: 0px; }\n  #divOut .text ul li {\n      list-style: none; }\n  #divOut .text ul li span {\n        float: right;\n        cursor: pointer; }\n  #divOut .text ul li.checked {\n      text-decoration: line-through; }\n  #divOut input {\n  display: inline-block;\n  margin: 0 0 10px 0;\n  padding: 5px;\n  background: #080808;\n  border: 1px solid #5696f7;\n  color: white;\n  font-family: 'Franklin Gothic Medium';\n  font-size: 18px; }\n  #divOut button {\n  background: #5696f7;\n  color: white;\n  border: 0;\n  font-family: 'Franklin Gothic Medium';\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb2pzb24vQzpcXFVzZXJzXFxzaGFybVxcYXNzaWdubWVudC02LWFuZ3VsYXItYnl0ZS1tZS9zcmNcXGFwcFxcdG9kb2pzb25cXHRvZG9qc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBRVEsWUFBVztFQUNYLDRCQUE0QjtFQUM1Qix5QkFBd0I7RUFDeEIsMEJBUm1CO0VBU25CLGVBQWM7RUFDZCxnQkFBZTtFQUNmLFdBQVUsRUErQmI7RUF2Q0w7SUFXWSxZQUFXO0lBQ1gsd0JBQXVCO0lBQ3ZCLGdCQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHlCQUF3QjtJQUN4QiwwQkFuQmUsRUFvQmxCO0VBakJUO0lBcUJZLGFBQVk7SUFDWixZQUFXLEVBZ0JkO0VBdENUO01BeUJnQixpQkFBZ0IsRUFRZjtFQWpDakI7UUE0Qm9CLGFBQVk7UUFDWixnQkFBZSxFQUVsQjtFQS9CakI7TUFvQ29CLDhCQUE2QixFQUM5QjtFQXJDbkI7RUEwQ1Esc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osb0JBQXdCO0VBQ3hCLDBCQWpEbUI7RUFrRG5CLGFBakRjO0VBa0RkLHNDQUFxQztFQUNyQyxnQkFBZSxFQUNsQjtFQWxETDtFQXFEWSxvQkF4RGU7RUF5RGYsYUF4RFU7RUF5RFYsVUFBUztFQUNULHNDQUFxQztFQUNyQyxnQkFBZSxFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RvZG9qc29uL3RvZG9qc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvcmRlcmNvbG9yOiByZ2IoODYsIDE1MCwgMjQ3KTtcclxuJGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4gICAgI2Rpdk91dHtcclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTJweCA2cHggMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgICRib3JkZXJjb2xvcjtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxJTtcclxuXHJcbiAgICAgICAgICAgIC5yZW1vdmVqc29ue1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7IFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICAqL1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMnB4IDZweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgICRib3JkZXJjb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWx7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaS5jaGVja2VkIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDgsIDgsIDgpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyY29sb3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiRjb2xvcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlcmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/todojson/todojson.component.ts":
/*!************************************************!*\
  !*** ./src/app/todojson/todojson.component.ts ***!
  \************************************************/
/*! exports provided: TodojsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodojsonComponent", function() { return TodojsonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodojsonComponent = /** @class */ (function () {
    function TodojsonComponent(data) {
        this.data = data;
        this.todocards$ = [];
    }
    TodojsonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getData().subscribe(function (data) { return _this.jsondata$ = data; });
        this.data.newtodo.subscribe(function (data) { return _this.todocards$.push(data); });
    };
    TodojsonComponent.prototype.addTask = function (event) {
        var task = {
            id: 0,
            title: ""
        };
        for (var _i = 0, _a = this.todocards$; _i < _a.length; _i++) {
            var todo = _a[_i];
            if (todo.id == event.target.parentElement.id) {
                //  alert(event.target.parentElement);
                var todotask = event.target.parentElement.getElementsByClassName("taskin");
                var taskvalue = todotask[0].value;
                // alert(todotask);
                if (taskvalue == "") {
                    alert("Please add a task");
                }
                else {
                    task.title = taskvalue;
                    task.id = ++todo.todoid;
                    todo.list.push(task);
                }
            }
        }
        //resetting text inputs
        event.target.parentElement.children[1].value = "";
    };
    TodojsonComponent.prototype.removeTitle = function (event) {
        for (var _i = 0, _a = this.todocards$; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.id == event.target.parentElement.id) {
                event.target.parentElement.style.display = "none";
            }
        }
    };
    TodojsonComponent.prototype.removeTask = function (event) {
        for (var _i = 0, _a = this.todocards$; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.id == event.target.parentElement.parentElement.parentElement.id) {
                for (var _b = 0, _c = card.list; _b < _c.length; _b++) {
                    var each = _c[_b];
                    if (each.id == event.target.parentElement.id) {
                        event.target.parentElement.style.display = "none";
                    }
                }
            }
        }
    };
    TodojsonComponent.prototype.strike = function (event) {
        for (var _i = 0, _a = this.todocards$; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.id == event.target.parentElement.parentElement.id) {
                for (var _b = 0, _c = card.list; _b < _c.length; _b++) {
                    var each = _c[_b];
                    if (each.id == event.target.id) {
                        // event.target.style.textDecoration = "line-through";
                        event.target.classList.toggle("checked");
                    }
                }
            }
        }
    };
    TodojsonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todojson',
            template: __webpack_require__(/*! ./todojson.component.html */ "./src/app/todojson/todojson.component.html"),
            styles: [__webpack_require__(/*! ./todojson.component.scss */ "./src/app/todojson/todojson.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TodojsonComponent);
    return TodojsonComponent;
}());



/***/ }),

/***/ "./src/app/todotitle/todotitle.component.html":
/*!****************************************************!*\
  !*** ./src/app/todotitle/todotitle.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2>To Do Lists</h2>   \r\n<span>\r\n        <input [(ngModel)]=\"todotitle\" id=\"inputTitleText\" type=\"text\" placeholder=\"Title\">\r\n\r\n        <button id=\"addListBtn\" (click)=\"newtodocreate($event)\">+</button>\r\n\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/todotitle/todotitle.component.scss":
/*!****************************************************!*\
  !*** ./src/app/todotitle/todotitle.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  display: inline-block;\n  margin: 0 0 10px 0;\n  padding: 5px;\n  background: #080808;\n  border: 1px solid #5696f7;\n  color: white;\n  font-family: 'Franklin Gothic Medium';\n  font-size: 18px; }\n\nbutton {\n  background: #5696f7;\n  color: white;\n  border: 0;\n  font-family: 'Franklin Gothic Medium';\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3RpdGxlL0M6XFxVc2Vyc1xcc2hhcm1cXGFzc2lnbm1lbnQtNi1hbmd1bGFyLWJ5dGUtbWUvc3JjXFxhcHBcXHRvZG90aXRsZVxcdG9kb3RpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osb0JBQXdCO0VBQ3hCLDBCQVJzQjtFQVN0QixhQVJ1QjtFQVN2QixzQ0FBcUM7RUFDckMsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFFSSxvQkFoQnNCO0VBaUJ0QixhQWhCdUI7RUFpQnZCLFVBQVM7RUFDVCxzQ0FBcUM7RUFDckMsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC90b2RvdGl0bGUvdG9kb3RpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yMTogcmdiKDg2LCAxNTAsIDI0Nyk7XHJcbiRjb2xvcjI6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbmlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig4LCA4LCA4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvcjE7XHJcbiAgICBjb2xvcjogJGNvbG9yMjtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bSc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgICAgIFxyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yMTtcclxuICAgIGNvbG9yOiAkY29sb3IyO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/todotitle/todotitle.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todotitle/todotitle.component.ts ***!
  \**************************************************/
/*! exports provided: TodotitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodotitleComponent", function() { return TodotitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodotitleComponent = /** @class */ (function () {
    function TodotitleComponent(data) {
        this.data = data;
        // todo$: Object=null;
        this.todo$ = null;
        this.id = 0;
        this.todotitle = "";
        this.check = false;
    }
    TodotitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getData().subscribe(function (data) { return _this.todo$ = data; });
    };
    TodotitleComponent.prototype.ngAfterViewChecked = function () {
        if (this.todo$ !== null && this.check == false) {
            this.mergingLists();
            this.check = true;
        }
    };
    TodotitleComponent.prototype.newtodocreate = function (event) {
        if (this.todotitle == "") {
            alert("Please add a title.");
            return;
        }
        this.id++;
        var todocard = {
            id: 0,
            todoid: 0,
            title: "",
            author: "",
            date: "",
            list: []
        };
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        todocard.id = this.id;
        todocard.todoid = 0;
        todocard.title = this.todotitle;
        todocard.author = "Byte Me";
        todocard.date = day + "/" + month + "/" + year;
        this.data.addtodo(todocard);
        event.target.parentElement.firstChild.value = "";
        this.todotitle = "";
    };
    TodotitleComponent.prototype.mergingLists = function () {
        for (var _i = 0, _a = this.todo$; _i < _a.length; _i++) {
            var item = _a[_i];
            this.id++;
            var todocard = {
                id: 0,
                todoid: 0,
                title: "",
                author: "",
                date: "",
                list: []
            };
            todocard.id = this.id;
            todocard.title = item.title;
            todocard.author = item.author;
            todocard.date = item.date;
            var count = 0;
            for (var _b = 0, _c = item.todoitem; _b < _c.length; _b++) {
                var elem = _c[_b];
                var task = {
                    id: 0,
                    title: ""
                };
                count++;
                task.id = count;
                task.title = elem;
                todocard.list.push(task);
            }
            todocard.todoid = count;
            this.data.addtodo(todocard);
        }
    };
    TodotitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todotitle',
            template: __webpack_require__(/*! ./todotitle.component.html */ "./src/app/todotitle/todotitle.component.html"),
            styles: [__webpack_require__(/*! ./todotitle.component.scss */ "./src/app/todotitle/todotitle.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TodotitleComponent);
    return TodotitleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sharm\assignment-6-angular-byte-me\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map