/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phone_catalogue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_viewer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_gallary__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_cart__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search__ = __webpack_require__(4);






const phonesFromServer = [
  {
    "age": 0,
    "id": "motorola-xoom-with-wi-fi",
    "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
    "name": "Motorola XOOM\u2122 with Wi-Fi",
    "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
  },
  {
    "age": 1,
    "id": "motorola-xoom",
    "imageUrl": "img/phones/motorola-xoom.0.jpg",
    "name": "MOTOROLA XOOM\u2122",
    "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
  },
  {
    "age": 2,
    "carrier": "AT&T",
    "id": "motorola-atrix-4g",
    "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
    "name": "MOTOROLA ATRIX\u2122 4G",
    "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
  },
  {
    "age": 3,
    "id": "dell-streak-7",
    "imageUrl": "img/phones/dell-streak-7.0.jpg",
    "name": "Dell Streak 7",
    "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
  },
  {
    "age": 4,
    "carrier": "Cellular South",
    "id": "samsung-gem",
    "imageUrl": "img/phones/samsung-gem.0.jpg",
    "name": "Samsung Gem\u2122",
    "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
  },
  {
    "age": 5,
    "carrier": "Dell",
    "id": "dell-venue",
    "imageUrl": "img/phones/dell-venue.0.jpg",
    "name": "Dell Venue",
    "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
  },
  {
    "age": 6,
    "carrier": "Best Buy",
    "id": "nexus-s",
    "imageUrl": "img/phones/nexus-s.0.jpg",
    "name": "Nexus S",
    "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
  },
  {
    "age": 7,
    "carrier": "Cellular South",
    "id": "lg-axis",
    "imageUrl": "img/phones/lg-axis.0.jpg",
    "name": "LG Axis",
    "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
  },
  {
    "age": 8,
    "id": "samsung-galaxy-tab",
    "imageUrl": "img/phones/samsung-galaxy-tab.0.jpg",
    "name": "Samsung Galaxy Tab\u2122",
    "snippet": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
  },
  {
    "age": 9,
    "carrier": "Cellular South",
    "id": "samsung-showcase-a-galaxy-s-phone",
    "imageUrl": "img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg",
    "name": "Samsung Showcase\u2122 a Galaxy S\u2122 phone",
    "snippet": "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors"
  },
  {
    "age": 10,
    "carrier": "Verizon",
    "id": "droid-2-global-by-motorola",
    "imageUrl": "img/phones/droid-2-global-by-motorola.0.jpg",
    "name": "DROID\u2122 2 Global by Motorola",
    "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities."
  },
  {
    "age": 11,
    "carrier": "Verizon",
    "id": "droid-pro-by-motorola",
    "imageUrl": "img/phones/droid-pro-by-motorola.0.jpg",
    "name": "DROID\u2122 Pro by Motorola",
    "snippet": "The next generation of DOES."
  },
  {
    "age": 12,
    "carrier": "AT&T",
    "id": "motorola-bravo-with-motoblur",
    "imageUrl": "img/phones/motorola-bravo-with-motoblur.0.jpg",
    "name": "MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122",
    "snippet": "An experience to cheer about."
  },
  {
    "age": 13,
    "carrier": "T-Mobile",
    "id": "motorola-defy-with-motoblur",
    "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg",
    "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
    "snippet": "Are you ready for everything life throws your way?"
  },
  {
    "age": 14,
    "carrier": "T-Mobile",
    "id": "t-mobile-mytouch-4g",
    "imageUrl": "img/phones/t-mobile-mytouch-4g.0.jpg",
    "name": "T-Mobile myTouch 4G",
    "snippet": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
  },
  {
    "age": 15,
    "carrier": "US Cellular",
    "id": "samsung-mesmerize-a-galaxy-s-phone",
    "imageUrl": "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg",
    "name": "Samsung Mesmerize\u2122 a Galaxy S\u2122 phone",
    "snippet": "The Samsung Mesmerize\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance,even outdoors"
  },
  {
    "age": 16,
    "carrier": "Sprint",
    "id": "sanyo-zio",
    "imageUrl": "img/phones/sanyo-zio.0.jpg",
    "name": "SANYO ZIO",
    "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
  },
  {
    "age": 17,
    "id": "samsung-transform",
    "imageUrl": "img/phones/samsung-transform.0.jpg",
    "name": "Samsung Transform\u2122",
    "snippet": "The Samsung Transform\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \u201cSprint ID Service Pack\u201d."
  },
  {
    "age": 18,
    "id": "t-mobile-g2",
    "imageUrl": "img/phones/t-mobile-g2.0.jpg",
    "name": "T-Mobile G2",
    "snippet": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
  },
  {
    "age": 19,
    "id": "motorola-charm-with-motoblur",
    "imageUrl": "img/phones/motorola-charm-with-motoblur.0.jpg",
    "name": "Motorola CHARM\u2122 with MOTOBLUR\u2122",
    "snippet": "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
  }
];
const phoneFromServ = [
  {
    "additionalFeatures": "Sensors: proximity, ambient light, barometer, gyroscope",
    "android": {
      "os": "Android 3.0",
      "ui": "Honeycomb"
    },
    "availability": [
      ""
    ],
    "battery": {
      "standbyTime": "336 hours",
      "talkTime": "24 hours",
      "type": "Other ( mAH)"
    },
    "camera": {
      "features": [
        "Flash",
        "Video"
      ],
      "primary": "5.0 megapixels"
    },
    "connectivity": {
      "bluetooth": "Bluetooth 2.1",
      "cell": "",
      "gps": true,
      "infrared": false,
      "wifi": "802.11 b/g/n"
    },
    "description": "Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
    "display": {
      "screenResolution": "WXGA (1200 x 800)",
      "screenSize": "10.1 inches",
      "touchScreen": true
    },
    "hardware": {
      "accelerometer": true,
      "audioJack": "3.5mm",
      "cpu": "1 GHz Dual Core Tegra 2",
      "fmRadio": false,
      "physicalKeyboard": false,
      "usb": "USB 2.0"
    },
    "id": "motorola-xoom-with-wi-fi",
    "images": [
      "img/phones/motorola-xoom-with-wi-fi.0.jpg",
      "img/phones/motorola-xoom-with-wi-fi.1.jpg",
      "img/phones/motorola-xoom-with-wi-fi.2.jpg",
      "img/phones/motorola-xoom-with-wi-fi.3.jpg",
      "img/phones/motorola-xoom-with-wi-fi.4.jpg",
      "img/phones/motorola-xoom-with-wi-fi.5.jpg"
    ],
    "name": "Motorola XOOM\u2122 with Wi-Fi",
    "sizeAndWeight": {
      "dimensions": [
        "249.1 mm (w)",
        "167.8 mm (h)",
        "12.9 mm (d)"
      ],
      "weight": "708.0 grams"
    },
    "storage": {
      "flash": "32000MB",
      "ram": "1000MB"
    }
  }];

