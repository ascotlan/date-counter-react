export default function Slider({onChange, value}) {
  return (
    <>
      <input onChange={onChange} type="range" min="0" max="100" value={value} /> <span>Step: {value}</span>
    </>
  );
}
