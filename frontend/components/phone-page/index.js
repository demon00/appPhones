import PhonesCatalogue from '../phone-catalogue';
import PhoneViewer from '../phone-viewer';
import PhoneGallary from '../phone-gallary';
import ShoppingCart from '../shopping-cart';
import Search from '../search';
import HttpService from '../../services/http-service';

export default class PhonePage {
  constructor(options) {
    this._el = options.el;
    this._phonesViewer = new PhoneViewer({
      el: this._el.querySelector('[data-components="phonesViewer"]')
    });
    this._phoneGallary = new PhoneGallary({
      el: this._el.querySelector('[data-components="phoneGallary"]')
    });
    this._search = new Search({
      el: this._el.querySelector('[data-components="search"]')
    });
    this._shoppingCart = new ShoppingCart({
      el: this._el.querySelector('[data-components="shoppingCart"]')
    });
    this._catalogue = new PhonesCatalogue({
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
      //this._phonesViewer.show();
      this._phoneGallary.show();
    });

    this._phoneGallary.on('click', this._phoneGallary._onImageClick.bind(this));

    this._loadPhones();
  }

  _loadPhones(query = '') {
    let url = '/data/phones.json';

    if (query) {
      url += `?query=${query}`;
    }

    HttpService.request(url, {
      method: 'GET',
      success: (phones) => {
        //hack until server can give filtered results
        query = query.toLowerCase();
        phones = phones.filter(phone => {
          return phone.name.toLowerCase().indexOf(query) !== -1
        });
        //end hack
        this._catalogue.setData(phones);
      },
      error: (error) => {console.error(error)}
    });


    };
}