class PhonePage {
  constructor(options) {
    this._el = options.el;
    this._phonesViewer = new __WEBPACK_IMPORTED_MODULE_1__phone_viewer__["a" /* default */]({
      el: this._el.querySelector('[data-components="phonesViewer"]')
    });
    this._phoneGallary = new __WEBPACK_IMPORTED_MODULE_2__phone_gallary__["a" /* default */]({
      el: this._el.querySelector('[data-components="phoneGallary"]')
    });
    this._search = new __WEBPACK_IMPORTED_MODULE_4__search__["a" /* default */]({
      el: this._el.querySelector('[data-components="search"]')
    });
    this._shoppingCart = new __WEBPACK_IMPORTED_MODULE_3__shopping_cart__["a" /* default */]({
      el: this._el.querySelector('[data-components="shoppingCart"]')
    });
    this._catalogue = new __WEBPACK_IMPORTED_MODULE_0__phone_catalogue__["a" /* default */]({
      el: this._el.querySelector('[data-components="phonesCatalogue"]')
    });

    this._catalogue.setData(phonesFromServer);

    this._search.on('valueChanged', (event) => {
      let query = event.detail;
      this._loadPhones(query)
    });

    this._phonesViewer.on('phoneSelected', event => {
      this._shoppingCart.addItem(event.detail);
    });

    this._catalogue.on('phonesViewerHidden', event => {
      this._catalogue.hide(event.detail);
      this._phonesViewer.show();
      this._phoneGallary.show();
    });

    this._phoneGallary.on('click', this._phoneGallary._onImageClick.bind(this));

    this._loadPhones();
  }

