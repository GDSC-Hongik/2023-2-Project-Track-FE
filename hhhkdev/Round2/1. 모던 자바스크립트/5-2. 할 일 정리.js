const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];

// 여기에 코드를 작성해 주세요.
data.forEach((elm, index) => {
  const item = document.createElement("li")
  item.classList.add('item')
  if (elm.isClear===true){
    item.classList.add('done')
  }
  item.textContent = `${index+1}. ${elm.title}`
  list.appendChild(item)
})