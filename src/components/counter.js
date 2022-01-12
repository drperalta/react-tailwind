import { useState, useRef } from 'react';

const CounterSample = () => {
  // const [counter, setCounter] = useState(1);
  const counter = useRef(0);

  const handleClick = () => {
    // setCounter((c) => c + 1);
    // console.log(`Button is clicked ${counter} times`);

    counter.current += 1;
    console.log(`Button is clicked ${counter.current} times`);
  };

  console.log('contact page is rendered');

  return (
    <button
      className="py-2 px-5 bg-slate-500 text-white rounded mt-4 hover:bg-slate-400"
      type="button"
      onClick={handleClick}
    >
      add count
    </button>
  );
};

export default CounterSample;
