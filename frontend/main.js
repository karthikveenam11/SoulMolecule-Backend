(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/activities/activities.component.ts":
/*!****************************************************!*\
  !*** ./src/app/activities/activities.component.ts ***!
  \****************************************************/
/*! exports provided: ActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function() { return ActivitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ActivitiesComponent {
    constructor() { }
    ngOnInit() { }
}
ActivitiesComponent.ɵfac = function ActivitiesComponent_Factory(t) { return new (t || ActivitiesComponent)(); };
ActivitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivitiesComponent, selectors: [["app-activities"]], decls: 0, vars: 0, template: function ActivitiesComponent_Template(rf, ctx) { }, styles: [".card[_ngcontent-%COMP%] {\n    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);\n    background: #fff;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-left: 10px;\n  }\n  .card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    flex: 100%;\n  }\n  .card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n  }\n  .card[_ngcontent-%COMP%]   .chips[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n  .card[_ngcontent-%COMP%]   .featured-image[_ngcontent-%COMP%] {\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    overflow: hidden;\n    width: 100%;\n    height: 300px;\n  }\n  @media only screen and (min-width: 768px) {\n    .card[_ngcontent-%COMP%] {\n      flex-direction: row;\n      max-height: 279px;\n    }\n    .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      font-size: calc(100% + 1vw);\n    }\n    .card[_ngcontent-%COMP%]   .featured-image[_ngcontent-%COMP%] {\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px;\n      border-top-right-radius: 0;\n      max-width: 390px;\n      max-height: 279px;\n    }\n  }\n  @media only screen and (min-width: 1280px) {\n    .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      font-size: 32px;\n    }\n  }\n  *[_ngcontent-%COMP%] {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 1.2;\n    font-weight: bold;\n    color: #222;\n    margin: .5em 0;\n  }\n  .pre-heading[_ngcontent-%COMP%] {\n    color: #444;\n    font-size: 20px;\n    font-weight: 400;\n    text-transform: uppercase;\n  }\n  .meta[_ngcontent-%COMP%] {\n    color: #555;\n    font-size: 16px;\n    text-transform: uppercase;\n  }\n  .author[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n  }\n  ul[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    max-width: 1160px;\n    padding: 30px;\n  }\n  a[_ngcontent-%COMP%] {\n    text-decoration: none;\n  }\n  .chips[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    -ms-overflow-style: none;\n  }\n  .chips[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .chip[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    font-size: 16px;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    line-height: 1.4;\n    white-space: nowrap;\n    color: white;\n    background: #009DFF;\n    border-radius: 25px;\n    margin-right: 8px;\n    padding: 5px 12px;\n    max-height: 32px;\n  }\n  .chip.large[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    color: black;\n    border: 1px solid #E0E0E0;\n    background: white;\n    padding: 10px 15px;\n    max-height: 44px;\n  }\n  .chip[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n    height: 22px !important;\n    background-color: transparent !important;\n    padding: 3px 0 0 0 !important;\n  }\n  .chip[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: black;\n    text-transform: uppercase;\n    font-size: 16px;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  }\n  a.chip[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  a.chip[_ngcontent-%COMP%]:hover, a.chip[_ngcontent-%COMP%]:visited, a.chip[_ngcontent-%COMP%]:active {\n    color: white;\n  }\n  a.chip.large[_ngcontent-%COMP%]:visited, a.chip.large[_ngcontent-%COMP%]:hover, a.chip.large[_ngcontent-%COMP%]:active {\n    color: black;\n  }\n  .container[_ngcontent-%COMP%] {\n    height: 200px;\n    position: relative;\n  }\n  .center[_ngcontent-%COMP%] {\n    margin: 0;\n    position: absolute;\n    left: 50%;\n    transform: translateY(-50%);\n  }\n  \n  body[_ngcontent-%COMP%] {\n\n  font-weight: 600;\n  font-size: 40px;\n}\n  .text[_ngcontent-%COMP%] {\n    font-family: 'Open Sans', sans-serif;\n  position: absolute;\n  width: 450px;\n  left: 50%;\n  margin-left: -225px;\n  height: 40px;\n  margin-top: -20px;\n}\n  p[_ngcontent-%COMP%] {\n    font-family: 'Open Sans', sans-serif;\n  display: inline-block;\n  vertical-align: top;\n  margin: 0;\n}\n  .word[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 220px;\n  opacity: 0;\n}\n  .letter[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  float: left;\n  transform: translateZ(25px);\n  transform-origin: 50% 50% 25px;\n}\n  .letter.out[_ngcontent-%COMP%] {\n  transform: rotateX(90deg);\n  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n  .letter.behind[_ngcontent-%COMP%] {\n  transform: rotateX(-90deg);\n}\n  .letter.in[_ngcontent-%COMP%] {\n  transform: rotateX(0deg);\n  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n  .wisteria[_ngcontent-%COMP%] {\n  color: #8e44ad;\n}\n  .belize[_ngcontent-%COMP%] {\n  color: #2980b9;\n}\n  .pomegranate[_ngcontent-%COMP%] {\n  color: #c0392b;\n}\n  .green[_ngcontent-%COMP%] {\n  color: #16a085;\n}\n  .midnight[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZpdGllcy9hY3Rpdml0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzRUFBc0U7SUFDdEUsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7RUFDZjtFQUVBO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLDJCQUEyQjtNQUMzQiw4QkFBOEI7TUFDOUIsMEJBQTBCO01BQzFCLGdCQUFnQjtNQUNoQixpQkFBaUI7SUFDbkI7RUFDRjtFQUNBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7RUFDQTtJQUNFLDJEQUEyRDtFQUM3RDtFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7RUFDaEI7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtFQUNmO0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLDRDQUE0QztJQUM1Qyx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkRBQTJEO0lBQzNELGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLHdDQUF3QztJQUN4Qyw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLDJEQUEyRDtFQUM3RDtFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUVULDJCQUEyQjtFQUM3QjtFQUVGLG1CQUFtQjtFQUduQjs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtFQUVBO0lBQ0ksb0NBQW9DO0VBQ3RDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0VBRUE7SUFDSSxvQ0FBb0M7RUFDdEMscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaO0VBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDO0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0VBQWtFO0FBQ3BFO0VBRUE7RUFDRSwwQkFBMEI7QUFDNUI7RUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtRUFBbUU7QUFDckU7RUFFQTtFQUNFLGNBQWM7QUFDaEI7RUFFQTtFQUNFLGNBQWM7QUFDaEI7RUFFQTtFQUNFLGNBQWM7QUFDaEI7RUFFQTtFQUNFLGNBQWM7QUFDaEI7RUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmNhcmQgaGVhZGVyIHtcbiAgICBmbGV4OiAxMDAlO1xuICB9XG4gIC5jYXJkIC5tZXRhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICB9XG4gIC5jYXJkIC5jaGlwcyB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbiAgLmNhcmQgLmZlYXR1cmVkLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jYXJkIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBtYXgtaGVpZ2h0OiAyNzlweDtcbiAgICB9XG4gICAgLmNhcmQgaDMge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEwMCUgKyAxdncpO1xuICAgIH1cbiAgICAuY2FyZCAuZmVhdHVyZWQtaW1hZ2Uge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgICAgbWF4LWhlaWdodDogMjc5cHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgLmNhcmQgaDMge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbiAgfVxuICAqIHtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICBoMyB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgbWFyZ2luOiAuNWVtIDA7XG4gIH1cbiAgXG4gIC5wcmUtaGVhZGluZyB7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLm1ldGEge1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYXV0aG9yIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICB1bCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuICBcbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICAuY2hpcHMge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICB9XG4gIC5jaGlwczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5jaGlwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogIzAwOURGRjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIG1heC1oZWlnaHQ6IDMycHg7XG4gIH1cbiAgLmNoaXAubGFyZ2Uge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIG1heC1oZWlnaHQ6IDQ0cHg7XG4gIH1cbiAgLmNoaXAgaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDNweCAwIDAgMCAhaW1wb3J0YW50O1xuICB9XG4gIC5jaGlwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIGEuY2hpcCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGEuY2hpcDpob3ZlciwgYS5jaGlwOnZpc2l0ZWQsIGEuY2hpcDphY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgYS5jaGlwLmxhcmdlOnZpc2l0ZWQsIGEuY2hpcC5sYXJnZTpob3ZlciwgYS5jaGlwLmxhcmdlOmFjdGl2ZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmNlbnRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4vKiBBbmltYXRpb24gVGV4dCAqL1xuICBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjYwMCk7XG5cbmJvZHkge1xuXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDUwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxucCB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbjogMDtcbn1cblxuLndvcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMjBweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmxldHRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDI1cHgpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDI1cHg7XG59XG5cbi5sZXR0ZXIub3V0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xufVxuXG4ubGV0dGVyLmJlaGluZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xufVxuXG4ubGV0dGVyLmluIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zOHMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ud2lzdGVyaWEge1xuICBjb2xvcjogIzhlNDRhZDtcbn1cblxuLmJlbGl6ZSB7XG4gIGNvbG9yOiAjMjk4MGI5O1xufVxuXG4ucG9tZWdyYW5hdGUge1xuICBjb2xvcjogI2MwMzkyYjtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICMxNmEwODU7XG59XG5cbi5taWRuaWdodCB7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activities',
                templateUrl: './activities.component.html',
                styleUrls: ['./activities.component.css'],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _packages_packages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packages/packages.component */ "./src/app/packages/packages.component.ts");






