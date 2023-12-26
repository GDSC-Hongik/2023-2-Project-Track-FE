import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHisory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6); // 1~6랜덤숫자저장
    const nextOtherNum = random(6);
    setMyHistory([...myHistory], nextMyNum);
    setOtherHistory([...otherHisory], nextOtherNum);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className='App'>

      <Button className="App-button" color="blue" onClick={handleRollClick}>
        던지기
      </Button>
      <Button className="App-button" color="red" onClick={handleClearClick}>
        처음부터
      </Button>

      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHisory} />
      </div>

    </div>
  );
}

export default App;