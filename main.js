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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%; }\n\nmat-sidenav {\n  width: 250px; }\n\nmain {\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxvbmFzMVxcRGVza3RvcFxcVGVzdC1ub3J0ZS1kaWdpdGFsXFx0ZXN0LW5vcnRlLWRpZ2l0YWwvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIFxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuIFxyXG5tYWluIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test-norte-digital';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/pages/home.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_content1_content1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/content1/content1.component */ "./src/app/components/content1/content1.component.ts");
/* harmony import */ var _components_content2_content2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/content2/content2.component */ "./src/app/components/content2/content2.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_content1_content1_component__WEBPACK_IMPORTED_MODULE_9__["Content1Component"],
                _components_content2_content2_component__WEBPACK_IMPORTED_MODULE_10__["Content2Component"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/content1/content1.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/content1/content1.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center\">\n  <div class=\"col-4\">\n    <h1>Content 1</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua</p>\n  </div>\n  <div class=\"col-12 mt-5\">\n    <div class=\"card-deck\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./assets/img/img.png\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n            ut labore et dolore magna aliqua</p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./assets/img/img.png\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n            ut labore et dolore magna aliqua</p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./assets/img/img.png\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n            ut labore et dolore magna aliqua</p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"./assets/img/img.png\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n            ut labore et dolore magna aliqua</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/content1/content1.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/content1/content1.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: none; }\n\n.card-body {\n  padding: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50MS9DOlxcVXNlcnNcXG9uYXMxXFxEZXNrdG9wXFxUZXN0LW5vcnRlLWRpZ2l0YWxcXHRlc3Qtbm9ydGUtZGlnaXRhbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGVudDFcXGNvbnRlbnQxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudDEvY29udGVudDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/content1/content1.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/content1/content1.component.ts ***!
  \***********************************************************/
/*! exports provided: Content1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content1Component", function() { return Content1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Content1Component = /** @class */ (function () {
    function Content1Component() {
    }
    Content1Component.prototype.ngOnInit = function () {
    };
    Content1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content1',
            template: __webpack_require__(/*! ./content1.component.html */ "./src/app/components/content1/content1.component.html"),
            styles: [__webpack_require__(/*! ./content1.component.scss */ "./src/app/components/content1/content1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Content1Component);
    return Content1Component;
}());



/***/ }),

/***/ "./src/app/components/content2/content2.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/content2/content2.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center justify-content-end  mt-5 bg-color-content2\">\n  <div class=\"col-7 mt-5 text-right\">\n    <img src=\"./assets/img/cloud.png\" width=\"80%\">\n  </div>\n  <div class=\"col-5 mt-5 text-right\">\n    <h1>Content 2</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua </p>\n  </div>\n  <div class=\"col-12 mt-5\">\n    <div class=\"box-content\">\n      <div class=\"box-color\">\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n      </div>\n      <div class=\"box-color\">\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n      </div>\n      <div class=\"box-color\">\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n        <div class=\"lines\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/content2/content2.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/content2/content2.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-content: space-between;\n  align-items: center; }\n\n.box-color {\n  background-color: transparent;\n  border: none;\n  border-radius: 0%;\n  border: 5px #fff solid;\n  padding: 55px;\n  flex: 0 1 auto;\n  align-self: auto; }\n\n.box-color:nth-child(0n+2) {\n  border-color: #279aff; }\n\n.box-color:nth-child(0n+2) .lines {\n    background: #279aff; }\n\n.lines {\n  width: 180px;\n  height: 10px;\n  margin: 15px auto 0;\n  background: #fff; }\n\n.lines:first-child {\n  width: 180px;\n  height: 15px;\n  margin: 0 auto 35px;\n  background: #fff; }\n\n.lines:last-child {\n  width: 180px;\n  height: 30px;\n  margin: 40px auto 0;\n  background: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50Mi9DOlxcVXNlcnNcXG9uYXMxXFxEZXNrdG9wXFxUZXN0LW5vcnRlLWRpZ2l0YWxcXHRlc3Qtbm9ydGUtZGlnaXRhbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGVudDJcXGNvbnRlbnQyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR0ksYUFBYTtFQUdiLG1CQUFtQjtFQUduQixpQkFBaUI7RUFHakIsOEJBQThCO0VBRzlCLDRCQUE0QjtFQUc1QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsYUFBYTtFQUdiLGNBQWM7RUFHZCxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFEekI7SUFHUSxtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudDIvY29udGVudDIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJveC1jb250ZW50e1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm94LWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTsgIFxyXG4gICAgYm9yZGVyOiA1cHggI2ZmZiBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDU1cHg7XHJcbiAgICAtd2Via2l0LWZsZXg6IDAgMSBhdXRvO1xyXG4gICAgLW1zLWZsZXg6IDAgMSBhdXRvO1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IGF1dG87XHJcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xyXG4gICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4uYm94LWNvbG9yOm50aC1jaGlsZCgwbisyKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNzlhZmY7XHJcbiAgICAubGluZXN7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI3OWFmZjtcclxuICAgIH1cclxufVxyXG5cclxuLmxpbmVzeyAgIFxyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmxpbmVzOmZpcnN0LWNoaWxkeyAgIFxyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmxpbmVzOmxhc3QtY2hpbGR7ICAgXHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0byAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/content2/content2.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/content2/content2.component.ts ***!
  \***********************************************************/
/*! exports provided: Content2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content2Component", function() { return Content2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Content2Component = /** @class */ (function () {
    function Content2Component() {
    }
    Content2Component.prototype.ngOnInit = function () {
    };
    Content2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content2',
            template: __webpack_require__(/*! ./content2.component.html */ "./src/app/components/content2/content2.component.html"),
            styles: [__webpack_require__(/*! ./content2.component.scss */ "./src/app/components/content2/content2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Content2Component);
    return Content2Component;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center pt-5 pb-5\">\n  <div class=\"col-4\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h1>Lorem ipsum Design</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua </p>\n      </div>\n      <div class=\"col-12\"><button mat-stroked-button class=\"mt-5\">Login</button></div>\n    </div>\n\n\n  </div>\n  <div class=\"col-8\">\n    <img src=\"./assets/img/banner-people.png\" width=\"100%\" alt=\"\">\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-stroked-button {\n  background-color: #279aff;\n  color: white;\n  font-size: 12pt;\n  border-radius: 0px;\n  outline: none;\n  padding: 14px 25px;\n  line-height: 1;\n  text-transform: uppercase;\n  font-weight: 900; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxvbmFzMVxcRGVza3RvcFxcVGVzdC1ub3J0ZS1kaWdpdGFsXFx0ZXN0LW5vcnRlLWRpZ2l0YWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3Ryb2tlZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5YWZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pages/home.component.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid m-0 p-0 \">\n  <div class=\"bg-banner\">\n    <div class=\"container p-0\">\n      <app-navbar></app-navbar>\n      <app-header></app-header>\n    </div>\n  </div>\n  <div class=\"container p-0 mt-5 mb-5 pt-5 pb-5 \">\n    <app-content1></app-content1>\n  </div>\n  <div class=\"bg-color-content2 mt-5 pt-5 pb-5\">\n    <div class=\"container p-0 \">\n      <app-content2></app-content2>\n    </div>\n  </div>\n  <div class=\"bg-footer p-5\">\n    <app-footer></app-footer>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/home.component.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-footer {\n  background: #279aff; }\n\n.bg-banner {\n  background: #fff url('bg-banner.png') no-repeat right; }\n\n.bg-color-content2 {\n  background: #ecf4ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxvbmFzMVxcRGVza3RvcFxcVGVzdC1ub3J0ZS1kaWdpdGFsXFx0ZXN0LW5vcnRlLWRpZ2l0YWwvc3JjXFxhcHBcXHBhZ2VzXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0kscURBQXVFLEVBQUE7O0FBRzNFO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6ICMyNzlhZmY7XHJcbn1cclxuLmJnLWJhbm5lcntcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iZy1iYW5uZXIucG5nXCIpICBuby1yZXBlYXQgcmlnaHQ7XHJcblxyXG59XHJcbi5iZy1jb2xvci1jb250ZW50MntcclxuICAgIGJhY2tncm91bmQ6ICNlY2Y0ZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home.component.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home.component.ts ***!
  \*****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <ul>\n    <li>\n      <a>Content 1</a>\n    </li>\n    <li>\n      <a>Content 2</a>\n    </li>\n    <li>\n      <a>Login</a>\n    </li>\n  </ul>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #192843; }\n\na:hover, a:active {\n  color: #192843; }\n\nul {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-content: center;\n  align-items: center;\n  list-style-type: none;\n  flex: 1 100%;\n  margin-top: 85px; }\n\nul li {\n    flex: 0 1 auto;\n    align-self: auto;\n    margin: 0 30px 0 0;\n    cursor: pointer; }\n\nul li:last-child {\n    color: #279aff;\n    margin: 0; }\n\nmat-toolbar {\n  background: none;\n  border-radius: 3px;\n  font-family: Open Sans;\n  font-weight: 600; }\n\n@media (max-width: 959px) {\n  mat-toolbar {\n    border-radius: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9DOlxcVXNlcnNcXG9uYXMxXFxEZXNrdG9wXFxUZXN0LW5vcnRlLWRpZ2l0YWxcXHRlc3Qtbm9ydGUtZGlnaXRhbC9zcmNcXGFwcFxcc2hhcmVkXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYyxFQUFBOztBQUdkO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFUcEI7SUFZUSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBZnZCO0lBa0JZLGNBQWM7SUFDZCxTQUFTLEVBQUE7O0FBS3pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0k7SUFDSSxrQkFBa0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzE5Mjg0MztcclxufVxyXG4gXHJcbmE6aG92ZXIsIGE6YWN0aXZle1xyXG4gICAgY29sb3I6ICMxOTI4NDM7XHJcbn1cclxuIFxyXG4gICAgdWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIGZsZXg6IDEgMTAwJTsgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogODVweDtcclxuICAgICAgICBcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMzBweCAwIDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjc5YWZmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gXHJcbm1hdC10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgICAgXHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zOyBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIFxyXG5AbWVkaWEobWF4LXdpZHRoOiA5NTlweCl7XHJcbiAgICBtYXQtdG9vbGJhcntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB9XHJcbn0gICAiXX0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\onas1\Desktop\Test-norte-digital\test-norte-digital\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map