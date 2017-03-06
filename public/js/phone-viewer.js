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
    document.querySelector('[data-component="phoneGallary"]').classList.add('catalog__hidden');
  }

  _showCatalog() {
    this._catalogComponent = document.querySelector('[data-component="phonesCatalogue"]');
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
