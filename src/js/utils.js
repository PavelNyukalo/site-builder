function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`
}

function col(content) {
  return `<div class="col-sm">${content}</div>`
}

function convertCSS(styles = {}) {
  if (typeof styles === 'string') {
    return styles
  }
  const toString = (key) => {
   return `${key}: ${styles[key]}`;
  }

  return Object.keys(styles).map(toString).join(';');
}

function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="input-group mb-3">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
     <div class="input-group mb-3">
      <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr>
  `
}

export {row, col, convertCSS, block}