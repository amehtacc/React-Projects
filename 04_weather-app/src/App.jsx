import React from "react";
import Input from "./Input"; // Importing Input component for user input
import WeatherDashboard from "./WeatherDashboard"; // Importing WeatherDashboard component to display weather data
import { useState, useEffect } from "react"; // Importing React hooks

function App() {
  // State to store the user-inputted location (city name)
  const [location, setLocation] = useState('');
  // State to store weather data fetched from API
  const [weatherData, setWeatherData] = useState();

  /**
   * useEffect Hook to fetch weather data whenever `location` state changes.
   * It runs every time `location` is updated.
   */
  useEffect(() => {
    // API key for accessing weather data from WeatherAPI
    const API_KEY = "6c182f4256544ca7b2484446241308";

    /**
     * Asynchronous function to fetch weather data based on the city name.
     * It sends a request to the WeatherAPI and updates the `weatherData` state.
     */
    async function getWeatherData(cityName) {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`
        );
        const data = await response.json();
        setWeatherData(data); // Updating state with fetched weather data
      } catch (error) {
        console.error("Error fetching while getting weather data:", error);
      }
    }

    // Fetch weather data only if a location is provided
    if (location) {
      getWeatherData(location);
    }
  }, [location]); // useEffect dependency: runs whenever `location` changes

  return (
    <div className="text-white flex flex-col items-center p-16 gap-20">
      {/* Application title */}
      <h1 className="text-4xl font-bold">Check Your Weather Condition</h1>

      {/* Input component to take user input (city name) */}
      <Input setLocation={setLocation} />

      {/* Conditionally rendering WeatherDashboard only if weatherData is available */}
      {weatherData ? <WeatherDashboard weatherData={weatherData} /> : ''}
    </div>
  );
}

export default App; // Exporting App component
