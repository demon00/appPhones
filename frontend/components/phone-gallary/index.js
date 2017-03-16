import Component from '../component';
import compiledTemplate from './template.hbs';

export default class PhoneGallary extends Component{
  constructor(options) {
    super(options.el);

    this._el.addEventListener('click', this._onImageClick.bind(this));
  }

  setData(phone) {
    this._phone = phone.images;
    this._render();
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      phone: this._phone
    });
  }

  _onImageClick(event) {
    this._clickImage = event.target.closest('[data-phone-src="phone-image"]');

    if(this._clickImage) {

      let phoneViewerComponent = document.querySelector('[data-component="phoneViewer"]');

      let mainImage = phoneViewerComponent.querySelector('[data-element="phone-main-image"]');

      mainImage.src = this._clickImage.src;
    }
  }
}
