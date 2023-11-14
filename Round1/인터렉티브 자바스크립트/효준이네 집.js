//showTitle 함수
function showTitle(e) {
  if (e.target.dataset.title) {
    const span = document.createElement('span');
    span.classList.add('title');
    span.textContent = e.target.dataset.title;
    e.target.append(span);
  }
}

//removeTitle 함수
function removeTitle(e) {
  if (e.target.dataset.title) {
    e.target.lastElementChild.remove();
  }
}

//대상, 타입 수정하기
const map = document.querySelector('.map');
map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);
