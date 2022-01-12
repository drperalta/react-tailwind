import { useRef } from 'react';

const CustomTextInput = () => {
  const textInput = useRef(null);

  const focusTextInput = () => textInput.current.focus();

  return (
    <div className="p-4 flex flex-col">
      <input
        className="border rounded py-1 px-3 outline-none focus:ring-2 ring-slate-400"
        type="text"
        ref={textInput}
      />
      <button
        className="py-2 px-5 bg-slate-500 text-white rounded mt-4 hover:bg-slate-400"
        type="button"
        onClick={focusTextInput}
      >
        click me
      </button>
    </div>
  );
};

export default CustomTextInput;
