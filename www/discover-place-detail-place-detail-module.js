(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-place-detail-place-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Réserver {{ selectedPlace.title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\" padding>\n  <p>{{ selectedPlace.description }}</p>\n  <form (ngSubmit)=\"onCreateBooking()\" [formGroup]=\"formBooking\">\n    <ion-row>\n      <ion-col sizeSm=\"4\" offsetSm=\"3\">\n\n        <ion-item>\n          <ion-label position=\"floating\">nombre de guests</ion-label>\n          <ion-input name=\"guestNumber\" type=\"number\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Date d'arrivée</ion-label>\n          <ion-datetime displayFormat=\"D MMM, YY\" pickerFormat=\"DD MMM YYYY\" name=\"startDate\" [min]=\"minStartDate()\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Date de départ</ion-label>\n          <ion-datetime displayFormat=\"D MMM, YY\" pickerFormat=\"DD MMM YYYY\" name=\"endDate\" [min]=\"minEndDate()\"></ion-datetime>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-button color=\"primary\" type=\"submit\" (click)=\"onCreateBooking()\" [disabled]=\"!formBooking.valid\">Réserver</ion-button>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ place.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-button color=\"primary\" margin (click)=\"onBookPlace()\">Réserver</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/bookings/create-booking/create-booking.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2NyZWF0ZS1ib29raW5nL2NyZWF0ZS1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/bookings/create-booking/create-booking.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookingComponent", function() { return CreateBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_model_booking_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/booking.model */ "./src/app/model/booking.model.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/bookings/bookings.service */ "./src/app/services/bookings/bookings.service.ts");
/* harmony import */ var _places_place_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../places/place.model */ "./src/app/places/place.model.ts");
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







var CreateBookingComponent = /** @class */ (function () {
    function CreateBookingComponent(modalCtrl, authService, bookingService) {
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.bookingService = bookingService;
    }
    CreateBookingComponent.prototype.ngOnInit = function () { this.generateFormValidation(); };
    CreateBookingComponent.prototype.generateFormValidation = function () {
        this.formBooking = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            guestNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { updateOn: 'change', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)] }),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { updateOn: 'change', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { updateOn: 'change', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
    };
    CreateBookingComponent.prototype.onCreateBooking = function () {
        console.log(this.formBooking);
        var newBooking = new src_app_model_booking_model__WEBPACK_IMPORTED_MODULE_3__["Booking"]('0', this.selectedPlace.id, this.authService.userAuthenticated, this.formBooking.value.guestNumber, this.formBooking.value.startDate, this.formBooking.value.endDate);
        console.log(newBooking);
        //this.bookingService.addBooking(newBooking);
        //this.modalCtrl.dismiss({ date: 'Date de réservation' }, 'confirm');
    };
    /**
     * Minimum start date to book
     * @returns
     */
    CreateBookingComponent.prototype.minStartDate = function () {
        return this.formatDate(new Date(Date.now()));
    };
    /**
     * Minimum end date to book
     * @returns
     */
    CreateBookingComponent.prototype.minEndDate = function () {
        var date = new Date(this.minStartDate());
        date.setDate(date.getDate() + 1);
        return this.formatDate(date);
    };
    /**
     * Format date
     * @param date Date to format
     * @returns Formatted date as string
     */
    CreateBookingComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    CreateBookingComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    CreateBookingComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_5__["BookingsService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _places_place_model__WEBPACK_IMPORTED_MODULE_6__["Place"])
    ], CreateBookingComponent.prototype, "selectedPlace", void 0);
    CreateBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-booking',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create-booking.component.scss */ "./src/app/bookings/create-booking/create-booking.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_5__["BookingsService"]])
    ], CreateBookingComponent);
    return CreateBookingComponent;
}());



/***/ }),

/***/ "./src/app/model/booking.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/booking.model.ts ***!
  \****************************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
