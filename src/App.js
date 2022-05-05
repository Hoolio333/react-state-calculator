import "./App.css";
import { useState } from "react";

function App() {
  const [leftCount, setLeftCount] = useState("0");
  const [rightCount, setRightCount] = useState("0");
  const [totalCount, setTotalCount] = useState("0");
  const [symbol, setSymbol] = useState("+");

  const newDigitToLeftCount = (digit) => {
    if (leftCount === "0") {
      setLeftCount(digit);
    } else {
      setLeftCount(leftCount + digit);
    }
  };

  const newDigitToRightCount = (digit) => {
    if (rightCount === "0") {
      setRightCount(digit);
    } else {
      setRightCount(rightCount + digit);
    }
  };

  const onClickCalculate = () => {
    if (symbol === "+") {
      setTotalCount(Number(leftCount) + Number(rightCount));
    }
    if (symbol === "-") {
      setTotalCount(Number(leftCount) - Number(rightCount));
    }
    if (symbol === "*") {
      setTotalCount(Number(leftCount) * Number(rightCount));
    }
    if (symbol === "÷") {
      setTotalCount(Number(leftCount) / Number(rightCount));
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftCount}</p>
        <div className="numbers">
          <button onClick={() => newDigitToLeftCount("1")}>1</button>
          <button onClick={() => newDigitToLeftCount("2")}>2</button>
          <button onClick={() => newDigitToLeftCount("3")}>3</button>
          <button onClick={() => newDigitToLeftCount("4")}>4</button>
          <button onClick={() => newDigitToLeftCount("5")}>5</button>
          <button onClick={() => newDigitToLeftCount("6")}>6</button>
          <button onClick={() => newDigitToLeftCount("7")}>7</button>
          <button onClick={() => newDigitToLeftCount("8")}>8</button>
          <button onClick={() => newDigitToLeftCount("9")}>9</button>
          <button onClick={() => newDigitToLeftCount("0")}>0</button>
          <button onClick={() => setLeftCount("0")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{symbol}</p>
        <div className="numbers">
          <button onClick={() => setSymbol("+")}>+</button>
          <button onClick={() => setSymbol("-")}>-</button>
          <button onClick={() => setSymbol("*")}>*</button>
          <button onClick={() => setSymbol("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightCount}</p>
        <div className="numbers">
          <button onClick={() => newDigitToRightCount("1")}>1</button>
          <button onClick={() => newDigitToRightCount("2")}>2</button>
          <button onClick={() => newDigitToRightCount("3")}>3</button>
          <button onClick={() => newDigitToRightCount("4")}>4</button>
          <button onClick={() => newDigitToRightCount("5")}>5</button>
          <button onClick={() => newDigitToRightCount("6")}>6</button>
          <button onClick={() => newDigitToRightCount("7")}>7</button>
          <button onClick={() => newDigitToRightCount("8")}>8</button>
          <button onClick={() => newDigitToRightCount("9")}>9</button>
          <button onClick={() => newDigitToRightCount("0")}>0</button>
          <button onClick={() => setRightCount("")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{totalCount}</p>
        <div>
          <button onClick={onClickCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