// const phonesFromServer = [
//   {
//     "age": 0,
//     "id": "motorola-xoom-with-wi-fi",
//     "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
//     "name": "Motorola XOOM\u2122 with Wi-Fi",
//     "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
//   },
//   {
//     "age": 1,
//     "id": "motorola-xoom",
//     "imageUrl": "img/phones/motorola-xoom.0.jpg",
//     "name": "MOTOROLA XOOM\u2122",
//     "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
//   },
//   {
//     "age": 2,
//     "carrier": "AT&T",
//     "id": "motorola-atrix-4g",
//     "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
//     "name": "MOTOROLA ATRIX\u2122 4G",
//     "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
//   },
//   {
//     "age": 3,
//     "id": "dell-streak-7",
//     "imageUrl": "img/phones/dell-streak-7.0.jpg",
//     "name": "Dell Streak 7",
//     "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
//   },
//   {
//     "age": 4,
//     "carrier": "Cellular South",
//     "id": "samsung-gem",
//     "imageUrl": "img/phones/samsung-gem.0.jpg",
//     "name": "Samsung Gem\u2122",
//     "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
//   },
//   {
//     "age": 5,
//     "carrier": "Dell",
//     "id": "dell-venue",
//     "imageUrl": "img/phones/dell-venue.0.jpg",
//     "name": "Dell Venue",
//     "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
//   },
//   {
//     "age": 6,
//     "carrier": "Best Buy",
//     "id": "nexus-s",
//     "imageUrl": "img/phones/nexus-s.0.jpg",
//     "name": "Nexus S",
//     "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
//   },
//   {
//     "age": 7,
//     "carrier": "Cellular South",
//     "id": "lg-axis",
//     "imageUrl": "img/phones/lg-axis.0.jpg",
//     "name": "LG Axis",
//     "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
//   },
//   {
//     "age": 8,
//     "id": "samsung-galaxy-tab",
//     "imageUrl": "img/phones/samsung-galaxy-tab.0.jpg",
//     "name": "Samsung Galaxy Tab\u2122",
//     "snippet": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
//   },
//   {
//     "age": 9,
//     "carrier": "Cellular South",
//     "id": "samsung-showcase-a-galaxy-s-phone",
//     "imageUrl": "img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg",
//     "name": "Samsung Showcase\u2122 a Galaxy S\u2122 phone",
//     "snippet": "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors"
//   },
//   {
//     "age": 10,
//     "carrier": "Verizon",
//     "id": "droid-2-global-by-motorola",
//     "imageUrl": "img/phones/droid-2-global-by-motorola.0.jpg",
//     "name": "DROID\u2122 2 Global by Motorola",
//     "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities."
//   },
//   {
//     "age": 11,
//     "carrier": "Verizon",
//     "id": "droid-pro-by-motorola",
//     "imageUrl": "img/phones/droid-pro-by-motorola.0.jpg",
//     "name": "DROID\u2122 Pro by Motorola",
//     "snippet": "The next generation of DOES."
//   },
//   {
//     "age": 12,
//     "carrier": "AT&T",
//     "id": "motorola-bravo-with-motoblur",
//     "imageUrl": "img/phones/motorola-bravo-with-motoblur.0.jpg",
//     "name": "MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122",
//     "snippet": "An experience to cheer about."
//   },
//   {
//     "age": 13,
//     "carrier": "T-Mobile",
//     "id": "motorola-defy-with-motoblur",
//     "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg",
//     "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
//     "snippet": "Are you ready for everything life throws your way?"
//   },
//   {
//     "age": 14,
//     "carrier": "T-Mobile",
//     "id": "t-mobile-mytouch-4g",
//     "imageUrl": "img/phones/t-mobile-mytouch-4g.0.jpg",
//     "name": "T-Mobile myTouch 4G",
//     "snippet": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
//   },
//   {
//     "age": 15,
//     "carrier": "US Cellular",
//     "id": "samsung-mesmerize-a-galaxy-s-phone",
//     "imageUrl": "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg",
//     "name": "Samsung Mesmerize\u2122 a Galaxy S\u2122 phone",
//     "snippet": "The Samsung Mesmerize\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance,even outdoors"
//   },
//   {
//     "age": 16,
//     "carrier": "Sprint",
//     "id": "sanyo-zio",
//     "imageUrl": "img/phones/sanyo-zio.0.jpg",
//     "name": "SANYO ZIO",
//     "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
//   },
//   {
//     "age": 17,
//     "id": "samsung-transform",
//     "imageUrl": "img/phones/samsung-transform.0.jpg",
//     "name": "Samsung Transform\u2122",
//     "snippet": "The Samsung Transform\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \u201cSprint ID Service Pack\u201d."
//   },
//   {
//     "age": 18,
//     "id": "t-mobile-g2",
//     "imageUrl": "img/phones/t-mobile-g2.0.jpg",
//     "name": "T-Mobile G2",
//     "snippet": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
//   },
//   {
//     "age": 19,
//     "id": "motorola-charm-with-motoblur",
//     "imageUrl": "img/phones/motorola-charm-with-motoblur.0.jpg",
//     "name": "Motorola CHARM\u2122 with MOTOBLUR\u2122",
//     "snippet": "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
//   }
// ];
// const phoneFromServ = [
//   {
//     "additionalFeatures": "Sensors: proximity, ambient light, barometer, gyroscope",
//     "android": {
//       "os": "Android 3.0",
//       "ui": "Honeycomb"
//     },
//     "availability": [
//       ""
//     ],
//     "battery": {
//       "standbyTime": "336 hours",
//       "talkTime": "24 hours",
//       "type": "Other ( mAH)"
//     },
//     "camera": {
//       "features": [
//         "Flash",
//         "Video"
//       ],
//       "primary": "5.0 megapixels"
//     },
//     "connectivity": {
//       "bluetooth": "Bluetooth 2.1",
//       "cell": "",
//       "gps": true,
//       "infrared": false,
//       "wifi": "802.11 b/g/n"
//     },
//     "description": "Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
//     "display": {
//       "screenResolution": "WXGA (1200 x 800)",
//       "screenSize": "10.1 inches",
//       "touchScreen": true
//     },
//     "hardware": {
//       "accelerometer": true,
//       "audioJack": "3.5mm",
//       "cpu": "1 GHz Dual Core Tegra 2",
//       "fmRadio": false,
//       "physicalKeyboard": false,
//       "usb": "USB 2.0"
//     },
//     "id": "motorola-xoom-with-wi-fi",
//     "images": [
//       "img/phones/motorola-xoom-with-wi-fi.0.jpg",
//       "img/phones/motorola-xoom-with-wi-fi.1.jpg",
//       "img/phones/motorola-xoom-with-wi-fi.2.jpg",
//       "img/phones/motorola-xoom-with-wi-fi.3.jpg",
//       "img/phones/motorola-xoom-with-wi-fi.4.jpg",
//       "img/phones/motorola-xoom-with-wi-fi.5.jpg"
//     ],
//     "name": "Motorola XOOM\u2122 with Wi-Fi",
//     "sizeAndWeight": {
//       "dimensions": [
//         "249.1 mm (w)",
//         "167.8 mm (h)",
//         "12.9 mm (d)"
//       ],
//       "weight": "708.0 grams"
//     },
//     "storage": {
//       "flash": "32000MB",
//       "ram": "1000MB"
//     }
//   }];