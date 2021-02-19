const model = [
  {type: 'title', value: 'Hello World'},

  {type: 'text', value: 'some text'
  },

  {type: 'colums', value: [
      'test',
      'test2',
      'test3',
      'test4',
    ]
  },
  {type: 'image', value: '../img/mountain.jpg'}
]

const site = document.querySelector('#site');

model.forEach(block => {
  let html = '';

  if (block.type === 'title') {
    html = createTitle(block);
  } else if (block.type === 'text') {
    html = createText(block);
  } else if (block.type === 'columns') {
    html = createColumns(block);
  } else if (block.type === 'image') {
    html = createImage(block);
  }

  site.insertAdjacentHTML('beforeend', html);
});


function createTitle(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `
}

function createText(block) {
  return `
    <div class="row">
     <div class="col-sm">
      <p>${block.value}</p>
      </div>
    </div>
  `
}

function createColumns(block) {
  const html = block.value.map(item => {
    `
      <div class="col-sm">
        ${item}
      </div>
    `
  })
  return `
    <div class="row">
      ${html.join('')}
    </div>
  `
}

function createImage(block) {
  return `
    <div class="row">
     <img src="${block.value}">
    </div>
  `
}

