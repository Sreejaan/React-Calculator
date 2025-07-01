import React, { useState, useEffect } from 'react';

const buttons = [
  'C', '/', '*', 'Del',
  '7', '8', '9', '-',
  '4', '5', '6', '+',
  '1', '2', '3', '=',
  '0', '.'
];

export default function Calculator() {
  const [input, setInput] = useState("");

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  useEffect(() => {
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleKey = (e) => {
    if ((e.key >= '0' && e.key <= '9') || '+-.*/'.includes(e.key)) {
      setInput(prev => prev + e.key);
    }

    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") setInput(prev => prev.slice(0, -1));
    if (e.key === "Escape") setInput("");
  };

  window.addEventListener('keydown', handleKey);
  return () => window.removeEventListener('keydown', handleKey);
}, [input]);


  const handleClick = value => {
    if (value === 'C') return setInput('');
    if (value === 'Del') return setInput(prev => prev.slice(0, -1));
    if (value === '=') return calculate();

    setInput(input + value);
  };

  return (
    <div className='calculator'>
      <input value={input} readOnly className="display" />
      <div className="grid">
        {buttons.map(btn => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
