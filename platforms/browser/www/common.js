(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/button-active-d4bd4f74.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/button-active-d4bd4f74.js ***!
  \*************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm-es5/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm-es5/haptic-27b3f981.js");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "./node_modules/@ionic/core/dist/esm-es5/index-34cb2743.js");
var createButtonActiveGesture=function(t,e){var n;var r;var i=function(t,r,i){if(typeof document==="undefined"){return}var o=document.elementFromPoint(t,r);if(!o||!e(o)){c();return}if(o!==n){c();a(o,i)}};var a=function(t,e){n=t;if(!r){r=n}var i=n;Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])((function(){return i.classList.add("ion-activated")}));e()};var c=function(t){if(t===void 0){t=false}if(!n){return}var e=n;Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])((function(){return e.classList.remove("ion-activated")}));if(t&&r!==n){n.click()}n=undefined};return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return i(t.currentX,t.currentY,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"])},onMove:function(t){return i(t.currentX,t.currentY,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"])},onEnd:function(){c(true);Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();r=undefined}})};

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-94e770cc.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/framework-delegate-94e770cc.js ***!
  \******************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-1457892a.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-1457892a.js");
var attachComponent=function(e,t,n,r,o){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0,void 0,void 0,(function(){var a;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(i){switch(i.label){case 0:if(e){return[2,e.attachViewToDom(t,n,o,r)]}if(typeof n!=="string"&&!(n instanceof HTMLElement)){throw new Error("framework delegate is missing")}a=typeof n==="string"?t.ownerDocument&&t.ownerDocument.createElement(n):n;if(r){r.forEach((function(e){return a.classList.add(e)}))}if(o){Object.assign(a,o)}t.appendChild(a);return[4,new Promise((function(e){return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(a,e)}))];case 1:i.sent();return[2,a]}}))}))};var detachComponent=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()};

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-27b3f981.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-27b3f981.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
var HapticEngine={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){var t=window;return!!t.Capacitor},impact:function(t){var i=this.getEngine();if(!i){return}var n=this.isCapacitor()?t.style.toUpperCase():t.style;i.impact({style:n})},notification:function(t){var i=this.getEngine();if(!i){return}var n=this.isCapacitor()?t.style.toUpperCase():t.style;i.notification({style:n})},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();if(!t){return}if(this.isCapacitor()){t.selectionStart()}else{t.gestureSelectionStart()}},selectionChanged:function(){var t=this.getEngine();if(!t){return}if(this.isCapacitor()){t.selectionChanged()}else{t.gestureSelectionChanged()}},selectionEnd:function(){var t=this.getEngine();if(!t){return}if(this.isCapacitor()){t.selectionEnd()}else{t.gestureSelectionEnd()}}};var hapticSelection=function(){HapticEngine.selection()};var hapticSelectionStart=function(){HapticEngine.selectionStart()};var hapticSelectionChanged=function(){HapticEngine.selectionChanged()};var hapticSelectionEnd=function(){HapticEngine.selectionEnd()};var hapticImpact=function(t){HapticEngine.impact(t)};

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/spinner-configs-cd7845af.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/spinner-configs-cd7845af.js ***!
  \***************************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
