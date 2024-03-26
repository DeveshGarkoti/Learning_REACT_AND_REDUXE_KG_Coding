import "./App.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState(""); //default value of the calculator input

  const handleOnButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
      // Clears the inputbox
    } else if (
      buttonText === "=" &&
      (calVal[calVal.length - 1] == "+" ||
        calVal[calVal.length - 1] == "-" ||
        calVal[calVal.length - 1] == "*" ||
        calVal[calVal.length - 1] == "/")
    ) {
      setCalVal(calVal);
      // Checks for +,-,*,/ last value and does nothing
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(String(result));
      //  Evaluates expression in input box and sets it
    } else if (
      (buttonText === "+" ||
        buttonText === "-" ||
        buttonText === "*" ||
        buttonText === "/") &&
      calVal.length <= 0
    ) {
      setCalVal("");
      // If there is no number before an operator , clear the display
    } else if (
      (buttonText === "+" ||
        buttonText === "-" ||
        buttonText === "*" ||
        buttonText === "/") &&
      (calVal[calVal.length - 1] == "+" ||
        calVal[calVal.length - 1] == "-" ||
        calVal[calVal.length - 1] == "*" ||
        calVal[calVal.length - 1] == "/")
    ) {
      setCalVal(calVal);
      // Adds next operator to existing calculation without a space
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
      // Combines numbers with operators into one string
    }
  };

  return (
    <>
      <div className="calculator">
        <Display displayValue={calVal} />
        <ButtonContainer onButtonClick={handleOnButtonClick} />
      </div>
    </>
  );
}

export default App;
