import Component from '../component';
import compiledTemplate from './template.hbs';
import './style.css';

export default class PhoneDetail extends Component{
  constructor(options) {
    super(options.el)
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

}
