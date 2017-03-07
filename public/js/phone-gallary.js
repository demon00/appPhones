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
      let phoneViewerComponent = document.querySelector('[data-component="phonesViewer"]');
      let mainImage = phoneViewerComponent.querySelector('[data-element="phone-main-image"]');
      mainImage.src = this._clickImage.src;
    }
  }
}
