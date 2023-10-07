import Button from "./Button";
import Slider from "./Slider";
import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleStep = (event) => {
    setStep(parseInt(event.target.value));
  };

  const handleCountChange = (change) => {
    setCount((current) => current + change);
  };

  const handleCountInput = (event) => {
    const num = parseInt(event.target.value);
    if (num) {
      return setCount(num);
    }
    setCount(0);
  };

  const handleReset = () => {
    setCount(0)
    setStep(1)
  }

  const date = new Date().setDate(new Date().getDate() + count);
  const newDate = new Date(date).toDateString();

  return (
    <article>
      <Slider onChange={handleStep} value={step}/>
      <Button
        onInputCount={handleCountInput}
        onChangeCount={handleCountChange}
        amount={count}
        value={step}
      />
      {count !== 0 && (
        <p>
          {count}
          {Math.abs(count) !== 1 ? " days from today is " : " day from today is "}
          {newDate}
        </p>
      )}
      {count === 0 && <p>Todays Date is {newDate}</p>}
      {(count !== 0 || step !== 1)&&<button onClick={handleReset}>Reset</button>}
    </article>
  );
}

export default Counter;
