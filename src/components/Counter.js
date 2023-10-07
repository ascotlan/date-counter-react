import Button from './Button';
import {useState} from 'react';

function Counter(){
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleStep = (change) => {
    setStep((current) => current + change);
  }

  const handleCount = (change) => {
    setCount((current) => current + change);
  }

  const date = new Date().setDate(new Date().getDate() + count);
  const newDate = new Date(date).toDateString();

  return <article>
   <Button onChange={handleStep} amount={step} value={1}>Step:</Button>
   <Button onChange={handleCount} amount={count} value={step}>Count:</Button>
   {count !== 0 && <p>{count} {Math.abs(count) !== 1 ? "days from today is" : "day from today is"}  {newDate}</p>}
   {count === 0 && <p>Todays Date is {newDate}</p>}
  </article>
}

export default Counter;