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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _question_page_question_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question-page/question-page.component */ "./src/app/question-page/question-page.component.ts");
/* harmony import */ var _breed_question_page_breed_question_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breed-question-page/breed-question-page.component */ "./src/app/breed-question-page/breed-question-page.component.ts");
/* harmony import */ var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-page/edit-page.component */ "./src/app/edit-page/edit-page.component.ts");







var routes = [
    { path: '', pathMatch: 'full', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'cats/new', component: _question_page_question_page_component__WEBPACK_IMPORTED_MODULE_4__["QuestionPageComponent"] },
    { path: 'cats/:id', component: _breed_question_page_breed_question_page_component__WEBPACK_IMPORTED_MODULE_5__["BreedQuestionPageComponent"] },
    { path: 'cats/:id/edit', component: _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_6__["EditPageComponent"] },
    { path: 'cats/:id/postpet', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'cats/:id/update', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'cats/:id/delete', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _httpService, _router) {
        this._route = _route;
        this._httpService = _httpService;
        this._router = _router;
        this.questions = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // this._router.navigate(['/']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-page/edit-page.component */ "./src/app/edit-page/edit-page.component.ts");
/* harmony import */ var _question_page_question_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-page/question-page.component */ "./src/app/question-page/question-page.component.ts");
/* harmony import */ var _breed_question_page_breed_question_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./breed-question-page/breed-question-page.component */ "./src/app/breed-question-page/breed-question-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_6__["EditPageComponent"],
                _breed_question_page_breed_question_page_component__WEBPACK_IMPORTED_MODULE_8__["BreedQuestionPageComponent"],
                _question_page_question_page_component__WEBPACK_IMPORTED_MODULE_7__["QuestionPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/breed-question-page/breed-question-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/breed-question-page/breed-question-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWVkLXF1ZXN0aW9uLXBhZ2UvYnJlZWQtcXVlc3Rpb24tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/breed-question-page/breed-question-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/breed-question-page/breed-question-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n    <head>\n        <meta charset=\"utf-8\">\n        <title>Cat Q</title>\n        <base href=\"/\">\n      \n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <!-- Latest compiled and minified CSS -->\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\"\n          crossorigin=\"anonymous\">\n        <link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n        <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n          crossorigin=\"anonymous\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\" integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n          crossorigin=\"anonymous\"></script>\n        <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n          crossorigin=\"anonymous\"></script>\n      \n      </head>\n\n<body>\n  <div data-aos=\"fade-up\" data-aos-offset=\"100\" data-aos-delay=\"120\" data-aos-duration=\"1400\" data-aos-easing=\"ease-in-out\">\n    <div class=\"container\" style=\"text-align: center; padding: 15px;\">\n      <h4>{{cat.breedname}}</h4>\n      <a [routerLink]=\"['/']\">Home</a>\n      <form (submit)=\"updateCat()\">\n        <table>\n          <thead>\n            <p>Age: {{cat.age}}\n            </p>\n            <p>Sex: {{cat.sex}}\n            </p>\n            <p>Comfortable around dogs, cats, or both:\n              <input type=\"text\" name=\"comfortablecatdog\" [(ngModel)]=\"cat.comfortablecatdog\">\n            </p>\n            <p>Comfortable around children:\n              <input type=\"text\" name=\"comfortablekids\" [(ngModel)]=\"cat.comfortablekids\">\n            </p>\n            <p>Is this breed of cat known to have any health issues:\n              <input type=\"text\" name=\"health\" [(ngModel)]=\"cat.health\">\n            </p>\n          </thead>\n        </table>\n        <input type=\"submit\">\n      </form>\n    </div>\n  </div>\n  <script src=\"https://unpkg.com/aos@next/dist/aos.js\"></script>\n  <script>\n    AOS.init();\n  </script>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/breed-question-page/breed-question-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/breed-question-page/breed-question-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreedQuestionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreedQuestionPageComponent", function() { return BreedQuestionPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var BreedQuestionPageComponent = /** @class */ (function () {
    function BreedQuestionPageComponent(_route, _httpService, _router) {
        this._route = _route;
        this._httpService = _httpService;
        this._router = _router;
        this.cat = { _id: '', breedname: '', age: '', sex: '', comfortablecatdog: '', comfortablekids: '', health: '' };
    }
    BreedQuestionPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 1. GET THE ID FROM THE URL
        this._route.params.subscribe(function (data) {
            var _id = data.id;
            console.log('cat id is:', _id);
            // 2. USE THE ID TO MAKE A REQUEST TO THE BACKEND
            var tempObeservable = _this._httpService.getCatById(_id);
            tempObeservable.subscribe(function (data) {
                console.log('got data', data);
                _this.cat = data;
                // 3. USE THE RESPONSE DATA TO CREATE THE RESTAURANT OBJECT
            });
        });
    };
    BreedQuestionPageComponent.prototype.updateCat = function () {
        var _this = this;
        console.log('updatecat', this.cat);
        var tempObservable = this._httpService.updateCatInfo(this.cat);
        tempObservable.subscribe(function (data) {
            console.log('got a response', data);
            _this.cat = { _id: '', breedname: '', age: '', sex: '', comfortablecatdog: '', comfortablekids: '', health: '' };
            _this._router.navigate(['/']);
        });
    };
    BreedQuestionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breed-question-page',
            template: __webpack_require__(/*! ./breed-question-page.component.html */ "./src/app/breed-question-page/breed-question-page.component.html"),
            styles: [__webpack_require__(/*! ./breed-question-page.component.css */ "./src/app/breed-question-page/breed-question-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BreedQuestionPageComponent);
    return BreedQuestionPageComponent;
}());



/***/ }),

/***/ "./src/app/edit-page/edit-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-page/edit-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcGFnZS9lZGl0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-page/edit-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-page/edit-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <title>Cat Q</title>\n  <base href=\"/\">\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\"\n    crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\" integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n    crossorigin=\"anonymous\"></script>\n\n</head>\n\n<body>\n    <div class=\"container\" style=\"text-align: center; justify-content: center; padding: 30px; border: 1px solid black;\">\n      <h4>Edit {{ cat.breedname }}</h4>\n      <a [routerLink]=\"['/']\">Home</a>\n      <div class=\"row justify-content-center align-items-center\" style=\"padding-bottom: 5%;\">\n        <form (submit)=\"updateCat()\">\n          <table>\n            <thead>\n              <p value>Breed Name:\n                <select type=\"text\" name=\"name\" [(ngModel)]=\"cat.breedname\" style=\"background-color: rgba(218, 218, 218, 0.151); width: 50%;\">\n                  <option value=\"siamese\">Abyssinian</option>\n                  <option value=\"americanbobtail\">American Bobtail</option>\n                  <option value=\"americancurl\">American Curl</option>\n                  <option value=\"americanshorthair\">American Shorthair</option>\n                  <option value=\"americanwirehair\">American Wirehair</option>\n                  <option value=\"balinesejavanese\">Balinese-Javanese</option>\n                  <option value=\"bengal\">Bengal</option>\n                  <option value=\"birman\">Birman</option>\n                  <option value=\"bombay\">Bombay</option>\n                  <option value=\"britishshorthair\">British Shorthair</option>\n                  <option value=\"burmese\">Burmese</option>\n                  <option value=\"chartreux\">Chartreux</option>\n                  <option value=\"cornishrex\">Cornish Rex</option>\n                  <option value=\"devonrex\">Devon Rex</option>\n                  <option value=\"egyptianmau\">Egyptian Mau</option>\n                  <option value=\"europeanburmese\">European Burmese</option>\n                  <option value=\"exoticshorthair\">Exotic Shorthair</option>\n                  <option value=\"havanabrown\">Havana Brown</option>\n                  <option value=\"himalayan\">Himalayan</option>\n                  <option value=\"japanesebobtail\">Japanese Bobtail</option>\n                  <option value=\"korat\">Korat</option>\n                  <option value=\"laperm\">LaPerm</option>\n                  <option value=\"maincoon\">Main Coon</option>\n                  <option value=\"manx\">Manx</option>\n                  <option value=\"norwegianforest\">Norwegian Forest</option>\n                  <option value=\"ocicat\">OciCat</option>\n                  <option value=\"oriental\">Oriental</option>\n                  <option value=\"persian\">Persian</option>\n                  <option value=\"peterbald\">Peterbald</option>\n                  <option value=\"pixiebob\">Pixiebob</option>\n                  <option value=\"ragamuffin\">Ragamuffin</option>\n                  <option value=\"ragdoll\">Ragdoll</option>\n                  <option value=\"russianblue\">Russian Blue</option>\n                  <option value=\"savannah\">Savannah</option>\n                  <option value=\"scottishfold\">Scottish Fold</option>\n                  <option value=\"selkirkrex\">Selkirk Rex</option>\n                  <option value=\"siamese\">Siamese</option>\n                  <option value=\"siberian\">Siberian</option>\n                  <option value=\"singapura\">Singapura</option>\n                  <option value=\"somali\">Somali</option>\n                  <option value=\"sphynx\">Sphynx</option>\n                  <option value=\"tonkinese\">Tonkinese</option>\n                  <option value=\"toyger\">Toyger</option>\n                  <option value=\"turkishangora\">Turkish Angora </option>\n                  <option value=\"turkishvan\">Turkish Van</option>\n                </select>\n              </p>\n              <p>Age:\n                <input type=\"number\" name=\"age\" [(ngModel)]=\"cat.age\" style=\"background-color: rgba(231, 231, 231, 0.151); width: 50%;\">\n              </p>\n              <p>Sex:\n                <select type=\"text\" name=\"sex\" [(ngModel)]=\"cat.sex\" style=\"background-color: rgba(231, 231, 231, 0.151); width: 50%;\">\n                  <option value=\"male\">Male</option>\n                  <option value=\"female\">Female</option>\n                </select>\n              </p>\n              <p>Comfortable around dogs, cats, or both:\n                <select type=\"text\" name=\"comfortablecatdog\" [(ngModel)]=\"cat.comfortablecatdog\" style=\"background-color: rgba(231, 231, 231, 0.151); width: 50%;\">\n                  <option value=\"dogs\">Dogs</option>\n                  <option value=\"cats\">Cats</option>\n                  <option value=\"both\">Both</option>\n                  <option value=\"unsure\">Unsure</option>\n                </select>\n              </p>\n              <p>Comfortable around children:\n                <select type=\"text\" name=\"comfortablekids\" [(ngModel)]=\"cat.comfortablekids\" style=\"background-color: rgba(231, 231, 231, 0.151); width: 50%;\">\n                  <option value=\"yes\">Yes</option>\n                  <option value=\"no\">No</option>\n                  <option value=\"unsure\">Unsure</option>\n                </select>\n              </p>\n              <p>Is this breed of cat known to have any health issues:\n                <select type=\"text\" name=\"health\" [(ngModel)]=\"cat.health\" style=\"background-color: rgba(231, 231, 231, 0.151); width: 50%;\">\n                  <option value=\"yes\">Yes</option>\n                  <option value=\"no\">No</option>\n                  <option value=\"unsure\">Unsure</option>\n                </select>\n              </p>\n            </thead>\n          </table>\n          <input type=\"submit\">\n        </form>\n      </div>\n    </div>\n  <script src=\"https://unpkg.com/aos@next/dist/aos.js\"></script>\n  <script>\n    AOS.init();\n  </script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/edit-page/edit-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-page/edit-page.component.ts ***!
  \**************************************************/
/*! exports provided: EditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageComponent", function() { return EditPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var EditPageComponent = /** @class */ (function () {
    function EditPageComponent(_route, _httpService, _router) {
        this._route = _route;
        this._httpService = _httpService;
        this._router = _router;
        this.cat = { _id: '', breedname: '', age: '', sex: '', comfortablecatdog: '', comfortablekids: '', health: '' };
    }
    EditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (data) {
            var _id = data.id;
            console.log('cat id is:', _id);
            var tempObeservable = _this._httpService.getCatById(_id);
            tempObeservable.subscribe(function (data) {
                console.log('got data', data);
                _this.cat = data;
            });
        });
    };
    EditPageComponent.prototype.updateCat = function () {
        var _this = this;
        console.log('updatecat', this.cat);
        var tempObservable = this._httpService.updateCatInfo(this.cat);
        tempObservable.subscribe(function (data) {
            console.log('got a response', data);
            _this.cat = { _id: '', breedname: '', age: '', sex: '', comfortablecatdog: '', comfortablekids: '', health: '' };
            _this._router.navigate(['/']);
        });
    };
    EditPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-page',
            template: __webpack_require__(/*! ./edit-page.component.html */ "./src/app/edit-page/edit-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-page.component.css */ "./src/app/edit-page/edit-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditPageComponent);
    return EditPageComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* background image source */\r\n\r\n/* https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2015/10/HQ_uberkittens_blog_960x540_r1v1.jpg */\r\n\r\n/* * { border: 1px solid red;} */\r\n\r\n@media only screen and (min-width: 1px) {\r\n    .table th {\r\n        border-top: 0;\r\n    }\r\n    .table-sm td, .table-sm th {\r\n        padding: 2rem;\r\n    }\r\n    .header {\r\n        background: url(https://i.ibb.co/YQCpdjn/home-Page-Header-Image.png);\r\n        background-size: cover;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2Qjs7QUFFN0IseUdBQXlHOztBQUV6RyxpQ0FBaUM7O0FBRWpDO0lBQ0k7UUFDSSxjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxxRUFBcUU7UUFDckUsdUJBQXVCO0tBQzFCO0NBQ0o7O0FBRUQsNENBQTRDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYmFja2dyb3VuZCBpbWFnZSBzb3VyY2UgKi9cclxuXHJcbi8qIGh0dHBzOi8vdWJlcm5ld3Nyb29tYXBpLjEwdXBjZG4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzEwL0hRX3ViZXJraXR0ZW5zX2Jsb2dfOTYweDU0MF9yMXYxLmpwZyAqL1xyXG5cclxuLyogKiB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDt9ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDFweCkge1xyXG4gICAgLnRhYmxlIHRoIHtcclxuICAgICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXNtIHRkLCAudGFibGUtc20gdGgge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pLmliYi5jby9ZUUNwZGpuL2hvbWUtUGFnZS1IZWFkZXItSW1hZ2UucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7fSJdfQ== */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <title>Cat Q</title>\n  <base href=\"/\">\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\"\n    crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\" integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n    crossorigin=\"anonymous\"></script>\n\n</head>\n\n<body>\n  <div class=\"container\" style=\"text-align: center;\">\n    <div class=\"header\" [routerLink]=\"['']\">\n      <div class=\"row shadow-sm\" style=\"text-align: center; display: inherit; margin-top: 15px; padding-bottom: 110px;  border-bottom: 2px solid black;\">\n        <h1>CatQ</h1>\n      </div>\n    </div>\n    <div class=\"row\">\n      <p style=\"color: rgb(0, 0, 0); margin-bottom: 15px; margin-top: 30px; padding: 15px;\">Are looking to take in a stray cat or kitten and want to find them a new, loving home? Scroll through the table below!</p>\n    </div>\n    <hr>\n\n    <!-- the commented code below will eventually become the list of all the cat breeds and you will be able to click the \n      card and be taken to that specific breeds information page, but I am struggling assigning each cat \n      card without creating multiple component for them -->\n\n    <!-- <div class=\"row\" style=\"flex-wrap: nowrap; margin: 20px; justify-content: center;\">\n      <button [routerLink]=\"['/cats', cat.breedname]\" class=\"col-sm-6 shadow-lg\" style=\"border: 1px solid black; margin: 10px; border-radius: 10px;\">\n        <div class=\"row\" style=\"border-bottom: 1px solid black; justify-content: center; margin: 0;\">\n          <p>Abyssinian Cat</p>\n        </div>\n        <div class=\"row\" style=\"justify-content: center\">\n          <img src=\"https://i.ibb.co/HTQVMr0/abyssinian.png\" style=\"width: 95%; height: 95%; padding: 10px;\">\n        </div>\n      </button>\n      <div class=\"col-sm-6 shadow-lg\" style=\"border: 1px solid black; margin: 10px; border-radius: 10px;\">\n        <div class=\"row\" style=\"border-bottom: 1px solid black; justify-content: center; margin: 0;\">\n          <p>American Bobtail Cat Breed</p>\n        </div>\n        <div class=\"row\" style=\"justify-content: center\">\n          <img src=\"https://i.ibb.co/Lp7Gv6x/american-Bob-Tail.png\" style=\"width: 115%; height: 115%; padding: 10px;\">\n        </div>\n      </div>\n    </div> -->\n\n    <div class=\"row\" style=\"margin: 1px; padding: 15px;\">\n      <div class=\"table-responsive table-sm shadow-lg w-auto\" style=\"border: 1px solid black; cursor: default; padding-right: 0; border-radius: 8px;\">\n        <table class=\"table table-hover w-auto\" style=\"margin: 0; border-radius: 18px;\">\n          <thead>\n            <tr style=\"/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fac695+0,f5ab66+47,ef8d31+100;Orange+3D+%232 */\n            background: rgb(250,198,149); /* Old browsers */\n            background: -moz-linear-gradient(top, rgba(250,198,149,1) 0%, rgba(245,171,102,1) 47%, rgba(239,141,49,1) 100%); /* FF3.6-15 */\n            background: -webkit-linear-gradient(top, rgba(250,198,149,1) 0%,rgba(245,171,102,1) 47%,rgba(239,141,49,1) 100%); /* Chrome10-25,Safari5.1-6 */\n            background: linear-gradient(to bottom, rgba(250,198,149,1) 0%,rgba(245,171,102,1) 47%,rgba(239,141,49,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fac695', endColorstr='#ef8d31',GradientType=0 ); /* IE6-9 */; font-size: 25px; color: whitesmoke;\">\n              <th scope=\"col\">Breed Name</th>\n              <th scope=\"col\">Age</th>\n              <th scope=\"col\">Sex</th>\n              <th scope=\"col\" style=\"font-size: 15px; font-weight: 600;\">Behavior around other Cats and/or Dogs?</th>\n              <th scope=\"col\">Comfortable around children?</th>\n              <th scope=\"col\">Health issues?</th>\n              <th scope=\"col\">Actions</th>\n            </tr>\n          </thead>\n          <tbody style=\"font-size: 17px;\">\n            <tr *ngFor=\"let cat of cats\">\n              <td>{{cat.breedname}}</td>\n              <td>{{cat.age}}</td>\n              <td>{{cat.sex}}</td>\n              <td>{{cat.comfortablecatdog}}</td>\n              <td>{{cat.comfortablekids}}</td>\n              <td>{{cat.health}}</td>\n              <button style=\"border: 1.5px solid rgba(0, 164, 240, 0.267); background-color: whitesmoke; border-radius: 23px; font-size: 15px; padding: 5px; margin: 5px;\"\n                [routerLink]=\"['/cats', cat._id]\">Details</button>\n              <button style=\"border: 1.5px solid rgba(255, 217, 0, 0.267); background-color: whitesmoke; border-radius: 23px; font-size: 15px; padding: 5px; margin: 5px;\"\n                [routerLink]=\"['/cats', cat._id, 'edit']\">Edit</button>\n              <button style=\"border: 1.5px solid rgba(255, 0, 0, 0.226); background-color: whitesmoke; border-radius: 23px; font-size: 15px; padding: 5px; margin: 5px;\"\n                [routerLink]=\"['/cats', cat._id, 'delete']\">Delete</button>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\" style=\"text-align: center;\">\n      <div class=\"col-sm\">\n        <a [routerLink]=\"['/cats/new']\">Have you found a stray cat or kitten that you'd like to find a new home for? Create a post!</a>\n      </div>\n    </div>\n  </div>\n\n  <script src=\"https://unpkg.com/aos@next/dist/aos.js\"></script>\n  <script>\n    AOS.init();\n  </script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(_route, _httpService, _router) {
        this._route = _route;
        this._httpService = _httpService;
        this._router = _router;
        this.cats = [];
        this.cat = { breedname: '' };
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tempObeservable = this._httpService.getAllQuestions();
        tempObeservable.subscribe(function (data) {
            console.log('got a response from ngoninit', data);
            _this.cats = data;
        });
    };
    HomePageComponent.prototype.breedQuestionPage = function () {
        var _this = this;
        this._route.params.subscribe(function (data) {
            var id = data.id;
            console.log('quesiton id is:', id);
            // 2. USE THE ID TO MAKE A REQUEST TO THE BACKEND
            var tempObeservable = _this._httpService.getCatById(id);
            tempObeservable.subscribe(function (data) {
                _this.cats = data;
            });
        });
    };
    HomePageComponent.prototype.removeQuestion = function (_id) {
        var _this = this;
        var tempObeservable = this._httpService.removeQuestionById(_id);
        tempObeservable.subscribe(function (data) {
            console.log('got a response from delete');
            var tempObeservable = _this._httpService.getAllQuestions();
            tempObeservable.subscribe(function (data) {
                console.log('got a response from ngoninit', data);
                _this.cats = data;
            });
        });
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllQuestions = function () {
        console.log('getAllQuestions');
        return this._http.get('/api/cats');
    };
    HttpService.prototype.getCatById = function (_id) {
        console.log('getCatById');
        var breedquestion = this._http.get("/api/cats/" + _id + "/edit");
        return breedquestion;
    };
    HttpService.prototype.getCatByIdTwo = function (_id) {
        console.log('getCatByIdTwo');
        return this._http.get("/api/cats/" + _id + "/catspage", _id);
    };
    HttpService.prototype.updateCatInfo = function (breedObj) {
        console.log('UpdateCat');
        return this._http.post('/api/cats/' + breedObj._id + '/update', breedObj);
    };
    HttpService.prototype.postNewQuestion = function (breedObj) {
        console.log('postnewQuestion');
        return this._http.post('/api/cats/new', breedObj);
    };
    HttpService.prototype.removeQuestionById = function (breedObj) {
        console.log('deleteProduct', breedObj);
        return this._http.post('/api/cats/' + breedObj._id + '/delete', breedObj);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/question-page/question-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/question-page/question-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLXBhZ2UvcXVlc3Rpb24tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/question-page/question-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/question-page/question-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <title>Cat Q</title>\n  <base href=\"/\">\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\"\n    crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\" integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n    crossorigin=\"anonymous\"></script>\n\n</head>\n\n<body>\n  <div class=\"container\" style=\"text-align: center; justify-content: center; padding: 30px; border: 1px solid black;\">\n    <a [routerLink]=\"['/']\">Home</a>\n    <div data-aos=\"fade-up\" data-aos-offset=\"100\" data-aos-delay=\"120\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n      <div class=\"container shadow-lg\">\n        <div class=\"row justify-content-center align-items-center\" style=\"margin-top: 10%; padding: 5%;\">\n          <h4>Do you have questions on a specific breed?</h4>\n          <p>Unsure of some of the questions? No worries! You can leave those fields blank for the time being.</p>\n        </div>\n        <div class=\"row justify-content-center align-items-center\" style=\"padding-bottom: 5%;\">\n          <form (submit)=\"createQuestion()\">\n            <table>\n              <thead>\n                <p>Breed Name:\n                  <select type=\"text\" name=\"name\" [(ngModel)]=\"newQuestion.breedname\" style=\"background-color: rgba(218, 218, 218, 0.151); width: 50%;\">\n                    <option value=\"siamese\">Abyssinian</option>\n                    <option value=\"americanbobtail\">American Bobtail</option>\n                    <option value=\"americancurl\">American Curl</option>\n                    <option value=\"americanshorthair\">American Shorthair</option>\n                    <option value=\"americanwirehair\">American Wirehair</option>\n                    <option value=\"balinesejavanese\">Balinese-Javanese</option>\n                    <option value=\"bengal\">Bengal</option>\n                    <option value=\"birman\">Birman</option>\n                    <option value=\"bombay\">Bombay</option>\n                    <option value=\"britishshorthair\">British Shorthair</option>\n                    <option value=\"burmese\">Burmese</option>\n                    <option value=\"chartreux\">Chartreux</option>\n                    <option value=\"cornishrex\">Cornish Rex</option>\n                    <option value=\"devonrex\">Devon Rex</option>\n                    <option value=\"egyptianmau\">Egyptian Mau</option>\n                    <option value=\"europeanburmese\">European Burmese</option>\n                    <option value=\"exoticshorthair\">Exotic Shorthair</option>\n                    <option value=\"havanabrown\">Havana Brown</option>\n                    <option value=\"himalayan\">Himalayan</option>\n                    <option value=\"japanesebobtail\">Japanese Bobtail</option>\n                    <option value=\"korat\">Korat</option>\n                    <option value=\"laperm\">LaPerm</option>\n                    <option value=\"maincoon\">Main Coon</option>\n                    <option value=\"manx\">Manx</option>\n                    <option value=\"norwegianforest\">Norwegian Forest</option>\n                    <option value=\"ocicat\">OciCat</option>\n                    <option value=\"oriental\">Oriental</option>\n                    <option value=\"persian\">Persian</option>\n                    <option value=\"peterbald\">Peterbald</option>\n                    <option value=\"pixiebob\">Pixiebob</option>\n                    <option value=\"ragamuffin\">Ragamuffin</option>\n                    <option value=\"ragdoll\">Ragdoll</option>\n                    <option value=\"russianblue\">Russian Blue</option>\n                    <option value=\"savannah\">Savannah</option>\n                    <option value=\"scottishfold\">Scottish Fold</option>\n                    <option value=\"selkirkrex\">Selkirk Rex</option>\n                    <option value=\"siamese\">Siamese</option>\n                    <option value=\"siberian\">Siberian</option>\n                    <option value=\"singapura\">Singapura</option>\n                    <option value=\"somali\">Somali</option>\n                    <option value=\"sphynx\">Sphynx</option>\n                    <option value=\"tonkinese\">Tonkinese</option>\n                    <option value=\"toyger\">Toyger</option>\n                    <option value=\"turkishangora\">Turkish Angora </option>\n                    <option value=\"turkishvan\">Turkish Van</option>\n                  </select>\n                </p>\n                <p>Age:\n                  <input type=\"number\" name=\"age\" [(ngModel)]=\"newQuestion.age\" style=\"background-color: rgba(231, 231, 231, 0.151); width: 50%;\">\n                </p>\n                <p>Sex:\n                  <select type=\"text\" name=\"sex\" [(ngModel)]=\"newQuestion.sex\" style=\"background-color: rgba(231, 231, 231, 0.151); width: 50%;\">\n                    <option value=\"male\">Male</option>\n                    <option value=\"female\">Female</option>\n                  </select>\n                </p>\n                <p>Comfortable around dogs, cats, or both:\n                  <select type=\"text\" name=\"comfortablecatdog\" [(ngModel)]=\"newQuestion.comfortablecatdog\" style=\"background-color: rgba(231, 231, 231, 0.151); width: 50%;\">\n                    <option value=\"dogs\">Dogs</option>\n                    <option value=\"cats\">Cats</option>\n                    <option value=\"both\">Both</option>\n                    <option value=\"unsure\">Unsure</option>\n                  </select>\n                </p>\n                <p>Comfortable around children:\n                  <select type=\"text\" name=\"comfortablekids\" [(ngModel)]=\"newQuestion.comfortablekids\" style=\"background-color: rgba(231, 231, 231, 0.151); width: 50%;\">\n                    <option value=\"yes\">Yes</option>\n                    <option value=\"no\">No</option>\n                    <option value=\"unsure\">Unsure</option>\n                  </select>\n                </p>\n                <p>Is this breed of cat known to have any health issues:\n                  <select type=\"text\" name=\"health\" [(ngModel)]=\"newQuestion.health\" style=\"background-color: rgba(231, 231, 231, 0.151); width: 50%;\">\n                    <option value=\"yes\">Yes</option>\n                    <option value=\"no\">No</option>\n                    <option value=\"unsure\">Unsure</option>\n                  </select>\n                </p>\n              </thead>\n            </table>\n            <input type=\"submit\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <script src=\"https://unpkg.com/aos@next/dist/aos.js\"></script>\n  <script>\n    AOS.init();\n  </script>\n</body>\n\n</html>\n<!-- [disabled]=\"newQuestion.name.length < 3 || newQuestion.age.length < 3 || newQuestion.sex.length < 3 || newQuestion.comfortablecatdog.length < 3 || newQuestion.comfortablekids.length < 3 || newQuestion.health.length < 3\" -->"

/***/ }),

/***/ "./src/app/question-page/question-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-page/question-page.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionPageComponent", function() { return QuestionPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var QuestionPageComponent = /** @class */ (function () {
    // newRestaurant= {name: '', cuisine: ''};
    function QuestionPageComponent(_route, _httpService, _router) {
        this._route = _route;
        this._httpService = _httpService;
        this._router = _router;
        this.cat = { _id: '', breedname: '', age: '', sex: '', comfortablecatdog: '', comfortablekids: '', health: '' };
        this.newQuestion = { breedname: '', age: '', sex: '', comfortablecatdog: '', comfortablekids: '', health: '' };
    }
    QuestionPageComponent.prototype.ngOnInit = function () {
    };
    QuestionPageComponent.prototype.createQuestion = function () {
        var _this = this;
        console.log('createQuestion', this.newQuestion);
        // use the service to make a post request to the backend express server
        var tempObservable = this._httpService.postNewQuestion(this.newQuestion);
        tempObservable.subscribe(function (data) {
            console.log('got a response', data);
            _this.newQuestion = { breedname: '', age: '', sex: '', comfortablecatdog: '', comfortablekids: '', health: '' };
            _this._router.navigate(['/']);
        });
    };
    QuestionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-page',
            template: __webpack_require__(/*! ./question-page.component.html */ "./src/app/question-page/question-page.component.html"),
            styles: [__webpack_require__(/*! ./question-page.component.css */ "./src/app/question-page/question-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuestionPageComponent);
    return QuestionPageComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! D:\projects\cat-questions\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map