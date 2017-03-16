import Component from '../component';
import compiledTemplate from './template.hbs';
import './style.css';

export default class PhoneViewer extends Component{
  constructor(options) {
    super(options.el);
    this._el.addEventListener('click', this._onButtonClick.bind(this));
  }

  setData(phone) {
    this._phone = phone;
    this._render();
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      phone: this._phone
    });
  }

  _hideItemComponent() {
    this._el.classList.add('js-hidden');
    document.querySelector('[data-component="phoneGallary"]').classList.add('js-hidden');
  }

  _showCatalog() {
    let catalogComponent = document.querySelector('[data-component="phoneCatalogue"]');
    catalogComponent.classList.remove('js-hidden');
  }

  _addToBasket() {
    let selectedPhoneItem = this._el.querySelector('[data-element="phoneViewerItem"]');
    console.log(selectedPhoneItem.dataset.phoneId);
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
