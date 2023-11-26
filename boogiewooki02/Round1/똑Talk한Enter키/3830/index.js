const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } 
  else {
    alert('메시지를 입력하세요...');
  }

  input.value = ''; // 초기화
}

send.addEventListener('click', sendMyText);

// 여기에 코드를 작성하세요
function sendMyTextByEnter(e) {
  if (e.key == 'Enter') { // 누르면 키 값이 Enter이면
    sendMyText(); // 함수 실행
  }
}
input.addEventListener('keypress', sendMyTextByEnter); 
// keypress 발생시 뒤에 인자 함수 호출