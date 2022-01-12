import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [state, setState] = useState(undefined);
  const isCurrent = useRef(true);

  const handleClick = () => {
    console.log('fetching...');

    setTimeout(() => {
      if (!isCurrent.current) return;

      setState({
        name: 'David Peralta',
      });

      console.log('successfully fetch data');
    }, 3000);
  };

  useEffect(() => {
    console.log('about page mounted');

    return () => {
      isCurrent.current = false;
      console.log('about page unmounted');
    };
  }, []);

  return (
    <main>
      <h1 className="font-bold text-xl">Welcome to Contact Page</h1>

      <button
        className="py-2 px-5 bg-slate-500 text-white rounded mt-4 hover:bg-slate-400"
        type="button"
        onClick={handleClick}
      >
        fetch data
      </button>
    </main>
  );
};

export default Contact;
