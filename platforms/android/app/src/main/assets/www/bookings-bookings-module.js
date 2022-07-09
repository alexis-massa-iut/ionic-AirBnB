(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mes Réservations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>Lieu</ion-col>\n      <ion-col>userId</ion-col>\n      <ion-col>Nombre de guests</ion-col>\n      <ion-col>Départ</ion-col>\n      <ion-col>endDate</ion-col>\n      <ion-col>Actions</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let booking of myBookings\">\n      <ion-col>{{booking.placeId}}</ion-col>\n      <ion-col>{{booking.userId}}</ion-col>\n      <ion-col>{{booking.guestNumber}}</ion-col>\n      <ion-col>{{booking.startDate}}</ion-col>\n      <ion-col>{{booking.endDate}}</ion-col>\n      <ion-col>\n        <ion-item-option color=\"danger\" (click)=\"onDeleteBooking(booking)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/bookings/bookings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/*! exports provided: BookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookings.page */ "./src/app/bookings/bookings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_5__["BookingsPage"]
    }
];
var BookingsPageModule = /** @class */ (function () {
    function BookingsPageModule() {
    }
    BookingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_5__["BookingsPage"]]
        })
    ], BookingsPageModule);
    return BookingsPageModule;
}());



/***/ }),

/***/ "./src/app/bookings/bookings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-row:first-child {\n  background-color: #c0c0c0;\n  font-weight: bold;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZ3MvRDpcXExvY2FsUmVwb3NpdG9yeVxcaW9uaWMtQWlyQm5CL3NyY1xcYXBwXFxib29raW5nc1xcYm9va2luZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9ib29raW5ncy9ib29raW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0U7RUFDRSw2QkFBQTtBQ0NKO0FERUU7RUFDRSw4QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3R5bGU6IGhpZGRlbjtcclxuXHJcbiAgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIH1cclxuICBpb24tY29sOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG5cclxuICBpb24tcm93Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxufVxyXG4iLCJpb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuaW9uLWdyaWQgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWdyaWQgaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG5pb24tZ3JpZCBpb24tY29sOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cbmlvbi1ncmlkIGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bookings/bookings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bookings/bookings.page.ts ***!
  \*******************************************/
/*! exports provided: BookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPage", function() { return BookingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bookings/bookings.service */ "./src/app/services/bookings/bookings.service.ts");
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



var BookingsPage = /** @class */ (function () {
    function BookingsPage(bookingsService, alertController) {
        this.bookingsService = bookingsService;
        this.alertController = alertController;
    }
    BookingsPage.prototype.ngOnInit = function () { this.myBookings = this.bookingsService.getMyBookings(); };
    /**
     * Delete booking
     * @param booking Booking to delete
     */
    BookingsPage.prototype.onDeleteBooking = function (booking) {
        var _this = this;
        this.alertController.create({
            header: 'Confirmation',
            message: "Voulez-vous vraiment supprimer la r\u00E9servation " + booking.id + " ?",
            buttons: [
                { text: 'Annuler', role: 'cancel' },
                {
                    text: 'Supprimer', handler: function () {
                        _this.bookingsService.deleteBooking(booking);
                        _this.myBookings = _this.bookingsService.getMyBookings();
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    BookingsPage.ctorParameters = function () { return [
        { type: _services_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }
    ]; };
    BookingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookings',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bookings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bookings.page.scss */ "./src/app/bookings/bookings.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], BookingsPage);
    return BookingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=bookings-bookings-module.js.map