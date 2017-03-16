import Component from '../component';
import compiledTemplate from './template.hbs';
import './style.css';

export default class ShoppingCart extends Component {
  constructor(options) {
    super(options.el);

    this._items = [];

    this._render();
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      orderItems: this._items
    });
  }

  addItem(item) {
    this._items.push(item);
    this._render();
  }
}