import { useState } from "react";
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random()*n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [records, setRecords] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    // 배열의 내용이 바뀌었다 != 배열이 바뀌었다
    // records.push(nextNum); -> 기존 배열에 내용물만 추가해주는 방식
    // 명시적으로 set을 불렀다. 어차피 안바뀌면 소용없다.
    const newRcords = [...records, nextNum]; //클론 -> 매번 새 배열을 생성한다
    // setRecords만 써서 화면을 갱신하자!
    setRecords(newRcords);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    // setRecords([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        {records.join(', ')}
      </div>
    </div>  
  );
}

export default App;
