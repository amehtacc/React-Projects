import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); 
  const [error, setError] = useState("");

  function increment() {
    setCount(prevCount => prevCount + 1);
    setError("");
  }

  function decrement() {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    } else {
      setError(`Number can't be Negative`);
      setTimeout(() => setError(``), 2000)
    }
  }

  return (
    <div className="h-52 flex flex-col justify-between items-center p-5">
      <div className="flex justify-center items-center gap-10">
        <button
          className="w-28 h-10 text-2xl font-semibold bg-green-500 rounded-3xl border-2 cursor-pointer hover:bg-green-600 transition duration-300"
          onClick={increment}
        >
          +
        </button>
        <p className="font-bold text-2xl">{count}</p>
        <button
          className="w-28 h-10 text-2xl font-semibold bg-red-500 rounded-3xl border-2 cursor-pointer hover:bg-red-600 transition duration-300"
          onClick={decrement}
        >
          -
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="w-28 h-10 text-lg font-semibold bg-yellow-500 rounded-3xl border-2 cursor-pointer hover:bg-yellow-600 transition duration-300"
        onClick={() => {
          setCount(0);
          setError("");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
