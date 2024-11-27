import jsLogo from './assets/JavaScript.png';
import './index.css';

console.log(jsLogo);

console.log('Hello World!');

const h1 = document.createElement('h1');
const body = document.querySelector('body');
h1.textContent = 'I love JavaScript';
body.append(h1);

const jsImageHtml = document.createElement('img');
jsImageHtml.src = jsLogo;
jsImageHtml.className = 'image';
body.append(jsImageHtml);