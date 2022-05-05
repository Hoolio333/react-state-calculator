import "./App.css";
import { useState } from "react";

function App() {
  const [leftNumber, setLeftNumber] = useState("0");
  const [rightNumber, setRightNumber] = useState("0");
  const [result, setResult] = useState("0");
  const [symbol, setSymbol] = useState("+");
  const [storedResult, setStoredResult] = useState("");
  const [recallLeft, setRecallLeft] = useState("");
  const [recallRight, setRecallRight] = useState("");

  const newDigitToLeftCount = (digit) => {
    if (leftNumber === "0") {
      setLeftNumber(digit);
    } else {
      setLeftNumber(leftNumber + digit);
    }
  };

  const newDigitToRightCount = (digit) => {
    if (rightNumber === "0") {
      setRightNumber(digit);
    } else {
      setRightNumber(rightNumber + digit);
    }
  };

  const onClickCalculate = () => {
    if (symbol === "+") {
      setResult(Number(leftNumber) + Number(rightNumber));
    }
    if (symbol === "-") {
      setResult(Number(leftNumber) - Number(rightNumber));
    }
    if (symbol === "*") {
      setResult(Number(leftNumber) * Number(rightNumber));
    }
    if (symbol === "÷") {
      setResult(Number(leftNumber) / Number(rightNumber));
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNumber}</p>
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
          <button onClick={() => setLeftNumber("0")}>Clear</button>
          <button onClick={() => setLeftNumber(storedResult)}>
            Recall Left
          </button>
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
        <p>{rightNumber}</p>
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
          <button onClick={() => setRightNumber("")}>Clear</button>
          <button onClick={() => setRightNumber(storedResult)}>
            Recall Right
          </button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={onClickCalculate}>=</button>
          <div className="Store">
            <p>{storedResult} &nbsp;</p>
            <button onClick={() => setStoredResult(result)}>Store</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