var spinners={bubbles:{dur:1e3,circles:9,fn:function(r,n,e){var t=r*n/e-r+"ms";var a=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:function(r,n,e){var t=n/e;var a=r*t-r+"ms";var s=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":a}}}},circular:{dur:1400,elmDuration:true,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(r,n){var e=-(110*n)+"ms";return{r:6,style:{left:9-9*n+"px","animation-delay":e}}}},lines:{dur:1e3,lines:12,fn:function(r,n,e){var t="rotate("+(30*n+(n<6?180:-180))+"deg)";var a=r*n/e-r+"ms";return{y1:17,y2:29,style:{transform:t,"animation-delay":a}}}},"lines-small":{dur:1e3,lines:12,fn:function(r,n,e){var t="rotate("+(30*n+(n<6?180:-180))+"deg)";var a=r*n/e-r+"ms";return{y1:12,y2:20,style:{transform:t,"animation-delay":a}}}}};var SPINNERS=spinners;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/core/node_modules/tslib/tslib.es6.js");
var hostContext=function(r,t){return t.closest(r)!==null};var createColorClasses=function(r,t){var e;return typeof r==="string"&&r.length>0?Object.assign((e={"ion-color":true},e["ion-color-"+r]=true,e),t):t};var getClassList=function(r){if(r!==undefined){var t=Array.isArray(r)?r:r.split(" ");return t.filter((function(r){return r!=null})).map((function(r){return r.trim()})).filter((function(r){return r!==""}))}return[]};var getClassMap=function(r){var t={};getClassList(r).forEach((function(r){return t[r]=true}));return t};var SCHEME=/^[a-z][a-z0-9+\-.]*:/;var openURL=function(r,t,e,n){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0,void 0,void 0,(function(){var o;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(a){if(r!=null&&r[0]!=="#"&&!SCHEME.test(r)){o=document.querySelector("ion-router");if(o){if(t!=null){t.preventDefault()}return[2,o.push(r,e,n)]}}return[2,false]}))}))};

/***/ }),

/***/ "./src/app/model/place.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/place.model.ts ***!
  \**************************************/
/*! exports provided: Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
var Place = /** @class */ (function () {
    function Place(id, userId, title, description, image, price) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.image = image;
        this.price = price;
    }
    return Place;
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingsService = /** @class */ (function () {
    function BookingsService(toastController, authService) {
        this.toastController = toastController;
        this.authService = authService;
    }
    /**
     * Get all bookings
     * @returns All bookings
     */
    BookingsService.prototype.getAllBookings = function () {
        return JSON.parse(localStorage.getItem('bookings'));
    };
    /**
     * Get booking by id
     * @param id Id of booking to get
     */
    BookingsService.prototype.getBookingById = function (id) {
        var allBookings = this.getAllBookings();
        return allBookings ? allBookings.find(function (b) { return b.id === id; }) : null;
    };
    /**
     * Get bookings of place
     * @param id Id of booking to get
     * @returns Booking with place id
     */
    BookingsService.prototype.getBookingsOfPlace = function (id) {
        return JSON.parse(localStorage.getItem('bookings')).filter(function (b) { return b.placeId === id; });
    };
    /**
     * Get bookings of current user
     * @returns Booking[] of current user
     */
    BookingsService.prototype.getMyBookings = function () {
        var _this = this;
        var allBookings = this.getAllBookings();
        return allBookings ? allBookings.filter(function (b) { return b.userId === _this.authService.userAuthenticated; }) : [];
    };
    /**
     * Add booking
     * @param booking Booking to add
     */
    BookingsService.prototype.addBooking = function (booking) {
        do {
            booking.id = (Math.floor(Math.random() * 1000)).toString();
        } while (this.getBookingById(booking.id));
        var bookings = this.getAllBookings();
        if (bookings)
            bookings.push(booking);
        else
            bookings = [booking];
        localStorage.setItem('bookings', JSON.stringify(bookings));
        this.toastController.create({
            message: 'Booking created',
            duration: 2000
        }).then(function (toast) { return toast.present(); });
    };
    /**
     * Delete booking
     * @param booking Booking to delete
     */
    BookingsService.prototype.deleteBooking = function (booking) {
        var bookings = this.getAllBookings();
        if (bookings) {
            bookings = bookings.filter(function (b) { return b.id !== booking.id; });
            localStorage.setItem('bookings', JSON.stringify(bookings));
            this.toastController.create({
                message: 'Booking deleted',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        }
    };
    BookingsService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    BookingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], BookingsService);
    return BookingsService;
}());



/***/ }),

