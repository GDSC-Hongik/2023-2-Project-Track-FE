// 여기에 코드를 작성하세요
import { addMenu } from './메뉴 추가 기능 붙이기-add.js';

const data = [];
const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener(
  'keypress',
  (e) => e.code === 'Enter' && addMenu(data)
);