const routes = [
    { path: 'packages', component: _packages_packages_component__WEBPACK_IMPORTED_MODULE_3__["PackagesComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/packages"]; };
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 32, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-custom"], [1, "dropdown-menu", "loginmenu"], [1, "px-5", "py-2"], ["role", "form", 1, "form"], [1, "form-group"], [1, "input-group"], [1, "input-group-addon"], [1, "glyphicon", "glyphicon-user"], ["id", "email", "type", "text", "name", "email", "placeholder", "Email", 1, "form-control"], ["id", "passwordInput", "placeholder", "Password", "type", "text", "required", "", 1, "form-control", "form-control-sm"], ["type", "submit", 1, "btn", "btn-block", "clickLogin"], [1, "form-group", "text-center"], ["href", "#", "data-toggle", "modal", "data-target", "#modalPassword", 1, "txt_forgotpd"], [1, "LogoColor", 3, "routerLink"], [1, "kingland-logo"], [1, "firstName"], [1, "lastName"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "nav-items"], [1, "nav-item"], [1, "packages", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Kingland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cruises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Pacifico);\n\n.navbar-custom[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n  background-color: #5a5959;\n  position: fixed;\n  z-index: 500;\n  top: 0px;\n  width: 100%;\n}\n\n@media(min-width : 1001){\n  .kingland-logo[_ngcontent-%COMP%] {\n    text-decoration: none;\n    position: relative;\n    left: 500px;\n    top: 0px;\n    font-size: 57px;\n    padding-bottom: 5px;\n    z-index: 15;\n  }\n}\n\n@media (min-width: 997px)  {\n  .kingland-logo[_ngcontent-%COMP%] {\n    text-decoration: none;\n    position: relative;\n    left: 45vw;\n    top: 0px;\n    font-size: 37px;\n    padding-bottom: 5px;\n    z-index: 15;\n  }\n   \n  .nav-items[_ngcontent-%COMP%] {\n    text-decoration: none !important;\n    position: relative;\n    right: 1vw;\n  }\n  .loginmenu[_ngcontent-%COMP%] {\n    float: right !important;\n    top: 100%;\n    left: 86%;\n  }\n  .packages[_ngcontent-%COMP%]{\n\n    text-decoration: none !important;\n  }\n}\n\n@media (min-width: 337px) and( max-width:996) {\n  .kingland-logo[_ngcontent-%COMP%] {\n   \n    color: #ffffff !important;\n    position: absolute;\n    width: 50%;\n    height: 200px;\n    right: 5vw;\n    z-index: 15;\n  }\n  nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fafafa;\n    font-weight: bold;\n  }\n\n  .nav-items[_ngcontent-%COMP%] {\n    right: 800px;\n  }\n  .loginmenu[_ngcontent-%COMP%] {\n    float: right !important;\n    top: 100%;\n    left: 86%;\n    color: white;\n  }\n}\n\n@media (min-width: 997px) {\n  nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fafafa !important;\n    float: right;\n    font-weight: bold;\n  }\n}\n\n@media (min-width: 997px) {\n  #loginbutton[_ngcontent-%COMP%] {\n    display: none;\n    float: right;\n    position: relative;\n    left: 93vw;\n    color: rgb(218, 230, 230);\n  }\n}\n\n@media (min-width: 337px) and( max-width:996) {\n  #loginbutton[_ngcontent-%COMP%] {\n    display: none;\n    float: right;\n    position: relative;\n    left: 93vw;\n    color: rgb(29, 231, 231) !important;\n  }\n}\n\n.clickLogin[_ngcontent-%COMP%] {\n  background-color: #666666;\n  color: aliceblue;\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"https://mdbootstrap.com/img/svg/hamburger2.svg?color=fff\");\n}\n\n.firstname[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgb(243, 243, 243) !important;\n  font-family: cursive;\n}\n\n.lastName[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: aqua;\n  font-family: \"Pacifico\";\n}\n\n.LogoColor[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  color: #fdfdfd;\n}\n\n.loginBtn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgb(224, 224, 224);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEOztBQUU3RDtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZO0VBQ1osUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFDQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtHQUNDLHVEQUF1RDtFQUN4RDtJQUNFLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULFNBQVM7RUFDWDtFQUNBOztJQUVFLGdDQUFnQztFQUNsQztBQUNGOztBQUNBO0VBQ0U7O0lBRUUseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQ0FBbUM7RUFDckM7QUFDRjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpRkFBaUY7QUFDbkY7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFjaWZpY28pO1xuXG4ubmF2YmFyLWN1c3RvbSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTU5NTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTAwO1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEobWluLXdpZHRoIDogMTAwMSl7XG4gIC5raW5nbGFuZC1sb2dvIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIGZvbnQtc2l6ZTogNTdweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHotaW5kZXg6IDE1O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTk3cHgpICB7XG4gIC5raW5nbGFuZC1sb2dvIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDQ1dnc7XG4gICAgdG9wOiAwcHg7XG4gICAgZm9udC1zaXplOiAzN3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgei1pbmRleDogMTU7XG4gIH1cbiAgIC8qdGhpcyBpcyByZXNwb25zaWJsZSBmb3IgbW92ZW1lbnQgb2YgaXRlbXMgaW4gbmF2IGJhciovXG4gIC5uYXYtaXRlbXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMXZ3O1xuICB9XG4gIC5sb2dpbm1lbnUge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiA4NiU7XG4gIH1cbiAgLnBhY2thZ2Vze1xuXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMzdweCkgYW5kKCBtYXgtd2lkdGg6OTk2KSB7XG4gIC5raW5nbGFuZC1sb2dvIHtcbiAgIFxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICByaWdodDogNXZ3O1xuICAgIHotaW5kZXg6IDE1O1xuICB9XG4gIG5hdiAubmF2YmFyLW5hdiBsaSBhIHtcbiAgICBjb2xvcjogI2ZhZmFmYTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5uYXYtaXRlbXMge1xuICAgIHJpZ2h0OiA4MDBweDtcbiAgfVxuICAubG9naW5tZW51IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogODYlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTk3cHgpIHtcbiAgbmF2IC5uYXZiYXItbmF2IGxpIGEge1xuICAgIGNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTk3cHgpIHtcbiAgI2xvZ2luYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogOTN2dztcbiAgICBjb2xvcjogcmdiKDIxOCwgMjMwLCAyMzApO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzM3cHgpIGFuZCggbWF4LXdpZHRoOjk5Nikge1xuICAjbG9naW5idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA5M3Z3O1xuICAgIGNvbG9yOiByZ2IoMjksIDIzMSwgMjMxKSAhaW1wb3J0YW50O1xuICB9XG59XG4uY2xpY2tMb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tZGJvb3RzdHJhcC5jb20vaW1nL3N2Zy9oYW1idXJnZXIyLnN2Zz9jb2xvcj1mZmZcIik7XG59XG4uZmlyc3RuYW1lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuLmxhc3ROYW1lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYXF1YTtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY29cIjtcbn1cbi5Mb2dvQ29sb3Ige1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZGZkZmQ7XG59XG4ubG9naW5CdG4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZ2IoMjI0LCAyMjQsIDIyNCk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _activities_activities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activities/activities.component */ "./src/app/activities/activities.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _activities_activities_component__WEBPACK_IMPORTED_MODULE_4__["ActivitiesComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _activities_activities_component__WEBPACK_IMPORTED_MODULE_4__["ActivitiesComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function HomeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/beach", slide_r3, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", activity_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r4.ActivityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r4.Description);
} }
const _c0 = function () { return ["/packages"]; };
class HomeComponent {
    constructor() {
        this.title = 'ngSlick';
        this.slides = [1, 2, 3, 4];
        this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: "<div class='nav-btn next-slide'></div>",
            prevArrow: "<div class='nav-btn prev-slide'></div>",
            dots: true,
            autoplaySpeed: 2000,
            autoplay: true,
            infinite: false,
        };
        this.activities = [
            {
                ActivityName: 'Kayaking',
                image: '../../assets/kayak.jpg',
                Description: 'Experience the fresh air and refreshing water at the best possible price.We promise you a thrilling experience that you will remember for lifetime. Click on explore to know more',
            },
            {
                ActivityName: 'Fish your way',
                image: '../../assets/fishing.jpg',
                Description: 'Cause, why not spend some fun time fishing? ',
            },
            {
                ActivityName: 'Hang in and have some drinks',
                image: '../../assets/drinks.jpeg',
                Description: 'After spending time at fishing and kayaking, everyone is up for a beer. We provide that as well. So what are you waiting for, click on book now and grab your spot',
            },
        ];
    }
    slickInit(e) {
        console.log('slick initialized');
    }
    breakpoint(e) {
        console.log('breakpoint');
    }
    afterChange(e) {
        console.log('afterChange');
    }
    beforeChange(e) {
        console.log('beforeChange');
    }
    ngOnInit() {
    }
    onWindowScroll(e) {
        if (window.pageYOffset > 10) {
            let element = document.getElementById('navbar');
            element.classList.add('sticky');
        }
        else {
            let element = document.getElementById('navbar');
            element.classList.remove('sticky');
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 75, vars: 5, consts: [[1, "cor"], ["name", "viewport", "content", "width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no, overflow= hidden"], [1, "carousel", 3, "config", "init", "breakpoint", "afterChange", "beforeChange"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", 4, "ngFor", "ngForOf"], ["href", "http://fonts.googleapis.com/css?family=Oleo+Script", "rel", "stylesheet", "type", "text/css"], [1, "body-data"], [1, "para"], [1, "intro"], [1, "quote"], [1, "place"], [1, "para-1"], [1, "activities"], [4, "ngFor", "ngForOf"], [1, "text"], [1, "word", "belize"], [1, "word", "pomegranate"], [1, "word", "green"], [1, "word", "midnight"], [1, "container"], [1, "center"], [1, "button-three", 3, "routerLink"], [1, "footer-distributed"], [1, "footer-left"], [1, "footer-company-name"], [1, "footer-center"], [1, "fa", "fa-map-marker"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"], ["href", "mailto:kkprojects@gmail.com"], [1, "footer-right"], [1, "footer-company-about"], [1, "footer-icons"], ["href", "#", 1, "fb"], ["href", "#", 1, "insta"], ["href", "#", 1, "twitter"], ["ngxSlickItem", ""], ["alt", "", "width", "100%", "height", "50%", 3, "src"], [1, "card"], ["href", "#", 1, "featured-image", 3, "src"], [1, "card-body"], [1, "title"], [1, "aname"], [1, "meta"], [1, "author"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-slick-carousel", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("init", function HomeComponent_Template_ngx_slick_carousel_init_4_listener($event) { return ctx.slickInit($event); })("breakpoint", function HomeComponent_Template_ngx_slick_carousel_breakpoint_4_listener($event) { return ctx.breakpoint($event); })("afterChange", function HomeComponent_Template_ngx_slick_carousel_afterChange_4_listener($event) { return ctx.afterChange($event); })("beforeChange", function HomeComponent_Template_ngx_slick_carousel_beforeChange_4_listener($event) { return ctx.beforeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Travel to unviel the true beauty of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Goa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Goa is synonymous to many things that are indicative of a life without worries and carefree measures. Be it the parties, the casinos, the flea markets or the beach shacks\u2014Goa is to India what Ibiza is to the world. Here, we take you on a trail along the best beaches in Goa. These places are varied in nature and a visit here will expose you to the best beach in Goa for family and best beaches in Goa for couples. Checkout our packages to spend your holidays in the best way possible. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_23_Template, 12, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "wonderful.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "refreshing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "memorable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "cheap.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Book Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "footer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "KingLand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Cruises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "KingLandcruises\u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "This website is devoloped by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " KK Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "+91 9959807730, 7702696625");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "support@company.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "About the company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " KingLand cruises provides various tourism packages for people who want to enjoy their holidays in goa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway);\n@import url(https://fonts.googleapis.com/css?family=Droid+Serif);\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  background: #333 url(\"https://codepen.io/images/classy_fabric.png\");\n}\n.slides[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 909px;\n  height: 470px; \n  display: block;\n  margin: 0 auto;\n  position: relative;\n}\n.slides[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n}\n@media (min-width: 768px) {\n  .activities[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    border-width: 2em;\n    width: 80vw;\n    margin-left: 10vw;\n    margin-right: 10vw;\n  }\n}\n.activities[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border-width: 2em;\n}\n.cor[_ngcontent-%COMP%]{\n\n}\n.fb[_ngcontent-%COMP%] {\n  background-image: url('facebook.png');\n}\n.slides[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.slide-container[_ngcontent-%COMP%] {\n  display: block;\n}\n.slide[_ngcontent-%COMP%] {\n  top: 0;\n  opacity: 0;\n  width: 80%;\n  left: 10%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  text-align: center;\n\n  transform: scale(0);\n\n  transition: all 0.7s ease-in-out;\n}\n.slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.nav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100%;\n  display: none;\n  position: absolute;\n\n  opacity: 0;\n  z-index: 9;\n  cursor: pointer;\n\n  transition: opacity 0.2s;\n\n  color: #fff;\n  font-size: 156pt;\n  text-align: center;\n  line-height: 380px;\n  font-family: \"Varela Round\", sans-serif;\n  background-color: rgba(255, 255, 255, 0.3);\n  text-shadow: 0px 0px 15px rgb(119, 119, 119);\n}\n.slide[_ngcontent-%COMP%]:hover    + .nav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.nav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.nav[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  right: 0;\n}\ninput[_ngcontent-%COMP%]:checked    + .slide-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  opacity: 1;\n\n  transform: scale(1);\n\n  transition: opacity 1s ease-in-out;\n}\ninput[_ngcontent-%COMP%]:checked    + .slide-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n}\n.nav-dots[_ngcontent-%COMP%] {\n  width: 100%;\n  bottom: 9px;\n  height: 11px;\n  display: block;\n  position: absolute;\n  text-align: center;\n}\n.nav-dots[_ngcontent-%COMP%]   .nav-dot[_ngcontent-%COMP%] {\n  top: -5px;\n  width: 11px;\n  height: 11px;\n  margin: 0 4px;\n  position: relative;\n  border-radius: 100%;\n  display: inline-block;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.nav-dots[_ngcontent-%COMP%]   .nav-dot[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.8);\n}\ninput#img-1[_ngcontent-%COMP%]:checked    ~ .nav-dots[_ngcontent-%COMP%]   label#img-dot-1[_ngcontent-%COMP%], input#img-2[_ngcontent-%COMP%]:checked    ~ .nav-dots[_ngcontent-%COMP%]   label#img-dot-2[_ngcontent-%COMP%], input#img-3[_ngcontent-%COMP%]:checked    ~ .nav-dots[_ngcontent-%COMP%]   label#img-dot-3[_ngcontent-%COMP%], input#img-4[_ngcontent-%COMP%]:checked    ~ .nav-dots[_ngcontent-%COMP%]   label#img-dot-4[_ngcontent-%COMP%], input#img-5[_ngcontent-%COMP%]:checked    ~ .nav-dots[_ngcontent-%COMP%]   label#img-dot-5[_ngcontent-%COMP%], input#img-6[_ngcontent-%COMP%]:checked    ~ .nav-dots[_ngcontent-%COMP%]   label#img-dot-6[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.8);\n}\nh1[_ngcontent-%COMP%] {\n  font-family: 'Raleway';\n}\np[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.para-1[_ngcontent-%COMP%]{\n  font-family: 'Raleway';\n}\n.para[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: columns;\n  height: 100%;\n  position: relative;\n}\n@mixin setBtn($borderColor, $bgColor, $txtColor) {\n  border: 1px solid $borderColor;\n  background: $bgColor;\n  color: $txtColor;\n}\n.intro[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 80%;\n  color: black;\n  position: relative;\n  z-index: 1;\n}\n.btn[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  padding: 1.2em 3em;\n  border-radius: 2px;\n  @include setBtn($clouds, $strongClouds, $clouds);\n  text-decoration: none;\n  text-transform: uppercase;\n  text-align: center;\n  transition: all 0.25s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  @include setBtn($strongDark, $dark, $light);\n}\n.btn[_ngcontent-%COMP%]:focus {\n  @include setBtn($strongDark, $strongDark, $light);\n}\n@media only screen and (max-width: 800px) {\n  .intro[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.cont[_ngcontent-%COMP%] {\n  height: 200px;\n  position: relative;\n}\n.sub-main[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  left: 45%;\n  transform: translateY(-50%);\n}\n\n@media (min-width: 768px) {\n  .button-three[_ngcontent-%COMP%] {\n    position: relative;\n    background-color: #f39c12;\n    border: none;\n    padding: 20px;\n    width: 10vw;\n    text-align: center; \n    transition-duration: 0.4s;\n    text-decoration: none;\n    overflow: hidden;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100vw;\n  text-align: center;\n  position: relative;\n}\n.center[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  text-align: center;\n  position: absolute;\n}\n@media (max-width: 767px) {\n  .button-three[_ngcontent-%COMP%] {\n    position: relative;\n    background-color: #f39c12;\n    border: none;\n    padding: 20px;\n    width: 40vw;\n    text-align: center; \n    transition-duration: 0.4s;\n    text-decoration: none;\n    overflow: hidden;\n  }\n}\n.button-three[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  box-shadow: 0px 2px 10px 5px #97b1bf;\n  color: #000;\n}\n.button-three[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background: #f1c40f;\n  display: block;\n  position: absolute;\n  padding-top: 300%;\n  padding-left: 350%;\n  margin-left: -20px !important;\n  margin-top: -120%;\n  opacity: 0;\n  transition: all 0.8s;\n}\n.button-three[_ngcontent-%COMP%]:active:after {\n  padding: 0;\n  margin: 0;\n  opacity: 1;\n  transition: 0s;\n}\n.carousel[_ngcontent-%COMP%] {\n  margin-top: 15vh;\n  width: 60%;\n  height: 50%;\n  position: relative;\n  box-shadow: 20px 20px 20px 20px #888888;\n}\n@media (max-width: 767px) {\n  .carousel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  .card[_ngcontent-%COMP%] {\n    display: flex;\n    height: 70vh;\n    width: 85vw;\n    overflow-y: scroll;\n    scrollbar-width: none;\n    flex-direction: column;\n  }\n}\n#element[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);\n    background: #fff;\n    border-radius: 5px;\n    display: flex;\n    height: 300px;\n    overflow-y: scroll;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    flex-direction: column;\n  }\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  margin-left: 10px;\n}\n.card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  flex: 100%;\n}\n.card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.card[_ngcontent-%COMP%]   .chips[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n@media (min-width: 768px) {\n  .card[_ngcontent-%COMP%]   .featured-image[_ngcontent-%COMP%] {\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    overflow: hidden;\n    width: 100%;\n    height: 300px;\n  }\n}\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   .featured-image[_ngcontent-%COMP%] {\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    overflow: hidden;\n    width: 100%;\n    height: 60vw;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    flex-direction: row;\n    max-height: 279px;\n  }\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-family: 'Raleway';\n \n    font-size: calc(100% + 1vw);\n  }\n  .card[_ngcontent-%COMP%]   .featured-image[_ngcontent-%COMP%] {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 0;\n    max-width: 390px;\n    max-height: 279px;\n  }\n}\n@media only screen and (min-width: 1280px) {\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 32px;\n    \n    font-family: 'Raleway';\n  }\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  line-height: 1.2;\n  font-weight: bold;\n  color: #222;\n  margin: 0.5em 0;\n}\n.pre-heading[_ngcontent-%COMP%] {\n  color: #444;\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n.meta[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 16px;\n\n}\n.author[_ngcontent-%COMP%] {\n  font-family: 'Raleway';\n}\nul[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  max-width: 1160px;\n  padding: 30px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.chips[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -ms-overflow-style: none;\n}\n.chips[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  font-size: 16px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1.4;\n  white-space: nowrap;\n  color: white;\n  background: #009dff;\n  border-radius: 25px;\n  margin-right: 8px;\n  padding: 5px 12px;\n  max-height: 32px;\n}\n.chip.large[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: black;\n  border: 1px solid #e0e0e0;\n  background: white;\n  padding: 10px 15px;\n  max-height: 44px;\n}\n.chip[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n  height: 22px !important;\n  background-color: transparent !important;\n  padding: 3px 0 0 0 !important;\n}\n.chip[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: black;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\na.chip[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na.chip[_ngcontent-%COMP%]:hover, a.chip[_ngcontent-%COMP%]:visited, a.chip[_ngcontent-%COMP%]:active {\n  color: white;\n}\na.chip.large[_ngcontent-%COMP%]:visited, a.chip.large[_ngcontent-%COMP%]:hover, a.chip.large[_ngcontent-%COMP%]:active {\n  color: black;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 40px;\n  overflow-x: hidden;\n}\n.text[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  position: absolute;\n  width: 450px;\n  left: 50%;\n  margin-left: -225px;\n  height: 40px;\n  margin-top: -20px;\n}\n.title[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\np[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  display: inline-block;\n  vertical-align: top;\n  margin: 0;\n}\n.word[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 220px;\n  opacity: 0;\n}\n.letter[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  float: left;\n  transform: translateZ(25px);\n  transform-origin: 50% 50% 25px;\n}\n.letter.out[_ngcontent-%COMP%] {\n  transform: rotateX(90deg);\n  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.letter.behind[_ngcontent-%COMP%] {\n  transform: rotateX(-90deg);\n}\n.letter.in[_ngcontent-%COMP%] {\n  transform: rotateX(0deg);\n  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.wisteria[_ngcontent-%COMP%] {\n  color: #8e44ad;\n}\n.belize[_ngcontent-%COMP%] {\n  color: #2980b9;\n}\n.pomegranate[_ngcontent-%COMP%] {\n  color: #c0392b;\n}\n.green[_ngcontent-%COMP%] {\n  color: #16a085;\n}\n.midnight[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n*[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n}\n.footer-distributed[_ngcontent-%COMP%] {\n  background: #666;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  font: bold 16px sans-serif;\n  padding: 55px 50px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.footer-distributed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font: normal 36px \"Open Sans\", cursive;\n  margin: 0;\n}\n.aname[_ngcontent-%COMP%]{\n  font-family: 'Raleway';\n color: #2980b9;\n}\n.footer-distributed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: lightseagreen;\n}\n\n.footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 20px 0 12px;\n  padding: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 1.8;\n  font-weight: 400;\n  text-decoration: none;\n  color: inherit;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-company-name[_ngcontent-%COMP%] {\n  color: #222;\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0;\n}\n\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #33383b;\n  color: #ffffff;\n  font-size: 25px;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 42px;\n  margin: 10px 15px;\n  vertical-align: middle;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i.fa-envelope[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 38px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ffffff;\n  font-weight: 400;\n  vertical-align: middle;\n  margin: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 2;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: lightseagreen;\n  text-decoration: none;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \"|\";\n  font-weight: 300;\n  font-size: 20px;\n  left: 0;\n  color: #fff;\n  display: inline-block;\n  padding-right: 5px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .link-1[_ngcontent-%COMP%]:before {\n  content: none;\n}\n\n.footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-company-about[_ngcontent-%COMP%] {\n  line-height: 20px;\n  color: #92999f;\n  font-size: 13px;\n  font-weight: normal;\n  margin: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-company-about[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  background-color: #33383b;\n  border-radius: 2px;\n\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 35px;\n\n  margin-right: 3px;\n  margin-bottom: 5px;\n}\n\n@media (max-width: 880px) {\n  .footer-distributed[_ngcontent-%COMP%] {\n    font: bold 14px sans-serif;\n  }\n\n  .footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-bottom: 40px;\n    text-align: center;\n  }\n\n  .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.place[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: cursive;\n  font: bold;\n  font-size: larger;\n}\n.body-data[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  width: 100;\n  background-color: #149ecc;\n}\n.quote[_ngcontent-%COMP%] {\n  z-index: 0.2;\n  text-align: center;\n  opacity: 20px;\n  color: white;\n  font-family: \"Droid Sans\";\n}\n.fb[_ngcontent-%COMP%]{\n  background-image: url('facebook.png');\n  background-size: contain;\n}\n.twitter[_ngcontent-%COMP%]{\n  background-image: url('twitter.png');\n  background-size: contain;\n}\n.insta[_ngcontent-%COMP%]{\n  background-image: url('insta.png');\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNERBQTREO0FBQzVELGdFQUFnRTtBQUNoRTs7RUFFRSxrQkFBa0I7RUFDbEIsbUVBQW1FO0FBQ3JFO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7O0FBRUE7QUFFQTtFQUNFLHFDQUFnRDtBQUNsRDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxNQUFNO0VBQ04sVUFBVTtFQUNWLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQixtQkFBbUI7O0VBRW5CLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCOztFQUVsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7O0VBRWYsd0JBQXdCOztFQUV4QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLDBDQUEwQztFQUMxQyw0Q0FBNEM7QUFDOUM7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxRQUFRO0FBQ1Y7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IiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheSk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RHJvaWQrU2VyaWYpO1xuaHRtbCxcbmJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMzMzMgdXJsKFwiaHR0cHM6Ly9jb2RlcGVuLmlvL2ltYWdlcy9jbGFzc3lfZmFicmljLnBuZ1wiKTtcbn1cblxuLnNsaWRlcyB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA5MDlweDtcbiAgaGVpZ2h0OiA0NzBweDsgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2xpZGVzICoge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5hY3Rpdml0aWVzIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci13aWR0aDogMmVtO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMTB2dztcbiAgfVxufVxuLmFjdGl2aXRpZXMge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItd2lkdGg6IDJlbTtcbn1cblxuLmNvcntcblxufVxuXG4uZmIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ZhY2Vib29rLnBuZyk7XG59XG4uc2xpZGVzIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpZGUge1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiA4MCU7XG4gIGxlZnQ6IDEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcblxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcbn1cblxuLnNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5uYXYgbGFiZWwge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDk7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG5cbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTU2cHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDM4MHB4O1xuICBmb250LWZhbWlseTogXCJWYXJlbGEgUm91bmRcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYigxMTksIDExOSwgMTE5KTtcbn1cblxuLnNsaWRlOmhvdmVyICsgLm5hdiBsYWJlbCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm5hdiBsYWJlbDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5uYXYgLm5leHQge1xuICByaWdodDogMDtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZS1jb250YWluZXIgLnNsaWRlIHtcbiAgb3BhY2l0eTogMTtcblxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGUtY29udGFpbmVyIC5uYXYgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5hdi1kb3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogOXB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdi1kb3RzIC5uYXYtZG90IHtcbiAgdG9wOiAtNXB4O1xuICB3aWR0aDogMTFweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICBtYXJnaW46IDAgNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4ubmF2LWRvdHMgLm5hdi1kb3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuaW5wdXQjaW1nLTE6Y2hlY2tlZCB+IC5uYXYtZG90cyBsYWJlbCNpbWctZG90LTEsXG5pbnB1dCNpbWctMjpjaGVja2VkIH4gLm5hdi1kb3RzIGxhYmVsI2ltZy1kb3QtMixcbmlucHV0I2ltZy0zOmNoZWNrZWQgfiAubmF2LWRvdHMgbGFiZWwjaW1nLWRvdC0zLFxuaW5wdXQjaW1nLTQ6Y2hlY2tlZCB+IC5uYXYtZG90cyBsYWJlbCNpbWctZG90LTQsXG5pbnB1dCNpbWctNTpjaGVja2VkIH4gLm5hdi1kb3RzIGxhYmVsI2ltZy1kb3QtNSxcbmlucHV0I2ltZy02OmNoZWNrZWQgfiAubmF2LWRvdHMgbGFiZWwjaW1nLWRvdC02IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG59XG5wIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5wYXJhLTF7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG59XG4ucGFyYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5zO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1peGluIHNldEJ0bigkYm9yZGVyQ29sb3IsICRiZ0NvbG9yLCAkdHh0Q29sb3IpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmdDb2xvcjtcbiAgY29sb3I6ICR0eHRDb2xvcjtcbn1cbi5pbnRybyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEuMmVtIDNlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBAaW5jbHVkZSBzZXRCdG4oJGNsb3VkcywgJHN0cm9uZ0Nsb3VkcywgJGNsb3Vkcyk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbn1cbi5idG46aG92ZXIge1xuICBAaW5jbHVkZSBzZXRCdG4oJHN0cm9uZ0RhcmssICRkYXJrLCAkbGlnaHQpO1xufVxuLmJ0bjpmb2N1cyB7XG4gIEBpbmNsdWRlIHNldEJ0bigkc3Ryb25nRGFyaywgJHN0cm9uZ0RhcmssICRsaWdodCk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmludHJvIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5cbi5jb250IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3ViLW1haW4ge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDUlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi8qQnV0dG9uIFRocmVlKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYnV0dG9uLXRocmVlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogMTB2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5idXR0b24tdGhyZWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5YzEyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIFNhZmFyaSAqL1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbi5idXR0b24tdGhyZWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggNXB4ICM5N2IxYmY7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYnV0dG9uLXRocmVlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogI2YxYzQwZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDMwMCU7XG4gIHBhZGRpbmctbGVmdDogMzUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0xMjAlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC44cztcbn1cblxuLmJ1dHRvbi10aHJlZTphY3RpdmU6YWZ0ZXIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDBzO1xufVxuLmNhcm91c2VsIHtcbiAgbWFyZ2luLXRvcDogMTV2aDtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IDIwcHggMjBweCAjODg4ODg4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcm91c2VsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIHdpZHRoOiA4NXZ3O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuI2VsZW1lbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uY2FyZCBoZWFkZXIge1xuICBmbGV4OiAxMDAlO1xufVxuLmNhcmQgLm1ldGEge1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuLmNhcmQgLmNoaXBzIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCAuZmVhdHVyZWQtaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJkIC5mZWF0dXJlZC1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjB2dztcbiAgfVxufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXgtaGVpZ2h0OiAyNzlweDtcbiAgfVxuICAuY2FyZCBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiBcbiAgICBmb250LXNpemU6IGNhbGMoMTAwJSArIDF2dyk7XG4gIH1cbiAgLmNhcmQgLmZlYXR1cmVkLWltYWdlIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIG1heC13aWR0aDogMzkwcHg7XG4gICAgbWF4LWhlaWdodDogMjc5cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5jYXJkIGgzIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgfVxufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMjI7XG4gIG1hcmdpbjogMC41ZW0gMDtcbn1cblxuLnByZS1oZWFkaW5nIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1ldGEge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG59XG5cbi5hdXRob3Ige1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jaGlwcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbn1cbi5jaGlwczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwOWRmZjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBtYXgtaGVpZ2h0OiAzMnB4O1xufVxuLmNoaXAubGFyZ2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1heC1oZWlnaHQ6IDQ0cHg7XG59XG4uY2hpcCBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLmNoaXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmEuY2hpcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmEuY2hpcDpob3ZlcixcbmEuY2hpcDp2aXNpdGVkLFxuYS5jaGlwOmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYS5jaGlwLmxhcmdlOnZpc2l0ZWQsXG5hLmNoaXAubGFyZ2U6aG92ZXIsXG5hLmNoaXAubGFyZ2U6YWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBBbmltYXRpb24gVGV4dCAqL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4gKyBTYW5zOjYwMCk7XG5cbmJvZHkge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnRleHQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDUwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLnRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbjogMDtcbn1cblxuLndvcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMjBweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmxldHRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDI1cHgpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDI1cHg7XG59XG5cbi5sZXR0ZXIub3V0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xufVxuXG4ubGV0dGVyLmJlaGluZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xufVxuXG4ubGV0dGVyLmluIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zOHMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ud2lzdGVyaWEge1xuICBjb2xvcjogIzhlNDRhZDtcbn1cblxuLmJlbGl6ZSB7XG4gIGNvbG9yOiAjMjk4MGI5O1xufVxuXG4ucG9tZWdyYW5hdGUge1xuICBjb2xvcjogI2MwMzkyYjtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICMxNmEwODU7XG59XG5cbi5taWRuaWdodCB7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG5AaW1wb3J0IHVybChcbiAgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4gKyBTYW5zOjQwMCxcbiAgNTAwLFxuICAzMDAsXG4gIDcwMFxuKTtcblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG59XG5cbi5mb290ZXItZGlzdHJpYnV0ZWQge1xuICBiYWNrZ3JvdW5kOiAjNjY2O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udDogYm9sZCAxNnB4IHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDU1cHggNTBweDtcbn1cblxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQsXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4vKiBGb290ZXIgbGVmdCAqL1xuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdCB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi8qIFRoZSBjb21wYW55IGxvZ28gKi9cblxuLmZvb3Rlci1kaXN0cmlidXRlZCBoMyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250OiBub3JtYWwgMzZweCBcIk9wZW4gU2Fuc1wiLCBjdXJzaXZlO1xuICBtYXJnaW46IDA7XG59XG4uYW5hbWV7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gY29sb3I6ICMyOTgwYjk7XG59XG5cbi5mb290ZXItZGlzdHJpYnV0ZWQgaDMgc3BhbiB7XG4gIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xufVxuXG4vKiBGb290ZXIgbGlua3MgKi9cblxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMjBweCAwIDEycHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMS44O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1uYW1lIHtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBGb290ZXIgQ2VudGVyICovXG5cbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIge1xuICB3aWR0aDogMzUlO1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzODNiO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGkuZmEtZW52ZWxvcGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDA7XG59XG5cbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBhIHtcbiAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJ8XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgLmxpbmstMTpiZWZvcmUge1xuICBjb250ZW50OiBub25lO1xufVxuXG4vKiBGb290ZXIgUmlnaHQgKi9cblxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0IHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXQge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM5Mjk5OWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1hYm91dCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItaWNvbnMge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItaWNvbnMgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzODNiO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzVweDtcblxuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vKiBJZiB5b3UgZG9uJ3Qgd2FudCB0aGUgZm9vdGVyIHRvIGJlIHJlc3BvbnNpdmUsIHJlbW92ZSB0aGVzZSBtZWRpYSBxdWVyaWVzICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIHtcbiAgICBmb250OiBib2xkIDE0cHggc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4ucGxhY2Uge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGZvbnQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuLmJvZHktZGF0YSB7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIHdpZHRoOiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDllY2M7XG59XG4ucXVvdGUge1xuICB6LWluZGV4OiAwLjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJEcm9pZCBTYW5zXCI7XG59XG5cbi5mYntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9mYWNlYm9vay5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi50d2l0dGVye1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3R3aXR0ZXIucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uaW5zdGF7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW5zdGEucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/packages/packages.component.ts":
/*!************************************************!*\
  !*** ./src/app/packages/packages.component.ts ***!
  \************************************************/
/*! exports provided: PackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesComponent", function() { return PackagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PackagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PackagesComponent.ɵfac = function PackagesComponent_Factory(t) { return new (t || PackagesComponent)(); };
PackagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackagesComponent, selectors: [["app-packages"]], decls: 34, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no"], [1, "page-content"], [1, "card"], [1, "content"], [1, "title"], [1, "copy"], [1, "btn"]], template: function PackagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Kayak in the river");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enjoy these for 3 hours @1299 Rs only.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kayak for a couple x 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Beers x 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fishing Rod x1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Book Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Coming soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Coming soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Coming soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap\");\n[_ngcontent-%COMP%]:root {\n  --d: 700ms;\n  --e: cubic-bezier(0.19, 1, 0.22, 1);\n  --font-sans: 'Rubik', sans-serif;\n  --font-serif: 'Cardo', serif;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  background-color:#149ECC;\n  display: grid;\n  place-items: center;\n  height: 100vh;\n}\n.page-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 1rem;\n     margin-top:10vh;\n  padding: 1rem;\n  max-width: 1024px;\n  margin: 0 auto;\n  font-family: var(--font-sans);\n}\n@media (min-width: 200px ) and (max-width: 700px) {\n  .page-content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr);\n    display: grid;\n    grid-gap: 1rem;\n       margin-top:10vh;\n    padding: 1rem;\n    max-width: 1024px;\n    margin: 10vh auto;\n    font-family: var(--font-sans);\n  }\n  body[_ngcontent-%COMP%]{\n    height: 100%;\n  }\n}\n@media (min-width: 600px) {\n  .page-content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 800px) {\n  .page-content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  padding: 1rem;\n  width: 100%;\n  text-align: center;\n  color: whitesmoke;\n  background-color: whitesmoke;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);\n}\n@media (min-width: 600px) {\n  .card[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n@media (min-width: 400px) {\n  .card[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n.card[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 110%;\n  background-size: cover;\n  background-position: 0 0;\n  transition: transform calc(var(--d) * 1.5) var(--e);\n  pointer-events: none;\n}\n.card[_ngcontent-%COMP%]:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 200%;\n  pointer-events: none;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.32) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.54) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.79) 100%);\n  transform: translateY(-50%);\n  transition: transform calc(var(--d) * 2) var(--e);\n}\n.card[_ngcontent-%COMP%]:nth-child(1):before {\n  background-image: url('kayak.jpg');\n}\n.card[_ngcontent-%COMP%]:nth-child(2):before {\n  background-image: url(https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);\n}\n.card[_ngcontent-%COMP%]:nth-child(3):before {\n  background-image: url(https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);\n}\n.card[_ngcontent-%COMP%]:nth-child(4):before {\n  background-image: url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);\n}\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 1rem;\n  transition: transform var(--d) var(--e);\n  z-index: 1;\n}\n.content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n \n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: bold;\n  line-height: 1.2;\n\n}\n.copy[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 1.125rem;\n  font-style: italic;\n  line-height: 1.35;\n}\n.btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 1.5rem;\n  padding: 0.75rem 1.2rem;\n  font-size: 0.65rem;\n  font-weight: bold;\n  letter-spacing: 0.025rem;\n  text-transform: uppercase;\n  color: black;\n  border-width: 4px;\n  background-color: white;\n  border: none;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #0d0d0d;\n  color: white;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 1px dashed yellow;\n  outline-offset: 3px;\n}\n@media (hover: hover) and (min-width: 600px) {\n  .card[_ngcontent-%COMP%]:after {\n    transform: translateY(0);\n  }\n\n  .content[_ngcontent-%COMP%] {\n    transform: translateY(calc(100% - 4.5rem));\n  }\n  .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.title) {\n    opacity: 0;\n    transform: translateY(1rem);\n    transition: transform var(--d) var(--e), opacity var(--d) var(--e);\n  }\n\n  .card[_ngcontent-%COMP%]:hover, .card[_ngcontent-%COMP%]:focus-within {\n    align-items: center;\n  }\n  .card[_ngcontent-%COMP%]:hover:before, .card[_ngcontent-%COMP%]:focus-within:before {\n    transform: translateY(-4%);\n  }\n  .card[_ngcontent-%COMP%]:hover:after, .card[_ngcontent-%COMP%]:focus-within:after {\n    transform: translateY(-50%);\n  }\n  .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:focus-within   .content[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n  .card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.title), .card[_ngcontent-%COMP%]:focus-within   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.title) {\n    opacity: 1;\n    transform: translateY(0);\n    transition-delay: calc(var(--d) / 8);\n  }\n\n  .card[_ngcontent-%COMP%]:focus-within:before, .card[_ngcontent-%COMP%]:focus-within:after, .card[_ngcontent-%COMP%]:focus-within   .content[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:focus-within   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.title) {\n    transition-duration: 0s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFja2FnZXMvcGFja2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFDNUY7RUFDRSxVQUFVO0VBQ1YsbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQyw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0tBQ1gsZUFBZTtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixjQUFjO09BQ1gsZUFBZTtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztBQUNGO0FBQ0E7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztBQUNGO0FBRUE7RUFDRSxrQkFBa0I7RUFFbEIsYUFBYTtFQUVMLHFCQUFxQjtFQUM3QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrS0FBa0s7QUFDcEs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFHeEIsbURBQW1EO0VBRW5ELG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUVwQixpZUFBaWU7RUFFemQsMkJBQTJCO0VBR25DLGlEQUFpRDtBQUVuRDtBQUdBO0VBQ0Usa0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxpTEFBaUw7QUFDbkw7QUFDQTtFQUNFLDhLQUE4SztBQUNoTDtBQUNBO0VBQ0UsaUxBQWlMO0FBQ25MO0FBRUE7RUFDRSxrQkFBa0I7RUFFbEIsYUFBYTtFQUdMLHNCQUFzQjtFQUV0QixtQkFBbUI7RUFDM0IsV0FBVztFQUNYLGFBQWE7RUFHYix1Q0FBdUM7RUFFdkMsVUFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCOztBQUVsQjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRTtJQUVVLHdCQUF3QjtFQUNsQzs7RUFFQTtJQUVVLDBDQUEwQztFQUNwRDtFQUNBO0lBQ0UsVUFBVTtJQUVGLDJCQUEyQjtJQUduQyxrRUFBa0U7RUFFcEU7O0VBRUE7O0lBR1UsbUJBQW1CO0VBQzdCO0VBQ0E7O0lBR1UsMEJBQTBCO0VBQ3BDO0VBQ0E7O0lBR1UsMkJBQTJCO0VBQ3JDO0VBQ0E7O0lBR1Usd0JBQXdCO0VBQ2xDO0VBQ0E7O0lBRUUsVUFBVTtJQUVGLHdCQUF3QjtJQUV4QixvQ0FBb0M7RUFDOUM7O0VBRUE7OztJQUlVLHVCQUF1QjtFQUNqQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFja2FnZXMvcGFja2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhcmRvOjQwMGl8UnViaWs6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46cm9vdCB7XG4gIC0tZDogNzAwbXM7XG4gIC0tZTogY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xuICAtLWZvbnQtc2FuczogJ1J1YmlrJywgc2Fucy1zZXJpZjtcbiAgLS1mb250LXNlcmlmOiAnQ2FyZG8nLCBzZXJpZjtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMxNDlFQ0M7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5wYWdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMXJlbTtcbiAgICAgbWFyZ2luLXRvcDoxMHZoO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjAwcHggKSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAxcmVtO1xuICAgICAgIG1hcmdpbi10b3A6MTB2aDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgIG1hcmdpbjogMTB2aCBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICB9XG4gIGJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIH1cbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIC5jYXJkIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICB9XG59XG4uY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBjYWxjKHZhcigtLWQpICogMS41KSB2YXIoLS1lKTtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gY2FsYyh2YXIoLS1kKSAqIDEuNSkgdmFyKC0tZSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBjYWxjKHZhcigtLWQpICogMS41KSB2YXIoLS1lKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGNhbGModmFyKC0tZCkgKiAxLjUpIHZhcigtLWUpLCAtd2Via2l0LXRyYW5zZm9ybSBjYWxjKHZhcigtLWQpICogMS41KSB2YXIoLS1lKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY2FyZDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMCwgMCwgMCwgMCkpLCBjb2xvci1zdG9wKDExLjclLCByZ2JhKDAsIDAsIDAsIDAuMDA5KSksIGNvbG9yLXN0b3AoMjIuMSUsIHJnYmEoMCwgMCwgMCwgMC4wMzQpKSwgY29sb3Itc3RvcCgzMS4yJSwgcmdiYSgwLCAwLCAwLCAwLjA3MikpLCBjb2xvci1zdG9wKDM5LjQlLCByZ2JhKDAsIDAsIDAsIDAuMTIzKSksIGNvbG9yLXN0b3AoNDYuNiUsIHJnYmEoMCwgMCwgMCwgMC4xODIpKSwgY29sb3Itc3RvcCg1My4xJSwgcmdiYSgwLCAwLCAwLCAwLjI0OSkpLCBjb2xvci1zdG9wKDU4LjklLCByZ2JhKDAsIDAsIDAsIDAuMzIpKSwgY29sb3Itc3RvcCg2NC4zJSwgcmdiYSgwLCAwLCAwLCAwLjM5NCkpLCBjb2xvci1zdG9wKDY5LjMlLCByZ2JhKDAsIDAsIDAsIDAuNDY4KSksIGNvbG9yLXN0b3AoNzQuMSUsIHJnYmEoMCwgMCwgMCwgMC41NCkpLCBjb2xvci1zdG9wKDc4LjglLCByZ2JhKDAsIDAsIDAsIDAuNjA3KSksIGNvbG9yLXN0b3AoODMuNiUsIHJnYmEoMCwgMCwgMCwgMC42NjgpKSwgY29sb3Itc3RvcCg4OC43JSwgcmdiYSgwLCAwLCAwLCAwLjcyMSkpLCBjb2xvci1zdG9wKDk0LjElLCByZ2JhKDAsIDAsIDAsIDAuNzYyKSksIHRvKHJnYmEoMCwgMCwgMCwgMC43OSkpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjAwOSkgMTEuNyUsIHJnYmEoMCwgMCwgMCwgMC4wMzQpIDIyLjElLCByZ2JhKDAsIDAsIDAsIDAuMDcyKSAzMS4yJSwgcmdiYSgwLCAwLCAwLCAwLjEyMykgMzkuNCUsIHJnYmEoMCwgMCwgMCwgMC4xODIpIDQ2LjYlLCByZ2JhKDAsIDAsIDAsIDAuMjQ5KSA1My4xJSwgcmdiYSgwLCAwLCAwLCAwLjMyKSA1OC45JSwgcmdiYSgwLCAwLCAwLCAwLjM5NCkgNjQuMyUsIHJnYmEoMCwgMCwgMCwgMC40NjgpIDY5LjMlLCByZ2JhKDAsIDAsIDAsIDAuNTQpIDc0LjElLCByZ2JhKDAsIDAsIDAsIDAuNjA3KSA3OC44JSwgcmdiYSgwLCAwLCAwLCAwLjY2OCkgODMuNiUsIHJnYmEoMCwgMCwgMCwgMC43MjEpIDg4LjclLCByZ2JhKDAsIDAsIDAsIDAuNzYyKSA5NC4xJSwgcmdiYSgwLCAwLCAwLCAwLjc5KSAxMDAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIGNhbGModmFyKC0tZCkgKiAyKSB2YXIoLS1lKTtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gY2FsYyh2YXIoLS1kKSAqIDIpIHZhcigtLWUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gY2FsYyh2YXIoLS1kKSAqIDIpIHZhcigtLWUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gY2FsYyh2YXIoLS1kKSAqIDIpIHZhcigtLWUpLCAtd2Via2l0LXRyYW5zZm9ybSBjYWxjKHZhcigtLWQpICogMikgdmFyKC0tZSk7XG59XG5cblxuLmNhcmQ6bnRoLWNoaWxkKDEpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2theWFrLmpwZycpO1xufVxuLmNhcmQ6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMzkwMzM0NTMwNi0xNWQxYzMwOTUyZGU/aXhsaWI9cmItMS4yLjEmcT04MCZmbT1qcGcmY3JvcD1lbnRyb3B5JmNzPXRpbnlzcmdiJnc9NDAwJmZpdD1tYXgmaXhpZD1leUpoY0hCZmFXUWlPakUwTlRnNWZRKTtcbn1cbi5jYXJkOm50aC1jaGlsZCgzKTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDUyNDM0MjQtMGNlNzQzMzIxZTExP2l4bGliPXJiLTEuMi4xJnE9ODAmZm09anBnJmNyb3A9ZW50cm9weSZjcz10aW55c3JnYiZ3PTQwMCZmaXQ9bWF4Jml4aWQ9ZXlKaGNIQmZhV1FpT2pFME5UZzVmUSk7XG59XG4uY2FyZDpudGgtY2hpbGQoNCk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMxMzA2NzI4MzcwLWUyZWJkOWQ3YmI5OT9peGxpYj1yYi0xLjIuMSZxPTgwJmZtPWpwZyZjcm9wPWVudHJvcHkmY3M9dGlueXNyZ2Imdz00MDAmZml0PW1heCZpeGlkPWV5SmhjSEJmYVdRaU9qRTBOVGc1ZlEpO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gdmFyKC0tZCkgdmFyKC0tZSk7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIHZhcigtLWQpIHZhcigtLWUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tZCkgdmFyKC0tZSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1kKSB2YXIoLS1lKSwgLXdlYmtpdC10cmFuc2Zvcm0gdmFyKC0tZCkgdmFyKC0tZSk7XG4gIHotaW5kZXg6IDE7XG59XG4uY29udGVudCA+ICogKyAqIHtcbiBcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4yO1xuXG59XG5cbi5jb3B5IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2VyaWYpO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xufVxuXG4uYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4ycmVtO1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZDBkO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IGRhc2hlZCB5ZWxsb3c7XG4gIG91dGxpbmUtb2Zmc2V0OiAzcHg7XG59XG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmNhcmQ6YWZ0ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoMTAwJSAtIDQuNXJlbSkpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoMTAwJSAtIDQuNXJlbSkpO1xuICB9XG4gIC5jb250ZW50ID4gKjpub3QoLnRpdGxlKSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcmVtKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcmVtKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0tZCkgdmFyKC0tZSksIC13ZWJraXQtdHJhbnNmb3JtIHZhcigtLWQpIHZhcigtLWUpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0tZCkgdmFyKC0tZSksIC13ZWJraXQtdHJhbnNmb3JtIHZhcigtLWQpIHZhcigtLWUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1kKSB2YXIoLS1lKSwgb3BhY2l0eSB2YXIoLS1kKSB2YXIoLS1lKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tZCkgdmFyKC0tZSksIG9wYWNpdHkgdmFyKC0tZCkgdmFyKC0tZSksIC13ZWJraXQtdHJhbnNmb3JtIHZhcigtLWQpIHZhcigtLWUpO1xuICB9XG5cbiAgLmNhcmQ6aG92ZXIsXG4gIC5jYXJkOmZvY3VzLXdpdGhpbiB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNhcmQ6aG92ZXI6YmVmb3JlLFxuICAuY2FyZDpmb2N1cy13aXRoaW46YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00JSk7XG4gIH1cbiAgLmNhcmQ6aG92ZXI6YWZ0ZXIsXG4gIC5jYXJkOmZvY3VzLXdpdGhpbjphZnRlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgLmNhcmQ6aG92ZXIgLmNvbnRlbnQsXG4gIC5jYXJkOmZvY3VzLXdpdGhpbiAuY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgLmNhcmQ6aG92ZXIgLmNvbnRlbnQgPiAqOm5vdCgudGl0bGUpLFxuICAuY2FyZDpmb2N1cy13aXRoaW4gLmNvbnRlbnQgPiAqOm5vdCgudGl0bGUpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogY2FsYyh2YXIoLS1kKSAvIDgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogY2FsYyh2YXIoLS1kKSAvIDgpO1xuICB9XG5cbiAgLmNhcmQ6Zm9jdXMtd2l0aGluOmJlZm9yZSwgLmNhcmQ6Zm9jdXMtd2l0aGluOmFmdGVyLFxuICAuY2FyZDpmb2N1cy13aXRoaW4gLmNvbnRlbnQsXG4gIC5jYXJkOmZvY3VzLXdpdGhpbiAuY29udGVudCA+ICo6bm90KC50aXRsZSkge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-packages',
                templateUrl: './packages.component.html',
                styleUrls: ['./packages.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/karthik.veenam/SoleMolecule - Frontend/SoleMolecule/SoleMolecule/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map