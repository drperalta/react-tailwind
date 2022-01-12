import { useEffect, useState, useRef } from 'react';

const PrevValueSample = () => {
  const [value, setValue] = useState('');
  // const [prevValue, setPrevValue] = useState('');
  const prevValue = useRef('');

  useEffect(() => {
    // setPrevValue(value);
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <input
        className="border rounded py-1 px-3 outline-none focus:ring-2 ring-slate-400"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="text-left pt-4 py-4 flex flex-col gap-3">
        <p>
          <span className="font-medium">Value:</span> {value}
        </p>
        <p>
          <span className="font-medium">Prev Value:</span> {prevValue.current}
        </p>
      </div>
    </div>
  );
};

export default PrevValueSample;
