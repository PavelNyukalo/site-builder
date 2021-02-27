import {row, col, convertCSS} from "../js/utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}<${tag}>`), convertCSS(styles))
  }
}

class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`), convertCSS(this.options.styles))
  }
}

class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const html = this.value.map(col).join('');
    return row(html, convertCSS(this.options.styles))
  }
}

class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {imageStyles, alt = '', styles} = this.options;
    return row(`<img src="${this.value}" alt="${alt}" style="${convertCSS(imageStyles)}">`, convertCSS(styles))

  }
}

export {TitleBlock, TextBlock, ColumnsBlock, ImageBlock}