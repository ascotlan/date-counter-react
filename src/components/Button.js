function Button({onInputCount, amount, onChangeCount, value}) {
  return (
    <div>
      <button onClick={() => onChangeCount(-1* value)}>-</button>
      <input type="text" value={amount} onChange={onInputCount}/>
      <button onClick={() => onChangeCount(value)}>+</button>
    </div>
  );
}

export default Button;
