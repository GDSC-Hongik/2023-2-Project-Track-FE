# useEffect

1. 처음 한 번만 실행하기
   useEffect(() => {
   // 실행할 코드
   }, []);
   컴포넌트가 처음 렌더링 되고 나면 리액트가 콜백 함수를 기억해뒀다가 실행합니다.
   그 이후로는 콜백 함수를 실행하지 않습니다.

2. 값이 바뀔 때마다 실행하기
   useEffect(() => {
   // 실행할 코드
   }, [dep1, dep2, dep3, ...]);
   컴포넌트가 처음 렌더링 되고 나면 리액트가 콜백 함수를 기억해뒀다가 실행합니다.
   그 이후로 렌더링 할 때는 디펜던시 리스트에 있는 값들을 확인해서
   하나라도 바뀌면 콜백 함수를 기억해뒀다가 실행합니다.

# useState

1.  초깃값 지정하기
    const [state, setState] = useState(initialState);
    useState 함수에 값을 전달하면 초깃값으로 지정할 수 있습니다.

2.  콜백으로 초깃값 지정하기
    const [state, setState] = useState(() => {
    // 초기값을 계산
    return initialState;
    });

    function ReviewForm() {
    const [values, setValues] = useState(() => {
    const savedValues = getSavedValues(); // 처음 렌더링할 때만 실행됨
    return savedValues
    });
    // ...
    }

    이럴 때는 이렇게 콜백 형태로 초깃값을 지정해주면
    처음 렌더링 할 때 한 번만 콜백을 실행해서 초깃값을 만들고,
    그 이후로는 콜백을 실행하지 않기 때문에 getSavedValues 를 불필요하게 실행하지 않습니다.

    단, 이때 주의할 점은 이 콜백 함수가 리턴할 때까지 리액트가 렌더링하지 않고 기다린다는 점인데요.
    콜백 함수의 실행이 오래 걸릴 수록 초기 렌더링이 늦어진다는 점에 주의하세요.

3.  Setter 함수 사용하기 - 기본
    const [state, setState] = useState(0);
    const handleAddClick = () => {
    setState(state + 1);
    }

        배열이나 객체 같은 참조형은 반드시 새로운 값을 만들어서 전달해야 한다는 거였습니다.

        참조형 state 사용의 올바른 예

        const [state, setState] = useState({ count: 0 });

        const handleAddClick = () => {

    setState({ ...state, count: state.count + 1 }); // 새로운 객체 생성  
    }

4.  콜백으로 state 변경
    setState((prevState) => {
    // 다음 State 값을 계산
    return nextState;
    });

    const [count, setCount] = useState(0);
    const handleAddClick = async () => {
    await addCount();
    setCount((prevCount) => prevCount + 1);
    }

# 사이드 이펙트

side effec: 함수 안에서 함수 바깥에 있는 값이나 상태를 변경하는 것
useEffect: 리액트 컴포넌트 함수 안에서 사이드 이펙트를 실행하고 싶을 때 사용하는 함수, 리액트 외부에 있는 데이터나 상태를 변경할 때 사용, 동기화에 유용하다

# 디펜던시

리액트에서는 Prop이나 State와 관련된 값은 되도록이면 빠짐없이 디펜던시에 추가해서
항상 최신 값으로 useEffect 나 useCallback 을 사용하도록 권장하고 있습니다.

# Hook

Hook의 규칙

1. 반드시 리액트 컴포넌트 함수(Functional Component) 안에서 사용해야 함
2. 컴포넌트 함수의 최상위에서만 사용 (조건문, 반복문 안에서 못 씀)

useState
useEffect
useRef - DOM 노드 참조
useCallback - 디펜던시 리스트가 변경될 때만 함수를 생성
custom Hook - 맨 앞에 use라는 단어를 붙여 만든다.

# context

'사용자가 한국어를 사용하는 상황', '사용자가 영어를 사용하는 상황' 같은 걸 여러 컴포넌트에 공유하고 싶을 때 사용합니다.

프롭 드릴링(Prop Drilling) 해결하기 위해 사용하는 기능
: Props만으로 리액트 개발을 하다 보면 여러 곳에 쓰이는 데이터를 내려주고 싶을 때, 컴포넌트의 단계가 많다면 여러 번 반복해서 Prop을 내려줘야 함

1. Context 만들기
   createContext라는 함수를 통해 만들 수 있다.

   import { createContext } from 'react';
   const LocaleContext = createContext('ko');

2. Context 적용하기
   Context를 쓸 때는 반드시 값을 공유할 범위를 정하고 써야 하는데요,
   이때 범위는 Context 객체에 있는 Provider 라는 컴포넌트로 정해줄 수 있습니다.
   이때 Provider의 value prop으로 공유할 값을 내려주면 됩니다.

3. Context 값 사용하기
   useContext 라는 Hook을 사용하면 값을 가져와 사용할 수 있습니다.
   이때 아규먼트로는 사용할 Context를 넘겨주면 됩니다.

4. State, Hook와 함께 활용하기
   Provider 역할을 하는 컴포넌트를 하나 만들고, 여기서 State를 만들어서 value 로 넘겨줄 수 있습니다.
   그리고 useContext 를 사용해서 값을 가져오는 커스텀 Hook을 만들 수도 있겠죠.
   이렇게 하면 Context에서 사용하는 State 값은 반드시 우리가 만든 함수를 통해서만 쓸 수 있기 때문에 안전한 코드를 작성하는데 도움이 됩니다.