  _loadPhones(query = '') {
    // 1. Создаём новый объект XMLHttpRequest
    let xhr = new XMLHttpRequest();
    let url = '/data/phones.json';
    if (query) {
      url += `?query=${query}`;
    }
    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', url, true); // всегда true - запрос был асинхронный
    xhr.onload = () => {
      let phones = JSON.parse(xhr.responseText);
      //hack until server can give filtered results
      query = query.toLowerCase();
      phones = phones.filter(phone => {
        return phone.name.toLowerCase().indexOf(query) !== -1
      });
      //end hack
// 4. Если код ответа сервера не 200, то это ошибка
      if (xhr.status != 200) {
        // обработать ошибку
        console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
      } else {
        // вывести результат
        //console.log( phones ); // responseText -- текст ответа.
      }
      ;
      this._catalogue.setData(phones);
    };
    // 5. Отсылаем запрос
    xhr.send();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PhonePage;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PhonesCatalogue {
  constructor(options) {
    this._el = options.el;
    this._phones = options.phones || [];
    this._render();
    this._el.addEventListener('click', this._onPhoneClick.bind(this));
  }

  setData(phones) {
    this._phones = phones;
    this._render();
  }

  on(eventName, handler) {
    this._el.addEventListener(eventName, handler);
  }

  off(eventName, handler) {
    this._el.removeEventListener(eventName, handler);
  }

  _trigger(eventName, data) {
    let myEvent = new CustomEvent(eventName, {
      detail: data
    });
    this._el.dispatchEvent(myEvent);
  }

  hide(item) {
    this._el.classList.add(item);
  }

  _render() {
    let template = document.querySelector('#phone-catalogue-template').innerHTML;
    let compiled = _.template(template);
    this._el.innerHTML = compiled({
      phones: this._phones
    });
  }

  _onPhoneClick(event) {
    let phoneItemLink = event.target.closest('[data-element="phoneItemLink"]');
    if (!phoneItemLink) {
      return;
    }
    let selectedPhoneItem = phoneItemLink.closest('[data-element="phoneItem"]');
    this._trigger('phonesViewerHidden', 'catalog__hidden');
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PhonesCatalogue;





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PhoneGallary {
  constructor(options) {
    this._el = options.el;
    this._phone = phoneFromServ || options.phone;
    this._render();
  }

  show() {
    this._el.classList.remove('catalog__hidden');
  }

  on(eventName, handler) {
    this._el.addEventListener(eventName, handler);
  }

  off(eventName, handler) {
    this._el.removeEventListener(eventName, handler);
  }

  // _trigger(eventName, data) {
  //   let myEvent = new CustomEvent(eventName, {
  //     detail: data
  //   });
  //   this._el.dispatchEvent(myEvent);
  // }

  _render() {
    let template = document.querySelector('#phone-gallary-template').innerHTML;
    let compiled = _.template(template);
    this._el.innerHTML = compiled({
      phone: this._phone
    });
  }

  _onImageClick(event) {
    this._clickImage = event.target.closest('[data-phone-src="phone-image"]');
    if(this._clickImage) {
      let phoneViewerComponent = document.querySelector('[data-components="phonesViewer"]');
      let mainImage = phoneViewerComponent.querySelector('[data-element="phone-main-image"]');
      mainImage.src = this._clickImage.src;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PhoneGallary;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PhoneViewer {
  constructor(options) {
    this._el = options.el
    this._phone = phoneFromServ || options.phone;
    this._render();
    this._el.addEventListener('click', this._onButtonClick.bind(this));
  }

  show() {
    this._el.classList.remove('catalog__hidden');
  }

  on(eventName, handler) {
    this._el.addEventListener(eventName, handler);
  }

  off(eventName, handler) {
    this._el.removeEventListener(eventName, handler);
  }

  _trigger(eventName, data) {
    let myEvent = new CustomEvent(eventName, {
      detail: data
    });
    this._el.dispatchEvent(myEvent);
  }

  _render() {
    let template = document.querySelector('#phone-viewer-template').innerHTML;
    let compiled = _.template(template);
    this._el.innerHTML = compiled({
      phone: this._phone
    });
  }

  _hideItemComponent() {
    this._el.classList.add('catalog__hidden');
    document.querySelector('[data-components="phoneGallary"]').classList.add('catalog__hidden');
  }

  _showCatalog() {
    this._catalogComponent = document.querySelector('[data-components="phonesCatalogue"]');
    this._catalogComponent.classList.remove('catalog__hidden');
  }

  _addToBasket() {
    let selectedPhoneItem = this._el.querySelector('[data-element="phoneViewerItem"]');
    this._trigger('phoneSelected', selectedPhoneItem.dataset.phoneId);
  }

  _onButtonClick(event) {
    let clickButtonBack = event.target.closest('[data-element="butBack"]');
    if (clickButtonBack) {
      window.history.back();
      this._showCatalog();
      this._hideItemComponent();
    }
    let clickButtonAdd = event.target.closest('[data-element="butAdd"]');
    if (clickButtonAdd) {
      this._addToBasket();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PhoneViewer;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Search {
  constructor(options) {
    this._el = options.el
    this._field = this._el.querySelector('[data-element="field"]');

    this._field.addEventListener('input', this._onFieldInput.bind(this));
  }

  on(eventName, handler) {

    this._el.addEventListener(eventName, handler);
  }

  off(eventName, handler) {

    this._el.removeEventListener(eventName, handler);

  }

  _trigger(eventName, data) {

    let myEvent = new CustomEvent(eventName, {
      detail: data
    });

    this._el.dispatchEvent(myEvent);

  }

  _onFieldInput() {
    this._trigger('valueChanged', this._field.value);
 }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Search;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ShoppingCart{
  constructor(options) {
    this._el = options.el;
    this._items = [];
    this._render();
  }

  _render(){
    let template = document.querySelector('#shopping-cart-template').innerHTML;
    let compiled = _.template(template);

    this._el.innerHTML = compiled({
      orderItems: this._items
    });

  }

  addItem(item) {
    this._items.push(item);
    this._render();
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShoppingCart;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_phone_page__ = __webpack_require__(0);


let page = new __WEBPACK_IMPORTED_MODULE_0__components_phone_page__["a" /* default */]({
  el: document.body
});











/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map