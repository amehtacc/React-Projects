import React from "react"; // Importing React
import { useState } from "react"; // Importing useState hook for managing input state

/**
 * Input Component
 * @param {Function} setLocation - A function passed as a prop to update the location in the parent component
 * Allows users to input a city name and fetch weather data
 */
function Input({ setLocation }) {
  // State to store user input (city name)
  const [city, setCity] = useState("");

  /**
   * Function to handle the search button click
   * - Prevents submission if the input is empty or only contains spaces
   * - Calls setLocation with the entered city name to fetch weather data
   * - Clears the input field after submission
   */
  function handleSubmit() {
    if (!city.trim()) return; // Prevent empty input submission

    setLocation(city); // Update location state in the parent component
    setCity(""); // Clear input field
  }

  return (
    // Container div for input and button
    <div className="flex justify-center items-center">
      
      {/* Input field for entering the city name */}
      <input
        className="w-96 h-12 p-3 bg-yellow-300 rounded-l-lg text-black focus:outline-none font-semibold"
        type="text"
        placeholder="Enter your city..."
        onChange={(e) => setCity(e.target.value)} // Update state with input value
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()} // Submit location when Enter is pressed
        value={city} // Controlled input bound to state
      />

      {/* Search button to trigger handleSubmit */}
      <button
        className="w-20 h-12 bg-green-500 hover:bg-green-600 rounded-r-lg cursor-pointer font-semibold"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
}

export default Input; // Exporting the component for use in other files
