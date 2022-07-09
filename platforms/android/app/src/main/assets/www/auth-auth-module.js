(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Authentification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <h1>Connexion</h1>\r\n  <form (ngSubmit)=\"onSubmit(this.formAuth)\" [formGroup]=\"formAuth\">\r\n    <ion-row>\r\n      <ion-col sizeSm=\"4\" offsetSm=\"3\">\r\n        <ion-list>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Username (min 3 car.)</ion-label>\r\n            <ion-input type=\"text\" name=\"username\" autocomplete autocorrect formControlName=\"username\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Mot de Passe (min 8 car.)</ion-label>\r\n            <ion-input id=\"password\" type=\"password\" name=\"password\" autocomplete autocorrect\r\n              formControlName=\"password\"></ion-input>\r\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"toggleShow()\">\r\n              <ion-icon [hidden]=\"showPassword\" name=\"eye-outline\"></ion-icon>\r\n              <ion-icon [hidden]=\"!showPassword\" name=\"eye-off-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col sizeSm=\"3\" offsetSm=\"4\">\r\n        <ion-button color=\"primary\" type=\"submit\" (click)=\"onLogin()\">\r\n          Connexion\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n\r\n  <h1>Créer un User</h1>\r\n  <form (ngSubmit)=\"onCreateUser()\" [formGroup]=\"formUser\">\r\n    <ion-row>\r\n      <ion-col sizeSm=\"4\" offsetSm=\"3\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Username (min 3 car.)</ion-label>\r\n          <ion-input type=\"text\" name=\"username\" autocomplete autocorrect formControlName=\"username\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Mot de Passe (min 8 car.)</ion-label>\r\n          <ion-input id=\"password\" type=\"password\" name=\"password\" autocomplete autocorrect formControlName=\"password\">\r\n          </ion-input>\r\n          <ion-button slot=\"end\" fill=\"clear\" (click)=\"toggleShow()\">\r\n            <ion-icon [hidden]=\"showPassword\" name=\"eye-outline\"></ion-icon>\r\n            <ion-icon [hidden]=\"!showPassword\" name=\"eye-off-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col sizeSm=\"3\" offsetSm=\"4\">\r\n        <ion-button color=\"primary\" type=\"submit\">Créer User</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n  <h1>Liste des Users</h1>\r\n  <p>Les mots de passe sont en clair pour indication, en réalité il ne faudrait pas les mettre ici, ni afficher la liste des utilisateurs :)</p>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>ID</ion-col>\r\n      <ion-col>Username</ion-col>\r\n      <ion-col>Password</ion-col>\r\n      <ion-col>Action</ion-col>\r\n    </ion-row>\r\n    <ion-row *ngFor=\"let user of users\">\r\n      <ion-col>{{user.id}}</ion-col>\r\n      <ion-col>{{user.username}}</ion-col>\r\n      <ion-col>{{user.password}}</ion-col>\r\n      <ion-col>\r\n        <ion-item-option color=\"danger\" (click)=\"onDeleteUser(user)\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_5__["AuthPage"]
    }
];
var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_5__["AuthPage"]]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.page.scss":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-row:first-child {\n  background-color: #c0c0c0;\n  font-weight: bold;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9EOlxcTG9jYWxSZXBvc2l0b3J5XFxpb25pYy1BaXJCbkIvc3JjXFxhcHBcXGF1dGhcXGF1dGgucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoL2F1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjtBRENFO0VBQ0UsNkJBQUE7QUNDSjtBREVFO0VBQ0UsOEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zdHlsZTogaGlkZGVuO1xyXG5cclxuICBpb24tcm93OmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgaW9uLWNvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIGlvbi1jb2w6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcblxyXG4gIGlvbi1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5pb24tZ3JpZCBpb24tcm93OmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tZ3JpZCBpb24tY29sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cbmlvbi1ncmlkIGlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xufVxuaW9uLWdyaWQgaW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/auth.page.ts":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
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






var AuthPage = /** @class */ (function () {
    function AuthPage(authService, router, loadingCtrl, alertController, userService, toastController) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.userService = userService;
        this.toastController = toastController;
        this.isLoading = false;
        this.showPassword = false;
    }
    AuthPage.prototype.ngOnInit = function () { this.generateFormValidation(); this.users = this.userService.getAllUsers(); };
    /**
     * Generate form validation
     */
    AuthPage.prototype.generateFormValidation = function () {
        this.formAuth = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]
            })
        });
        this.formUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]
            })
        });
    };
    /**
     * Display loading spinner
     */
    AuthPage.prototype.onLogin = function () {
        var _this = this;
        this.isLoading = true;
        this.loadingCtrl.create({ keyboardClose: true, message: 'Authentification en cours...' })
            .then(function (loadingEl) {
            loadingEl.present();
            setTimeout(function () {
                _this.isLoading = false;
                loadingEl.dismiss();
            }, 1000);
        });
    };
    /**
     * Handle submitted auth form
     * @param form FormGroup to handle
     * If auth is correct, reset form and redirect to home page
     * If auth is incorrect, display error message
     */
    AuthPage.prototype.onSubmit = function (form) {
        if (!form.valid) {
            return;
        }
        var username = form.value.username;
        var password = form.value.password;
        this.authService.login(username, password);
        if (this.authService.userIsAuthenticated) {
            form.reset(); // Vider le formulaire (sinon, à la deconnexion, les infos sont toujours remplies)
            this.router.navigateByUrl('/places/tabs/discover');
            this.toastController.create({
                message: 'Authentification réussie',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        }
        else {
            this.toastController.create({
                message: 'Identifiants incorrects',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        }
    };
    /**
     * Toggle show password
     */
    AuthPage.prototype.toggleShow = function () {
        this.showPassword = !this.showPassword;
        var pwdInput = document.getElementById('password');
        if (pwdInput)
            pwdInput.type = this.showPassword ? 'text' : 'password';
    };
    /**
     * Create user
     */
    AuthPage.prototype.onCreateUser = function () {
        if (!this.formUser.valid) {
            return;
        }
        var username = this.formUser.value.username;
        var password = this.formUser.value.password;
        this.userService.createUser(username, password);
        this.users = this.userService.getAllUsers();
    };
    /**
     * Delete user
     * @param user User to delete
     */
    AuthPage.prototype.onDeleteUser = function (user) {
        var _this = this;
        this.alertController.create({
            header: 'Confirmation',
            message: "Voulez-vous vraiment supprimer " + user.username + " ?",
            buttons: [
                { text: 'Annuler', role: 'cancel' },
                { text: 'Supprimer', handler: function () { _this.userService.deleteUser(user); _this.users = _this.userService.getAllUsers(); } }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    AuthPage.ctorParameters = function () { return [
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _services_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    AuthPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __importDefault(__webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./auth.page.scss */ "./src/app/auth/auth.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], AuthPage);
    return AuthPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map