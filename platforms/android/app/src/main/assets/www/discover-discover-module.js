(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-button (click)=\"onOpenMenu()\">\n        Open\n      </ion-button> -->\n    </ion-buttons>\n    <ion-title>Endroits à Découvrir</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{ loadedPlaces[0].title }}</ion-card-title>\n            <ion-card-subtitle>{{ loadedPlaces[0].price | currency:'EUR':'symbol':'3.2-2':'fr' }} / Nuit\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-img [src]=\"loadedPlaces[0].image\"></ion-img>\n          <ion-card-content>\n            <p>{{ loadedPlaces[0].description }}</p>\n          </ion-card-content>\n          <div>\n            <ion-button fill=\"clear\" color=\"primary\" [routerLink]=\"['/','places','tabs','discover',loadedPlaces[0].id]\">\n              Voir</ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-list>\n          <ion-item *ngFor=\"let place of loadedPlaces.slice(1)\"\n            [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\" detail>\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"place.imageUrl\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{ place.title }}</h2>\n              <p>{{ place.description }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/places/discover/discover.module.ts":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_5__["DiscoverPage"]
    }
];
var DiscoverPageModule = /** @class */ (function () {
    function DiscoverPageModule() {
    }
    DiscoverPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_5__["DiscoverPage"]]
        })
    ], DiscoverPageModule);
    return DiscoverPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/discover.page.scss":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kaXNjb3Zlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/places/discover/discover.page.ts":
/*!**************************************************!*\
  !*** ./src/app/places/discover/discover.page.ts ***!
  \**************************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_places_places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/places/places.service */ "./src/app/services/places/places.service.ts");
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



var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(placesService, menuCtrl) {
        this.placesService = placesService;
        this.menuCtrl = menuCtrl;
    }
    DiscoverPage.prototype.ngOnInit = function () {
        this.loadedPlaces = this.placesService.getAllPlaces();
    };
    DiscoverPage.ctorParameters = function () { return [
        { type: _services_places_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] }
    ]; };
    DiscoverPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discover',
            template: __importDefault(__webpack_require__(/*! raw-loader!./discover.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./discover.page.scss */ "./src/app/places/discover/discover.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_places_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], DiscoverPage);
    return DiscoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=discover-discover-module.js.map