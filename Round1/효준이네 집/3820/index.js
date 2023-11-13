// showTitle 함수를 완성해 주세요
function showTitle(e) {
	// 여기에 코드를 작성하세요
	if(e.target.dataset.title) {
		const newElement = document.createElement('span');
		newElement.className = 'title';
		newElement.textContent = e.target.dataset.title;
		e.target.append(newElement);
	}
}

// removeTitle 함수를 완성해 주세요
function removeTitle(e) {
	// 여기에 코드를 작성하세요
	if(e.target.dataset.title) {
		e.target.lastElementChild.remove();
	}
}

const map = document.querySelector('.map');

// '대상'과 '타입'을 수정해 주세요
map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);