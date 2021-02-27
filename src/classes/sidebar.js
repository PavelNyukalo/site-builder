import {block} from "../js/utils";
import {TitleBlock, TextBlock} from "./blocks";

class Sidebar {
  constructor(selector, updateCallback) {
    this.el = document.querySelector(selector);

    this.update = updateCallback;
    this.init();
  }

  init() {
    this.el.insertAdjacentHTML('afterbegin', this.template);
    this.el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      block('title'),
      block('text'),
    ].join('')
  }

  add(evt) {
    evt.preventDefault();

    const type = evt.target.name;
    const value = evt.target.value.value;
    const styles = evt.target.styles.value;

    const newBlock = type === 'text'
      ? new TextBlock(value, {styles})
      : new TitleBlock(value, {styles})

    this.update(newBlock);

    evt.target.value.value = '';
    evt.target.styles.value = '';
  }
}



export {Sidebar}