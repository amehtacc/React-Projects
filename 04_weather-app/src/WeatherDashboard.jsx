import React from "react"; // Importing React

/**
 * WeatherDashboard Component
 * @param {Object} props - The component receives `weatherData` as a prop
 * Displays weather information such as location, temperature, wind speed, and humidity
 */
function WeatherDashboard({ weatherData }) {
  return (
    // Container div for the weather dashboard with styling
    <div className="w-[400px] h-[300px] bg-blue-500 rounded-xl p-5 flex flex-col justify-between items-center">
      
      {/* Display the city and region name (conditionally accessing nested properties to avoid errors) */}
      <h3 className="font-bold">
        {weatherData?.location?.name}, {weatherData?.location?.region}
      </h3>

      {/* Display the current temperature in Celsius with a superscript degree symbol */}
      <p className="font-bold text-5xl">
        {weatherData?.current?.temp_c} <sup>o</sup>C
      </p>

      {/* Container div for additional weather details (wind speed and humidity) */}
      <div className="w-full flex justify-between items-center">
        
        {/* Display wind speed */}
        <p className="text-xl font-bold flex justify-center items-center gap-2">
          <span className="text-lg font-semibold">Wind Speed:</span> 
          {weatherData?.current?.wind_kph} kph
        </p>

        {/* Display humidity level */}
        <p className="text-xl font-bold flex justify-center items-center gap-2">
          <span className="text-lg font-semibold">Humidity:</span> 
          {weatherData?.current?.humidity}
        </p>
      </div>
    </div>
  );
}

export default WeatherDashboard; // Exporting the component
