"use strict";

class PhoneGallary {
  constructor(options) {
    this._el = options.el;

    this._phone = phoneFromServ || options.phone;

    this._render();

  }

  _render() {

    let template = document.querySelector('#phone-gallary-template').innerHTML;
    let compiled = _.template(template);

    this._el.innerHTML = compiled({
      phone: this._phone
    });

  }

}
