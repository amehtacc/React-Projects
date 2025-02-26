import React, { useEffect, useState } from "react"; // Importing React library, useEffect, and useState

function Counter() {
  // State to keep track of count value
  const [count, setCount] = useState(0);
  // State to store error message when decrementing below 0
  const [error, setError] = useState("");
  // State to store message based on count (Even/Odd/Start Counting)
  const [message, setMessage] = useState("");
  // State to track time since component mounted
  const [timer, setTimer] = useState(0);



  /**
   * ❌ Bad Approach: Using setTimeout inside useEffect with [timer] dependency.
   * This creates a new timeout every time the timer updates, which is inefficient.
   * React will clean up the previous timeout before setting a new one.
   */
  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setTimer((prevTimer) => prevTimer + 1);
  //   }, 1000);

  //   return () => clearTimeout(interval); // Cleanup previous timeout
  // }, [timer]);



  /**
   * ✅ Best Approach: Using setInterval inside useEffect with an empty dependency array [].
   * This sets an interval that runs continuously every second without needing to recreate it.
   * Only one interval is created when the component mounts, making it more efficient.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, []);



  /**
   * Function to increment the count
   * - Updates the count state
   * - Calls handleMessage() to update the message based on new count
   * - Clears any error message if present
   */
  function increment() {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      handleMessage(newCount);
      return newCount;
    });
    setError("");
  }



  /**
   * Function to decrement the count
   * - Ensures count does not go below 0
   * - Updates count state and calls handleMessage()
   * - Shows error message if count is already 0
   */
  function decrement() {
    if (count > 0) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        handleMessage(newCount);
        return newCount;
      });
    } else {
      setError(`Number can't be Negative`);
      setTimeout(() => setError(""), 2000); // Clear error after 2 seconds
    }
  }



  /**
   * Function to set message based on count
   * - If count is 0 → "Start Counting!"
   * - If count is even → "Even"
   * - If count is odd → "Odd"
   */
  function handleMessage(updatedCount) {
    if (updatedCount === 0) {
      setMessage("Start Counting!");
    } else {
      setMessage(updatedCount % 2 === 0 ? "Even" : "Odd");
    }
  }

  return (
    <div className="h-60 flex flex-col justify-between items-center p-5">
      {/* Buttons to increment and decrement count */}
      <div className="flex justify-center items-center gap-10">
        {/* Increment Button */}
        <button
          className="w-28 h-10 text-2xl font-semibold bg-green-500 rounded-3xl border-2 cursor-pointer hover:bg-green-600 transition duration-300"
          onClick={increment}
        >
          +
        </button>

        {/* Display current count */}
        <p className="font-bold text-2xl">{count}</p>

        {/* Decrement Button */}
        <button
          className="w-28 h-10 text-2xl font-semibold bg-red-500 rounded-3xl border-2 cursor-pointer hover:bg-red-600 transition duration-300"
          onClick={decrement}
        >
          -
        </button>
      </div>

      {/* Display error message in red color if present, else show the message indicating even/odd */}
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p className="text-white">{message}</p>
      )}

      {/* Reset button to reset count, error, and message */}
      <button
        className="w-28 h-10 text-lg font-semibold bg-yellow-500 rounded-3xl border-2 cursor-pointer hover:bg-yellow-600 transition duration-300"
        onClick={() => {
          setCount(0);
          setError("");
          setMessage("Start Counting!");
        }}
      >
        Reset
      </button>

      {/* Display timer showing how long the app has been running */}
      <p>App running for {timer} seconds</p>
    </div>
  );
}

export default Counter;