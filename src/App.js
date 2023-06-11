import './App.css';
import React, {useState} from 'react';

function App() {
  const operators = ["*", "/", "+", "-"];
  const [runningEquation, setRunningEquation] = useState("");
  const [inputOutput, setInputOutput] = useState("0");
  const [solved, setSolved] = useState(false);

function number (digit) {
  // working copy
  let wcRunningEquation = runningEquation;
  let wcInputOutput = inputOutput;

  if (digit === "0" && wcRunningEquation === "0") {
      return;
  }

  if (solved) {
      wcRunningEquation = "";
      wcInputOutput = "";
      setSolved(false);
  }

  if (operators.includes(inputOutput)) {
      wcInputOutput = "";
  }

  if (wcInputOutput === "0") {
      wcInputOutput = "";
  }

  if (digit === ".") {
      if (wcInputOutput.includes(".")) {
          return;
      }

      if (wcInputOutput === "") {
          wcInputOutput = "0";
      }

      if (wcRunningEquation === "" || /[*\/+-]$/.test(wcRunningEquation)) {
          wcRunningEquation += "0";
      }
  }

  setRunningEquation(wcRunningEquation + digit);
  setInputOutput(wcInputOutput + digit);
}

function allClear (){
  setRunningEquation("");
  setInputOutput("0");
  }

function operator(operationToDo) {
  // working copy
  let wcRunningEquation = runningEquation;

  if (solved) {
    wcRunningEquation = inputOutput;
      setSolved(false);
  }

  if (operationToDo !== "-") {
    wcRunningEquation = wcRunningEquation.replace(/[*\/+-]+$/, "");
  } else if (operationToDo === "-" && wcRunningEquation.endsWith("-")) {
      return;
  }

  setRunningEquation(wcRunningEquation + operationToDo);
  setInputOutput(operationToDo);
}

function solve() {
  // working copy
  let wcRunningEquation = runningEquation;

  wcRunningEquation = wcRunningEquation.replace(/[*\/+-]+$/, "");

  const answer = eval(wcRunningEquation).toString();

  setRunningEquation(wcRunningEquation + "=" + answer);
  setInputOutput(answer);
  setSolved(true);
}

return (
  <div className="Calculator">
    <div className = "display" id = "calcDisplay">{runningEquation}</div>
    <div className = "display" id = "display">{inputOutput}</div>
    <div className = "clear" id = "clear" onClick={() => allClear()}>AC</div>
    <div className = "calc" id = "divide" onClick={() => operator(`/`)}>/</div>
    <div className = "calc" id = "multiply" onClick={() => operator(`*`) }>x</div>
    <div className = "numb" id = "seven" onClick={() => number(7)}>7</div>
    <div className = "numb" id = "eight" onClick={() => number(8)}>8</div>
    <div className = "numb" id = "nine" onClick={() => number(9)}>9</div>
    <div className = "calc" id = "subtract" onClick={() => operator(`-`)}>-</div>
    <div className = "numb" id = "four" onClick={() => number(4)}>4</div>
    <div className = "numb" id = "five" onClick={() => number(5)}>5</div>
    <div className = "numb" id = "six" onClick={() => number(6)}>6</div>
    <div className = "calc" id = "add" onClick={() => operator(`+`)}>+</div>
    <div className = "numb" id = "one" onClick={() => number(1)}>1</div>
    <div className = "numb" id = "two" onClick={() => number(2)}>2</div>
    <div className = "numb" id = "three" onClick={() => number(3)}>3</div>
    <div className = "calc" id = "equals" onClick={() => solve()}>=</div>
    <div className = "numb" id = "zero" onClick={() => number(0)}>0</div>
    <div className = "numb" id = "decimal" onClick={() => number(`.`)}>.</div>
  </div>

);

}

export default App;
