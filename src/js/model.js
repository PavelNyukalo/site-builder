import image from '../img/mountain.jpg';
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from '../classes/blocks';

const model = [
  new TitleBlock('Конструктор сайтов на чистом JS', {
    tag: 'h2',
    styles: {
      padding: '1.5rem',
      color: '#fff',
      'text-align': 'center',
      background: 'linear-gradient(to right, #ff0099, #493240)',
    }
  }),

  new TextBlock('some text', {
    styles: {
      padding: '1rem',
      'font-weight': 'bold',
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
    }
  }),

  new ColumnsBlock([
      'Саня привет как дела',
      'Принципы SOLID и ООП',
      'Саня как дела',
    ], {
      styles: {
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      }
    }
  ),

  new ImageBlock(image, {
    styles: {
      display: 'flex',
      'justify-content': 'center',
      padding: '2rem 0',
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
]

export {model}