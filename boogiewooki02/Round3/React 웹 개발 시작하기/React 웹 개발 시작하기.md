### 기본 명령어
- npm init react-app <폴더이름> 
혹은 폴더를 vscode로 열고 터미널에서 npm init react-app .

- 개발 모드 실행
npm run start

- 개발 모드 종료
Ctrl + C

## JSX 문법
: js로 html과 같은 문법을 사용할 수 있는 기능 제공

** 지켜야 할 규칙 **
1. 속성명은 카멜 케이스로 작성
2. js 예약어와 같은 속성명 사용 불가
예시: class 대신 className 사용
** 반드시 하나의 요소로 감싸기 - Fragement **
** js 표현식 넣기 **
중괄호 ({}) 를 활용하여 넣는다.
```js
import ReactDOM from 'react-dom';

const product = 'MacBook';
const model = 'Air';
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png'

function handleClick(e) {
  alert('곧 도착합니다!');
}

ReactDOM.render(
  <>
    <h1>{product + ' ' + model} 주문하기</h1>
    <img src={imageUrl} alt="제품 사진" />
    <button onClick={handleClick}>확인</button>
  </>,
  document.getElementById('root')
);
```