# \***\*React 웹 개발 시작하기\*\***

### vscode에서 프로젝트를 생성하는 명령어

```jsx
// react-app 설치
npm init react-app .
// 개발 모드 실행
npm run start
// 개발 모드 종료
ctrl + c
// 개발된 프로젝트 빌드하기
npm run build
// 빌드한 것 로컬에서 실행하기
npx serve build
```

### JSX: 자바스크립트의 확장 문법

- 지켜야 할 규칙

  1. 속성명은 카멜 케이스로 작성
  2. 자바스크립트 예약어와 같은 속성명은 사용할 수 없다
  3. 반드시 하나의 요소로 감싼다. 부모 요소를 감싸서 하나의 요소로 만들거나 <Fragment> 혹은 <> 빈 태그 이용
  4. 자바스크립트 표현식 넣기 {중괄호} 이용하기

- 컴포넌트 문법
  - JSX문법으로 작성한 요소는 결과적으로 자바스크립트의 객체가 된다 = 리액트 엘리먼트
  - 이를 ReactDOM.render 함수의 아규먼트로 전달하게 되면, 리액트가 객체 형태의 값을 해석해서 HTML 형태로 브라우저에 띄워준다. -> 리액트로 화면을 그려내는데 가장 기본적인 요소
- 리액트 컴포넌트 - 리액트 엘리먼트를 더 자유롭게 다루기 위한 문법
  - 컴포넌트를 만드는 가장 간단한 방법
    - 자바스크립트의 함수 이용
      - 컴포넌트 함수 이름(반드시 첫 글자를 대문자로 작성해야 함!)을 하나의 태그처럼 활용할 수 있다.
- Props(Properties): 컴포넌트에 속성을 지정해주면 각 속성이 하나의 객체로 모여서 컴포넌트를 정의한 함수의 첫 번째 파라미터로 전달된다.

### UseState

**초깃값 지정하기**

```tsx
const [state, setState] = useState(initialState);

// useState 함수에 값을 전달
```

**콜백으로 초깃값 지정하기**

```tsx
const [state, setState] = useState(() => {
  // 초기값을 계산
  return initialState;
});

// 주의할 점은 이 콜백 함수가 리턴할 때까지 리액트가 렌더링하지 않고 기다린다
// 콜백 함수의 실행이 오래 걸릴 수록 초기 렌더링이 늦어진다
```

**Setter 함수 사용하기**

**기본**

```tsx
const [state, setState] = useState(0);

const handleAddClick = () => {
  setState(state + 1);
};
```

**참조형 State 사용의 잘못된 예 -** 배열이나 객체 같은 참조형은 반드시 새로운 값을 만들어서 전달해야 한다

```tsx
const [state, setState] = useState({ count: 0 });

const handleAddClick = () => {
  state.count += 1; // 참조형 변수의 프로퍼티를 수정
  setState(state); // 참조형이기 때문에 변수의 값(레퍼런스)는 변하지 않음
};
```

**참조형 State 사용의 올바른 예**

```tsx
const [state, setState] = useState({ count: 0 });

const handleAddClick = () => {
  setState({ ...state, count: state.count + 1 }); // 새로운 객체 생성
};
```

**콜백으로 State 변경**

```jsx
setState((prevState) => {
  // 다음 State 값을 계산
  return nextState;
});
```

### useEffect

- 컴포넌트가 처음 렌더링 되고 나면 리액트가 콜백 함수를 기억해뒀다가 실행한다.
  - 그 이후로는 콜백 함수를 실행하지 않는다.
- 값이 바뀔때마다 실행하기
  - 처음 렌더링 된 이후로 렌더링 할 때는 디펜던시 리스트에 있는 값들을 확인해서 하나라도 바뀌면 콜백 함수를 기억해뒀다가 실행한다.

### pagination

:많은 양의 데이터를 데이터를 조금씩 나눠서 제공한다.

- 오프셋(offset) 기반 페이지 네이션
  - offset = 지금까지 받아온 데이터의 개수
  - limit = 더 받아올 데이터의 개수
  - response에 페이지네이션에 대한 정보도 함께 보내준다.
- 커서(cursor) 기반 페이지 네이션
  - cursor = 특정 데이터를 가리키는 값 = 지금까지 받은 데이터를 표시한 책갈피
  - response에 다음 커서 값을 보내준다.
