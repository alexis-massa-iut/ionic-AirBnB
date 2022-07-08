(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offer-bookings-offer-bookings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-bookings/offer-bookings.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-bookings/offer-bookings.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ place.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-button\n    margin\n    color=\"primary\"\n    [routerLink]=\"['/', 'places', 'tabs', 'offers', 'edit', place.id]\"\n    >Edit</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/places/offers/offer-bookings/offer-bookings.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/places/offers/offer-bookings/offer-bookings.module.ts ***!
  \***********************************************************************/
/*! exports provided: OfferBookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBookingsPageModule", function() { return OfferBookingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _offer_bookings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offer-bookings.page */ "./src/app/places/offers/offer-bookings/offer-bookings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _offer_bookings_page__WEBPACK_IMPORTED_MODULE_5__["OfferBookingsPage"]
    }
];
var OfferBookingsPageModule = /** @class */ (function () {
    function OfferBookingsPageModule() {
    }
    OfferBookingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_offer_bookings_page__WEBPACK_IMPORTED_MODULE_5__["OfferBookingsPage"]]
        })
    ], OfferBookingsPageModule);
    return OfferBookingsPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/offer-bookings/offer-bookings.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/places/offers/offer-bookings/offer-bookings.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXItYm9va2luZ3Mvb2ZmZXItYm9va2luZ3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/places/offers/offer-bookings/offer-bookings.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/offer-bookings/offer-bookings.page.ts ***!
  \*********************************************************************/
/*! exports provided: OfferBookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBookingsPage", function() { return OfferBookingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var OfferBookingsPage = /** @class */ (function () {
    function OfferBookingsPage(route, navCtrl, placesService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.placesService = placesService;
    }
    OfferBookingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('placeId')) {
                _this.navCtrl.navigateBack('/places/tabs/offers');
                return;
            }
            _this.place = _this.placesService.getPlace(paramMap.get('placeId'));
        });
    };
    OfferBookingsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"] }
    ]; };
    OfferBookingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offer-bookings',
            template: __importDefault(__webpack_require__(/*! raw-loader!./offer-bookings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-bookings/offer-bookings.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./offer-bookings.page.scss */ "./src/app/places/offers/offer-bookings/offer-bookings.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"]])
    ], OfferBookingsPage);
    return OfferBookingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-offer-bookings-offer-bookings-module.js.map