webpackJsonp([2,4],{

/***/ 571:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 571;


/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(681);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/nicu/work/snippets/src/main.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(af) {
        var _this = this;
        this.af = af;
        this.loggedIn = false;
        this.showAccount = false;
        this.userDisplayName = "";
        this.userPhotoURL = "";
        this.uid = null;
        af.auth.subscribe(function (auth) {
            if (!auth) {
                _this.loggedIn = false;
                _this.showAccount = true;
                return;
            }
            _this.loggedIn = true;
            _this.userDisplayName = auth.auth.displayName;
            _this.userPhotoURL = auth.auth.photoURL;
            _this.showAccount = true;
            _this.uid = auth.uid;
            _this.items = af.database.list('/users/' + _this.uid);
        });
    }
    AppComponent.prototype.login = function () {
        this.af.auth.login();
    };
    AppComponent.prototype.logout = function () {
        this.af.auth.logout();
    };
    AppComponent.prototype.newSnippet = function () {
        this.items.push({ name: "test", description: "alalalala" });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(874),
            styles: [__webpack_require__(873)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/nicu/work/snippets/src/app.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_buttons__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(680);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var firebaseConfig = {
    apiKey: "AIzaSyA8I7irjtAshOVqMPlqd66UZ-DRp7UKGeM",
    authDomain: "snippets-ddd8d.firebaseapp.com",
    databaseURL: "https://snippets-ddd8d.firebaseio.com",
    storageBucket: "snippets-ddd8d.appspot.com",
    messagingSenderId: "538785453132"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["b" /* AuthMethods */].Redirect
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, firebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/nicu/work/snippets/src/app.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/nicu/work/snippets/src/environment.js.map

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 391,
	"./af.js": 391,
	"./ar": 397,
	"./ar-dz": 392,
	"./ar-dz.js": 392,
	"./ar-ly": 393,
	"./ar-ly.js": 393,
	"./ar-ma": 394,
	"./ar-ma.js": 394,
	"./ar-sa": 395,
	"./ar-sa.js": 395,
	"./ar-tn": 396,
	"./ar-tn.js": 396,
	"./ar.js": 397,
	"./az": 398,
	"./az.js": 398,
	"./be": 399,
	"./be.js": 399,
	"./bg": 400,
	"./bg.js": 400,
	"./bn": 401,
	"./bn.js": 401,
	"./bo": 402,
	"./bo.js": 402,
	"./br": 403,
	"./br.js": 403,
	"./bs": 404,
	"./bs.js": 404,
	"./ca": 405,
	"./ca.js": 405,
	"./cs": 406,
	"./cs.js": 406,
	"./cv": 407,
	"./cv.js": 407,
	"./cy": 408,
	"./cy.js": 408,
	"./da": 409,
	"./da.js": 409,
	"./de": 411,
	"./de-at": 410,
	"./de-at.js": 410,
	"./de.js": 411,
	"./dv": 412,
	"./dv.js": 412,
	"./el": 413,
	"./el.js": 413,
	"./en-au": 414,
	"./en-au.js": 414,
	"./en-ca": 415,
	"./en-ca.js": 415,
	"./en-gb": 416,
	"./en-gb.js": 416,
	"./en-ie": 417,
	"./en-ie.js": 417,
	"./en-nz": 418,
	"./en-nz.js": 418,
	"./eo": 419,
	"./eo.js": 419,
	"./es": 421,
	"./es-do": 420,
	"./es-do.js": 420,
	"./es.js": 421,
	"./et": 422,
	"./et.js": 422,
	"./eu": 423,
	"./eu.js": 423,
	"./fa": 424,
	"./fa.js": 424,
	"./fi": 425,
	"./fi.js": 425,
	"./fo": 426,
	"./fo.js": 426,
	"./fr": 429,
	"./fr-ca": 427,
	"./fr-ca.js": 427,
	"./fr-ch": 428,
	"./fr-ch.js": 428,
	"./fr.js": 429,
	"./fy": 430,
	"./fy.js": 430,
	"./gd": 431,
	"./gd.js": 431,
	"./gl": 432,
	"./gl.js": 432,
	"./he": 433,
	"./he.js": 433,
	"./hi": 434,
	"./hi.js": 434,
	"./hr": 435,
	"./hr.js": 435,
	"./hu": 436,
	"./hu.js": 436,
	"./hy-am": 437,
	"./hy-am.js": 437,
	"./id": 438,
	"./id.js": 438,
	"./is": 439,
	"./is.js": 439,
	"./it": 440,
	"./it.js": 440,
	"./ja": 441,
	"./ja.js": 441,
	"./jv": 442,
	"./jv.js": 442,
	"./ka": 443,
	"./ka.js": 443,
	"./kk": 444,
	"./kk.js": 444,
	"./km": 445,
	"./km.js": 445,
	"./ko": 446,
	"./ko.js": 446,
	"./ky": 447,
	"./ky.js": 447,
	"./lb": 448,
	"./lb.js": 448,
	"./lo": 449,
	"./lo.js": 449,
	"./lt": 450,
	"./lt.js": 450,
	"./lv": 451,
	"./lv.js": 451,
	"./me": 452,
	"./me.js": 452,
	"./mi": 453,
	"./mi.js": 453,
	"./mk": 454,
	"./mk.js": 454,
	"./ml": 455,
	"./ml.js": 455,
	"./mr": 456,
	"./mr.js": 456,
	"./ms": 458,
	"./ms-my": 457,
	"./ms-my.js": 457,
	"./ms.js": 458,
	"./my": 459,
	"./my.js": 459,
	"./nb": 460,
	"./nb.js": 460,
	"./ne": 461,
	"./ne.js": 461,
	"./nl": 463,
	"./nl-be": 462,
	"./nl-be.js": 462,
	"./nl.js": 463,
	"./nn": 464,
	"./nn.js": 464,
	"./pa-in": 465,
	"./pa-in.js": 465,
	"./pl": 466,
	"./pl.js": 466,
	"./pt": 468,
	"./pt-br": 467,
	"./pt-br.js": 467,
	"./pt.js": 468,
	"./ro": 469,
	"./ro.js": 469,
	"./ru": 470,
	"./ru.js": 470,
	"./se": 471,
	"./se.js": 471,
	"./si": 472,
	"./si.js": 472,
	"./sk": 473,
	"./sk.js": 473,
	"./sl": 474,
	"./sl.js": 474,
	"./sq": 475,
	"./sq.js": 475,
	"./sr": 477,
	"./sr-cyrl": 476,
	"./sr-cyrl.js": 476,
	"./sr.js": 477,
	"./ss": 478,
	"./ss.js": 478,
	"./sv": 479,
	"./sv.js": 479,
	"./sw": 480,
	"./sw.js": 480,
	"./ta": 481,
	"./ta.js": 481,
	"./te": 482,
	"./te.js": 482,
	"./tet": 483,
	"./tet.js": 483,
	"./th": 484,
	"./th.js": 484,
	"./tl-ph": 485,
	"./tl-ph.js": 485,
	"./tlh": 486,
	"./tlh.js": 486,
	"./tr": 487,
	"./tr.js": 487,
	"./tzl": 488,
	"./tzl.js": 488,
	"./tzm": 490,
	"./tzm-latn": 489,
	"./tzm-latn.js": 489,
	"./tzm.js": 490,
	"./uk": 491,
	"./uk.js": 491,
	"./uz": 492,
	"./uz.js": 492,
	"./vi": 493,
	"./vi.js": 493,
	"./x-pseudo": 494,
	"./x-pseudo.js": 494,
	"./yo": 495,
	"./yo.js": 495,
	"./zh-cn": 496,
	"./zh-cn.js": 496,
	"./zh-hk": 497,
	"./zh-hk.js": 497,
	"./zh-tw": 498,
	"./zh-tw.js": 498
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 849;


/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = ".userPhoto {\n    height: 18px;\n    width: 18px;\n}\n.navbar.navbar-no-margin {\n    margin-bottom: 0px;\n}"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top navbar-no-margin\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Snippets</a>\n    </div>    \n    <ul *ngIf=\"showAccount\" class=\"nav navbar-nav navbar-right\">\n      <li *ngIf=\"!loggedIn\" (click)=\"login()\" ><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Sign in</a></li>\n      <li *ngIf=\"loggedIn\" (click)=\"logout()\" ><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Sign out</a></li>\n    </ul>\n    <p *ngIf=\"loggedIn\" class=\"navbar-text navbar-right\"><img [src]=\"userPhotoURL\" class=\"userPhoto\"> {{userDisplayName}}</p>\n  </div>\n</nav>\n\n<div *ngIf=\"showAccount && !loggedIn\" class=\"jumbotron\">\n  <div class=\"container\">\n    <h1>Hello</h1>\n    <p>To continue please sign in using your Google account</p>\n    <p><button (click)=\"login()\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\"><span class=\"glyphicon glyphicon-log-in\"></span> Click here to sign in</button></p>\n  </div>\n</div>\n\n<ul *ngIf=\"loggedIn\">\n  <li class=\"text\" *ngFor=\"let item of items | async\">\n    {{item.name}}\n  </li>\n</ul>\n\n<button (click)=\"newSnippet()\" class=\"btn btn-primary\" href=\"#\" role=\"button\"><span class=\"glyphicon glyphicon-plus\"></span> New</button>"

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(572);


/***/ })

},[909]);
//# sourceMappingURL=main.bundle.map