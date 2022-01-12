import { useRef } from 'react';

const Home = () => {
  const textInput = useRef(null);

  const focusTextInput = () => {
    textInput.current.focus();
  };

  return (
    <main>
      <h1 className="font-bold text-xl">Welcome to Home Page</h1>

      <div className="p-4 flex flex-col">
        {/* Input */}
        <input
          className="border rounded py-1 px-3 outline-none focus:ring-2 ring-slate-400"
          type="text"
          ref={textInput}
        />

        {/* Button */}
        <button
          className="py-2 px-5 bg-slate-500 text-white rounded mt-4 hover:bg-slate-400"
          type="button"
          onClick={focusTextInput}
        >
          focus on input
        </button>
      </div>
    </main>
  );
};

export default Home;
