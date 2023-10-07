function Button({ children, amount, onChange, value}) {
  return (
    <div>
      <button onClick={() => onChange(-1* value)}>-</button>
      <span>{children } {amount}</span>
      <button onClick={() => onChange(value)}>+</button>
    </div>
  );
}

export default Button;
