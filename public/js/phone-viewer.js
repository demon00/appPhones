"use strict";

class PhoneViewer {
  constructor(options) {
    this._el = options.el

    this._phone = phoneFromServ || options.phone;

    this._render();

    this._el.addEventListener('click', this._onButtomClick.bind(this));

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

  _render(){

  let template = document.querySelector('#phone-viewer-template').innerHTML;
  let compiled = _.template(template);

  this._el.innerHTML = compiled({
    phone: this._phone
  });

  }

  _buttomBack() {

      this._catal = document.querySelector('[data-component="phonesCatalogue"]');

      this._catal.classList.remove('catalog__hidden');

      this._el.classList.add('catalog__hidden');

      window.history.back();
  }

  _buttomAdd() {

      let selectedPhoneItem = this._el.querySelector('[data-element="phoneViewerItem"]');

      this._trigger('phoneSelected', selectedPhoneItem.dataset.phoneId);

  }

  _gallery(img) {

    let mainImage = this._el.querySelector('[data-element="phone-main-image"]');

    mainImage.src = img.src;
  }

  _onButtomClick(event) {

    let clickButBack = event.target.closest('[data-element="butBack"]');
    if(clickButBack) {
      this._buttomBack();
    };

    let clickButAdd = event.target.closest('[data-element="butAdd"]');
    if(clickButAdd) {
      this._buttomAdd();
    };

    let clickImage = event.target.closest('[data-phone-src="phone-image"]');
    if(clickImage) {
      this._gallery(clickImage);
    };
  }

}
