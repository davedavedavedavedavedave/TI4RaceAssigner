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




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");











function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const settings_r2 = ctx.ngIf; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.generateURL(settings_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Save as TinyURL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TinyURL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_input_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); return $event.target.select(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.tinyURL);
} }
function AppComponent_div_9_app_player_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-player", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("playerChange", function AppComponent_div_9_app_player_1_Template_app_player_playerChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.settingsService.changePlayer($event, i_r9); })("remove", function AppComponent_div_9_app_player_1_Template_app_player_remove_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.settingsService.removePlayer(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r8 = ctx.$implicit;
    const settings_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r8)("availableRaces", settings_r6.availableRaces);
} }
function AppComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_9_app_player_1_Template, 1, 2, "app-player", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.settingsService.addPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const settings_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", settings_r6.players);
} }
class AppComponent {
    constructor(dialog, settingsService) {
        this.dialog = dialog;
        this.settingsService = settingsService;
        this.title = 'TI4-race-assigner';
        this.tinyURL = '';
        this.settings$ = settingsService.getSettings();
    }
    openSettings() {
        this.dialog.open(_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"]);
    }
    generateURL(settings) {
        let url = location.protocol + '//' + location.hostname + ':' + location.port + location.pathname + '#' + encodeURIComponent(JSON.stringify(settings));
        this.tinyURL = '';
        let alias = 'TI4Races-' + Math.random().toString().substr(2);
        fetch('https://tinyurl.com/create.php?source=create&url=' + encodeURIComponent(url) + '&alias=' + alias, { mode: 'no-cors' }).then(a => {
            this.tinyURL = 'https://tinyurl.com/' + alias;
        }, b => {
            this.tinyURL = 'Error while trying to create URL';
            console.error(b);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 6, consts: [["mat-mini-fab", "", "aria-roledescription", "Open Settings Menu", 1, "settingsBtn", 3, "click"], ["class", "tinyurl", 4, "ngIf"], ["class", "players", 4, "ngIf"], [1, "tinyurl"], ["mat-raised-button", "", 3, "click"], ["color", "accent"], ["matInput", "", 3, "value", "click"], [1, "players"], [3, "player", "availableRaces", "playerChange", "remove", 4, "ngFor", "ngForOf"], [1, "addPlayer"], ["mat-mini-fab", "", "aria-roledescription", "Add a new player", 3, "click"], [3, "player", "availableRaces", "playerChange", "remove"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Twilight Imperium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Race Assigner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.openSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 9, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_9_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.settings$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.settings$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _player_player_component__WEBPACK_IMPORTED_MODULE_9__["PlayerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["h1[_ngcontent-%COMP%] {\n  padding: 16px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: transparent;\n  display: inline-block;\n  overflow: hidden;\n  background-image: url('title.png');\n  background-size: contain;\n  background-position: left center;\n  background-repeat: no-repeat;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.settingsBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 24px;\n}\n.tinyurl[_ngcontent-%COMP%] {\n  margin: 16px 32px;\n}\n.tinyurl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.players[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.addPlayer[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 33px 17px;\n  line-height: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXDAxX0RhdGFcXFRJNFJhY2VBc3NpZ25lci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQ0Y7QURDQTtFQUNFLGlCQUFBO0FDRUY7QURERTtFQUNFLGtCQUFBO0FDR0o7QURBQTtFQUNFLGFBQUE7QUNHRjtBRERBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvdGl0bGUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuLnNldHRpbmdzQnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgdG9wOiAyNHB4O1xyXG59XHJcbi50aW55dXJsIHtcclxuICBtYXJnaW46IDE2cHggMzJweDtcclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG4ucGxheWVycyB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG4uYWRkUGxheWVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAzM3B4IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbn1cclxuIiwiaDEge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuaDEgc3BhbiB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvdGl0bGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2V0dGluZ3NCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDI0cHg7XG59XG5cbi50aW55dXJsIHtcbiAgbWFyZ2luOiAxNnB4IDMycHg7XG59XG4udGlueXVybCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5wbGF5ZXJzIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmFkZFBsYXllciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAzM3B4IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _race_race_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./race/race.component */ "./src/app/race/race.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
        _race_race_component__WEBPACK_IMPORTED_MODULE_14__["RaceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
                    _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
                    _race_race_component__WEBPACK_IMPORTED_MODULE_14__["RaceComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/player.ts":
/*!***************************!*\
  !*** ./src/app/player.ts ***!
  \***************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(name = '', availableRaces = [], bannedRaces = []) {
        this.name = name;
        this.availableRaces = availableRaces;
        this.bannedRaces = bannedRaces;
    }
}


/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _race_race_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../race/race.component */ "./src/app/race/race.component.ts");










function PlayerComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const race_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", race_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](race_r2.name);
} }
function PlayerComponent_app_race_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-race", 8);
} if (rf & 2) {
    const race_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("race", race_r3);
} }
class PlayerComponent {
    constructor() {
        this.playerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    changeName(newName) {
        this.player.name = newName;
        this.playerChange.emit(this.player);
    }
    removePlayer() {
        this.remove.emit();
    }
    changeBannedRaces(bannedRaces) {
        this.player.bannedRaces = bannedRaces;
        this.playerChange.emit(this.player);
    }
    bannedCompareFn(a, b) {
        return a.id == b.id;
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], inputs: { player: "player", availableRaces: "availableRaces" }, outputs: { playerChange: "playerChange", remove: "remove" }, decls: 17, vars: 5, consts: [[1, "container"], ["matInput", "", 3, "value", "change"], ["mat-mini-fab", "", "aria-roledescription", "Remove player", 3, "click"], ["appearance", "fill"], ["multiple", "", 3, "value", "compareWith", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "race", 4, "ngFor", "ngForOf"], [3, "value"], [3, "race"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Player Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlayerComponent_Template_input_change_4_listener($event) { return ctx.changeName($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_button_click_5_listener() { return ctx.removePlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Banned Races");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function PlayerComponent_Template_mat_select_selectionChange_12_listener($event) { return ctx.changeBannedRaces($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerComponent_mat_option_13_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Available Races");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PlayerComponent_app_race_16_Template, 1, 1, "app-race", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.player.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.player.bannedRaces)("compareWith", ctx.bannedCompareFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableRaces);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.player.availableRaces);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _race_race_component__WEBPACK_IMPORTED_MODULE_8__["RaceComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 16px;\n  margin: 16px;\n  display: inline-block;\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL0M6XFwwMV9EYXRhXFxUSTRSYWNlQXNzaWduZXIvc3JjXFxhcHBcXHBsYXllclxccGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW46IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player',
                templateUrl: './player.component.html',
                styleUrls: ['./player.component.scss']
            }]
    }], function () { return []; }, { player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], availableRaces: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/race.ts":
/*!*************************!*\
  !*** ./src/app/race.ts ***!
  \*************************/
/*! exports provided: Race */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Race", function() { return Race; });
class Race {
    constructor(id, name = '', iconUrl = '') {
        this.id = id;
        this.name = name;
        this.iconUrl = iconUrl;
    }
}


/***/ }),

/***/ "./src/app/race/race.component.ts":
/*!****************************************!*\
  !*** ./src/app/race/race.component.ts ***!
  \****************************************/
/*! exports provided: RaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceComponent", function() { return RaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RaceComponent {
    constructor() { }
    ngOnInit() {
    }
}
RaceComponent.ɵfac = function RaceComponent_Factory(t) { return new (t || RaceComponent)(); };
RaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RaceComponent, selectors: [["app-race"]], inputs: { race: "race" }, decls: 2, vars: 1, template: function RaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.race.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhY2UvcmFjZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-race',
                templateUrl: './race.component.html',
                styleUrls: ['./race.component.scss']
            }]
    }], function () { return []; }, { race: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/settings.service.ts":
/*!*************************************!*\
  !*** ./src/app/settings.service.ts ***!
  \*************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/app/settings.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _race__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./race */ "./src/app/race.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/app/player.ts");






const RACES = ["The Arborec", "The Barony of Letnev", "The Clan of Saar", "The Embers of Muaat", "The Emirates of Hacan", "The Federation of Sol", "The Ghosts of Creuss", "The L1Z1X Mindnet", "The Mentak Coalition", "The Naalu Collective", "The Nekro Virus", "The Sardakk N’orr", "The Universities of Jol-Nar", "The Winnu", "The Xxcha Kingdom", "The Yin Brotherhood", "The Yssaril Tribes"].map((name, idx) => new _race__WEBPACK_IMPORTED_MODULE_3__["Race"](idx, name));
class SettingsService {
    constructor() {
        let settings;
        try {
            settings = _settings__WEBPACK_IMPORTED_MODULE_1__["Settings"].buildFromObject(JSON.parse(decodeURIComponent(location.hash.substr(1))));
        }
        catch (e) {
            settings = new _settings__WEBPACK_IMPORTED_MODULE_1__["Settings"]();
        }
        if (settings.availableRaces.length + settings.bannedRaces.length == 0) { // if no races, initialize availableRaces array
            settings.availableRaces = RACES.slice();
        }
        settings.assignRaces();
        this._settings$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](settings);
        //this._settings$.pipe(debounceTime(300)).subscribe(settings => location.hash = JSON.stringify(settings));
    }
    getSettings() {
        return this._settings$;
    }
    setSettings(newSettings) {
        newSettings.assignRaces();
        this._settings$.next(newSettings);
    }
    setSeed(seed = null) {
        let settings = this._settings$.getValue();
        if (seed != null) {
            settings.seed = seed;
        }
        else {
            settings.seed = Math.random().toString();
        }
        this.setSettings(settings);
    }
    setRacesPerPlayer(racesPerPlayer) {
        let settings = this._settings$.getValue();
        settings.racesPerPlayer = racesPerPlayer;
        this.setSettings(settings);
    }
    addPlayer(player = null) {
        let settings = this._settings$.getValue();
        if (player != null) {
            settings.players.push(player);
        }
        else {
            settings.players.push(new _player__WEBPACK_IMPORTED_MODULE_4__["Player"]());
        }
        this.setSettings(settings);
    }
    removePlayer(index) {
        let settings = this._settings$.getValue();
        settings.players.splice(index, 1);
        this.setSettings(settings);
    }
    changePlayer(newPlayer, index) {
        let settings = this._settings$.getValue();
        settings.players[index] = newPlayer;
        this.setSettings(settings);
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/settings.ts":
/*!*****************************!*\
  !*** ./src/app/settings.ts ***!
  \*****************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_0__);

class Settings {
    constructor(availableRaces = [], bannedRaces = [], players = [], racesPerPlayer = 2, seed = '') {
        this.availableRaces = availableRaces;
        this.bannedRaces = bannedRaces;
        this.players = players;
        this.racesPerPlayer = racesPerPlayer;
        this.seed = seed;
    }
    static buildFromObject(object) {
        let s = new Settings();
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key) && ['AVAILABLERACES', 'BANNEDRACES', 'SEED', 'PLAYERS', 'RACESPERPLAYER'].indexOf(key.toUpperCase()) > -1) {
                s[key] = object[key];
            }
        }
        return s;
    }
    assignRaces() {
        let rng = seedrandom__WEBPACK_IMPORTED_MODULE_0__(this.seed);
        let races = this.availableRaces
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(r => { return { x: rng(), r: r }; })
            .sort((a, b) => a.x - b.x)
            .map(x => x.r);
        for (let i = 0; i < this.racesPerPlayer; i++) {
            for (let j = 0; j < this.players.length; j++) {
                if (races.length === 0) {
                    return;
                }
                if (i == 0) {
                    this.players[j].availableRaces = [];
                }
                for (let k = 0; k < races.length; k++) {
                    if (this.players[j].bannedRaces.findIndex(r => r.id == races[k].id) < 0) {
                        this.players[j].availableRaces.push(races.splice(k, 1)[0]);
                        break;
                    }
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _race_race_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../race/race.component */ "./src/app/race/race.component.ts");












function SettingsComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-race", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const race_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("race", race_r6);
} }
function SettingsComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-race", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const race_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("race", race_r7);
} }
const _c0 = function (a0) { return [a0]; };
function SettingsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Random Seed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_div_0_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.settingsService.setSeed($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.settingsService.setSeed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Races per player");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_div_0_Template_input_change_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.settingsService.setRacesPerPlayer($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Available Races");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SettingsComponent_div_0_Template_div_cdkDropListDropped_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const settings_r1 = ctx.ngIf; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.drop($event, settings_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SettingsComponent_div_0_div_19_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Banned Races");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SettingsComponent_div_0_Template_div_cdkDropListDropped_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const settings_r1 = ctx.ngIf; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.drop($event, settings_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SettingsComponent_div_0_div_25_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const settings_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", settings_r1.seed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", settings_r1.racesPerPlayer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", settings_r1.availableRaces)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, _r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", settings_r1.availableRaces);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", settings_r1.bannedRaces)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, _r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", settings_r1.bannedRaces);
} }
class SettingsComponent {
    constructor(dialogRef, settingsService) {
        this.dialogRef = dialogRef;
        this.settingsService = settingsService;
        this.settings$ = settingsService.getSettings();
    }
    ngOnInit() {
    }
    drop(event, settings) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.settingsService.setSettings(settings);
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 2, vars: 3, consts: [["class", "settings", 4, "ngIf"], [1, "settings"], [1, "seed"], ["matInput", "", 3, "value", "change"], ["mat-mini-fab", "", "aria-roledescription", "Generate new seed", 3, "click"], [1, "racesPerPlayer"], [1, "availableRaces"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["availableRaces", "cdkDropList"], ["class", "race", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "bannedRaces"], ["bannedRaces", "cdkDropList"], ["cdkDrag", "", 1, "race"], [3, "race"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SettingsComponent_div_0_Template, 26, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.settings$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _race_race_component__WEBPACK_IMPORTED_MODULE_9__["RaceComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".settings[_ngcontent-%COMP%] {\n  height: calc(100vh - 256px);\n  max-width: 80vw;\n  min-width: 632px;\n}\n.settings[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.seed[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.seed[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: calc(100% - 64px);\n  margin-right: 16px;\n}\n.bannedRaces[_ngcontent-%COMP%], .availableRaces[_ngcontent-%COMP%] {\n  float: left;\n  width: calc(50% - 16px);\n  height: 100%;\n}\n.availableRaces[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.settings[_ngcontent-%COMP%]   .cdk-drop-list[_ngcontent-%COMP%] {\n  border: solid 1px #bbb;\n  min-height: 60px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  width: 100%;\n  height: calc(100% - 64px);\n  overflow: auto;\n  box-sizing: border-box;\n}\n.race[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #bbb;\n  color: rgba(0, 0, 0, 0.87);\n  box-sizing: border-box;\n  cursor: move;\n  background: #ddd;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.race[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.settings[_ngcontent-%COMP%]   .cdk-drop-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .race[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvQzpcXDAxX0RhdGFcXFRJNFJhY2VBc3NpZ25lci9zcmNcXGFwcFxcc2V0dGluZ3NcXHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQ0E7RUFDRSxXQUFBO0FDRUY7QURBRTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRENBOztFQUVFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNFRjtBREFBO0VBQ0Usa0JBQUE7QUNHRjtBRERBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNJRjtBRERBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSUY7QURGQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQ0tGO0FEQUE7RUFDRSxVQUFBO0FDR0Y7QURBQTtFQUNFLHNEQUFBO0FDR0Y7QURBQTtFQUNFLFlBQUE7QUNHRjtBREFBO0VBQ0Usc0RBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTZweCk7XHJcbiAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gIG1pbi13aWR0aDogNjMycHg7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG59XHJcbi5zZWVkIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG4uYmFubmVkUmFjZXMsXHJcbi5hdmFpbGFibGVSYWNlcyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTZweCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5hdmFpbGFibGVSYWNlcyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG59XHJcbi5zZXR0aW5ncyAuY2RrLWRyb3AtbGlzdCB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JiYjtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5yYWNlIHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiYmI7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4ucmFjZTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXR0aW5ncyAuY2RrLWRyb3AtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5yYWNlOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuIiwiLnNldHRpbmdzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjU2cHgpO1xuICBtYXgtd2lkdGg6IDgwdnc7XG4gIG1pbi13aWR0aDogNjMycHg7XG59XG4uc2V0dGluZ3M6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uc2VlZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlZWQgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjRweCk7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmJhbm5lZFJhY2VzLFxuLmF2YWlsYWJsZVJhY2VzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDE2cHgpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hdmFpbGFibGVSYWNlcyB7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cblxuLnNldHRpbmdzIC5jZGstZHJvcC1saXN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JiYjtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJhY2Uge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYmJiO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5yYWNlOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zZXR0aW5ncyAuY2RrLWRyb3AtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5yYWNlOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! C:\01_Data\TI4RaceAssigner\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map