/***/ "./src/app/services/photo/photo.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/photo/photo.service.ts ***!
  \*************************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoService = /** @class */ (function () {
    function PhotoService(camera) {
        this.camera = camera;
    }
    /**
     * Take a photo and return the base64 encoded data
     * @returns Promise<string>
     */
    PhotoService.prototype.takePicture = function () {
        var options = {
            quality: 50,
            targetHeight: 200,
            targetWidth: 200,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        return this.camera.getPicture(options);
    };
    /**
     * Upload picture from library
     * @returns Promise<string>
     */
    PhotoService.prototype.uploadPicture = function () {
        var options = {
            quality: 50,
            targetHeight: 200,
            targetWidth: 200,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        return this.camera.getPicture(options);
    };
    PhotoService.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"] }
    ]; };
    PhotoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"]])
    ], PhotoService);
    return PhotoService;
}());



/***/ }),

/***/ "./src/app/services/places/places.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/places/places.service.ts ***!
  \***************************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo/photo.service */ "./src/app/services/photo/photo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacesService = /** @class */ (function () {
    function PlacesService(photoService, authService, toastController) {
        this.photoService = photoService;
        this.authService = authService;
        this.toastController = toastController;
    }
    /**
     * Get all places
     * @returns Place[]
     */
    PlacesService.prototype.getAllPlaces = function () {
        return JSON.parse(localStorage.getItem('places'));
    };
    /**
     * Get place by id
     * @param id Id of place to get
     * @returns Place
     */
    PlacesService.prototype.getPlaceById = function (id) {
        return localStorage.getItem('places') ? this.getAllPlaces().find(function (p) { return p.id === id; }) : null;
    };
    /**
     * Get place by title
     * @param title title of place to get
     */
    PlacesService.prototype.getPlaceByTitle = function (title) {
        return localStorage.getItem('places') ? this.getAllPlaces().find(function (p) { return p.title === title; }) : null;
    };
    /**
     * Get my places
     * @returns Place[] of current user
     */
    PlacesService.prototype.getMyPlaces = function () {
        var _this = this;
        var allPlaces = this.getAllPlaces();
        return allPlaces ? allPlaces.filter(function (b) { return b.userId === _this.authService.userAuthenticated; }) : [];
    };
    /**
     * Add place
     * @param place Place to add
     */
    PlacesService.prototype.addPlace = function (place) {
        if (this.getPlaceByTitle(place.title)) {
            this.toastController.create({
                message: 'Place with the same title already exists',
                duration: 3000
            }).then(function (toast) { return toast.present(); });
            return;
        }
        do {
            place.id = (Math.floor(Math.random() * 1000)).toString();
        } while (this.getPlaceById(place.id));
        // If place doesn't exist already
        var allPlaces = this.getAllPlaces();
        if (allPlaces)
            allPlaces.push(place);
        else
            allPlaces = [place];
        localStorage.setItem('places', JSON.stringify(allPlaces));
        this.toastController.create({
            message: 'Place created',
            duration: 2000
        }).then(function (toast) { return toast.present(); });
    };
    /**
     * Update place
     * @param place Place to update
     * @returns Place
     */
    PlacesService.prototype.updatePlace = function (place) {
        var allPlaces = this.getAllPlaces();
        var index = allPlaces.findIndex(function (p) { return p.id === place.id; });
        if (index !== -1) {
            allPlaces[index] = place;
            localStorage.setItem('places', JSON.stringify(allPlaces));
            this.toastController.create({
                message: 'Place updated',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        }
        else {
            this.toastController.create({
                message: 'Place not found',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        }
    };
    /**
     * Delete place
     * @param place Place to delete
     */
    PlacesService.prototype.deletePlace = function (place) {
        var places = this.getAllPlaces();
        if (places) {
            places = places.filter(function (p) { return p.id !== place.id; });
            localStorage.setItem('places', JSON.stringify(places));
            this.toastController.create({
                message: 'Place deleted',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        }
    };
    PlacesService.ctorParameters = function () { return [
        { type: _photo_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
    ]; };
    PlacesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_photo_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], PlacesService);
    return PlacesService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map