var Booking = /** @class */ (function () {
    function Booking(id, placeId, userId, guestNumber, startDate, endDate) {
        this.id = id;
        this.placeId = placeId;
        this.userId = userId;
        this.guestNumber = guestNumber;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return Booking;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: PlaceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function() { return PlaceDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-detail.page */ "./src/app/places/discover/place-detail/place-detail.page.ts");
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ "./src/app/bookings/create-booking/create-booking.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPage"]
    }
];
var PlaceDetailPageModule = /** @class */ (function () {
    function PlaceDetailPageModule() {
    }
    PlaceDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPage"], _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_6__["CreateBookingComponent"]],
            entryComponents: [_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_6__["CreateBookingComponent"]]
        })
    ], PlaceDetailPageModule);
    return PlaceDetailPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9wbGFjZS1kZXRhaWwvcGxhY2UtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: PlaceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function() { return PlaceDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ "./src/app/bookings/create-booking/create-booking.component.ts");
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





var PlaceDetailPage = /** @class */ (function () {
    function PlaceDetailPage(navCtrl, route, placesService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.placesService = placesService;
        this.modalCtrl = modalCtrl;
    }
    PlaceDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('placeId')) {
                _this.navCtrl.navigateBack('/places/tabs/discover');
                return;
            }
            _this.place = _this.placesService.getPlace(paramMap.get('placeId'));
        });
    };
    PlaceDetailPage.prototype.onBookPlace = function () {
        this.modalCtrl
            .create({
            component: _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_4__["CreateBookingComponent"],
            componentProps: { selectedPlace: this.place } // données transmises à la modale
        })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss(); // listener qui renvoie une promesse
        })
            .then(function (resultData) {
            console.log(resultData.data, resultData.role);
            if (resultData.role === 'confirm') {
                console.log('BOOKED!');
            }
        });
    };
    PlaceDetailPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    PlaceDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-place-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./place-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./place-detail.page.scss */ "./src/app/places/discover/place-detail/place-detail.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());



/***/ }),

/***/ "./src/app/services/bookings/bookings.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/bookings/bookings.service.ts ***!
  \*******************************************************/
/*! exports provided: BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return BookingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var BookingsService = /** @class */ (function () {
    function BookingsService() {
        this._bookings = [
        //new Booking('b1', 'p1', , 5, new Date('2022-07-07'), new Date('2022-08-02')),
        //new Booking('b2', 'p2', , 3, new Date('2022-07-12'), new Date('2022-07-16')),
        //new Booking('b3', 'p3', , 2, new Date('2022-07-17'), new Date('2022-07-18')),
        //new Booking('b4', 'p4', , 1, new Date('2022-07-24'), new Date('2022-07-29')),
        //new Booking('b5', 'p2', , 4, new Date('2022-08-29'), new Date('2022-08-31')),
        //new Booking('b6', 'p5', , 2, new Date('2022-08-30'), new Date('2022-09-05'))
        ];
    }
    Object.defineProperty(BookingsService.prototype, "otherBookings", {
        get: function () {
            var _this = this;
            return __spreadArrays(this._bookings.filter(function (b) { return b.id !== _this.authService.userAuthenticated; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get bookings of place
     * @param id Id of booking to get
     * @returns Booking with place id
     */
    BookingsService.prototype.getPlace = function (id) {
        return __assign({}, this._bookings.find(function (b) { return b.placeId === id; }));
    };
    Object.defineProperty(BookingsService.prototype, "myBookings", {
        /**
         * Get bookings of current user
         * @returns Booking[] of current user
         */
        get: function () {
            var _this = this;
            return __spreadArrays(this._bookings.filter(function (b) { return b.id === _this.authService.userAuthenticated; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add booking
     * @param booking Booking to add
     */
    BookingsService.prototype.addBooking = function (booking) {
        var id = (1).toString();
        do {
            id = (Math.floor(Math.random() * 1000)).toString();
        } while (!this._bookings.find(function (b) { return b.id === id; }));
        booking.id = id;
        this._bookings.push(booking);
    };
    /**
     * Delete booking
     * @param booking Booking to delete
     */
    BookingsService.prototype.deleteBooking = function (booking) {
        this._bookings = this._bookings.filter(function (b) { return b.id !== booking.id; });
    };
    BookingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BookingsService);
    return BookingsService;
}());



/***/ })

}]);
//# sourceMappingURL=discover-place-detail-place-detail-module.js.map