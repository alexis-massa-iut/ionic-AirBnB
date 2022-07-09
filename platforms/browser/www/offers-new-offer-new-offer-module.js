(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-new-offer-new-offer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"formOffer\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">Titre (min 5, max 50)</ion-label>\n            <ion-input type=\"text\" autocomplete autocorrect formControlName=\"title\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">Description(min 5, max 255)</ion-label>\n            <ion-input type=\"text\" autocomplete autocorrect formControlName=\"description\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">Image</ion-label>\n            <ion-button color=\"primary\" (click)=\"onAddPicture('library')\" full>\n              <ion-icon name=\"image\" slot=\"icon-only\"></ion-icon>\n              Choisir dans la bibliothèque\n            </ion-button>\n\n            <ion-button color=\"primary\" (click)=\"onAddPicture('camera')\" full>\n              <ion-icon name=\"camera\" slot=\"icon-only\"></ion-icon>\n              Prendre une photo\n            </ion-button>\n\n            <ion-img [src]=\"image\"></ion-img>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">Prix (00,00)</ion-label>\n            <ion-input type=\"string\" autocomplete autocorrect formControlName=\"price\" pattern=\"^[0-9]*,[0-9]{0,2}$\">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"2\" offset-sm=\"5\">\n          <ion-button color=\"primary\" type=\"submit\" (click)=\"onCreateOffer()\">Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.module.ts ***!
  \*************************************************************/
/*! exports provided: NewOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPageModule", function() { return NewOfferPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-offer.page */ "./src/app/places/offers/new-offer/new-offer.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _new_offer_page__WEBPACK_IMPORTED_MODULE_5__["NewOfferPage"]
    }
];
var NewOfferPageModule = /** @class */ (function () {
    function NewOfferPageModule() {
    }
    NewOfferPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_5__["NewOfferPage"]]
        })
    ], NewOfferPageModule);
    return NewOfferPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvbmV3LW9mZmVyL25ldy1vZmZlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.ts ***!
  \***********************************************************/
/*! exports provided: NewOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPage", function() { return NewOfferPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_model_place_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/place.model */ "./src/app/model/place.model.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/photo/photo.service */ "./src/app/services/photo/photo.service.ts");
/* harmony import */ var src_app_services_places_places_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/places/places.service */ "./src/app/services/places/places.service.ts");
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







var NewOfferPage = /** @class */ (function () {
    function NewOfferPage(photoService, placesServices, authService, router) {
        this.photoService = photoService;
        this.placesServices = placesServices;
        this.authService = authService;
        this.router = router;
        this.image = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'; // Default image
    }
    NewOfferPage.prototype.ngOnInit = function () { this.generateValidators(); };
    NewOfferPage.prototype.generateValidators = function () {
        this.formOffer = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]
            })
        });
    };
    /**
   * Méthode pour upload une photo
   * @param source (string) : source de la photo
   */
    NewOfferPage.prototype.onAddPicture = function (source) {
        var _this = this;
        if (source === 'camera') {
            this.photoService.takePicture().then(function (imageData) {
                _this.image = 'data:image/jpeg;base64,' + imageData;
                _this.formOffer.patchValue({ image: _this.image }); // Image in form input
            });
        }
        else {
            this.photoService.uploadPicture().then(function (imageData) {
                _this.image = 'data:image/jpeg;base64,' + imageData;
                _this.formOffer.patchValue({ image: _this.image }); // Image in form input
            });
        }
    };
    /**
     * Méthode pour ajouter une nouvelle offre
     */
    NewOfferPage.prototype.onCreateOffer = function () {
        if (!this.formOffer.valid) {
            return;
        }
        var newPlace = new src_app_model_place_model__WEBPACK_IMPORTED_MODULE_3__["Place"]('', this.authService.userAuthenticated, this.formOffer.value.title, this.formOffer.value.description, this.image, this.formOffer.value.price);
        this.placesServices.addPlace(newPlace);
        this.formOffer.reset();
        this.router.navigate(['/places/tabs/offers']);
    };
    NewOfferPage.ctorParameters = function () { return [
        { type: src_app_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"] },
        { type: src_app_services_places_places_service__WEBPACK_IMPORTED_MODULE_6__["PlacesService"] },
        { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NewOfferPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-offer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./new-offer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./new-offer.page.scss */ "./src/app/places/offers/new-offer/new-offer.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"],
            src_app_services_places_places_service__WEBPACK_IMPORTED_MODULE_6__["PlacesService"],
            src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewOfferPage);
    return NewOfferPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-new-offer-new-offer-module.js.map