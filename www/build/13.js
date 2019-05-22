webpackJsonp([13],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, items, modalCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.currentItems = this.items.query();
    }
    /**
     * The view loaded, let's query our items for the list
     */
    HomePage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    HomePage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    /**
     * Delete an item from the list of items.
     */
    HomePage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    HomePage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/fabricio/Projetos/New Nicolae/src/pages/home/home.html"*/'<ion-header no-shadow>\n    <ion-navbar >\n        <ion-title>Olá Joãozinho</ion-title>\n        <ion-buttons end>\n            <ion-icon color="primary" slot="start" name="settings"></ion-icon>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-content [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">\n            <ion-item class="combobox">\n                    <ion-label >Dia da semana:</ion-label>\n                    <ion-select [(ngModel)]="semana">\n                        <ion-option value="1">Segunda</ion-option>\n                        <ion-option value="2">Terça</ion-option>\n                        <ion-option value="3">Quarta</ion-option>\n                        <ion-option value="2">Quinta</ion-option>\n                        <ion-option value="3">Sexta</ion-option>\n                    </ion-select>\n                </ion-item>\n                <p>\n                    Abaixo as aulas do dia:\n                </p>\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="https://nova-escola-producao.s3.amazonaws.com/MVMJFMQjzfQr4s6aJ6nmYTgBTgmPzEmqNCtxzv9P5S3gsZPVKZrQvKh3TqNe/professora-com-cadernos-e-ficharios.jpg">\n                    </ion-avatar>\n                    <h2>\n                        <b>1º Português</b>\n                    </h2>\n                    <h3>Paulinha</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="https://cdnstatic8.com/ripio.com.br/wp-content/uploads/2016/03/camiseta-manga-curta-azul-professor-colecao-2016-001.jpg">\n                    </ion-avatar>\n                    <h2>\n                        <b>2º Matemática</b>\n                    </h2>\n                    <h3>Joslane</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="https://image.shutterstock.com/image-photo/grey-hair-professor-holding-book-260nw-787199356.jpg">\n                    </ion-avatar>\n                    <h2>\n                        <b>3º Geografia </b>\n                    </h2>\n                    <h3>Calos</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="https://image.shutterstock.com/image-photo/grey-hair-professor-holding-book-260nw-787199356.jpg">\n                    </ion-avatar>\n                    <h2>\n                        <b>4º Geografia </b>\n                    </h2>\n                    <h3>Calos</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        <ion-card class="ion-card-lojas">\n            <ion-list no-lines>\n                <ion-item (click)="openAulaInfoModalPage()">\n                    <ion-avatar item-start>\n                        <img src="https://f.i.uol.com.br/fotografia/2018/12/06/15441225585c0970be0be1e_1544122558_3x2_md.jpg">\n                    </ion-avatar>\n                    <h2>\n                        <b>5º Ensino Religioso </b>\n                    </h2>\n                    <h3>Lurdes</h3>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n    </ion-content>\n</ion-content>'/*ion-inline-end:"/home/fabricio/Projetos/New Nicolae/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=13.js.map