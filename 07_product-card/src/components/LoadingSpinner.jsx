// Importing React (required for defining functional components)
import React from "react";

/**
 * LoadingSpinner Component
 *
 * A simple animated loading spinner using Tailwind CSS.
 * It displays a spinning circle, indicating that data is being loaded.
 */

function LoadingSpinner() {
  return (
    <>
      {/* Full-screen flex container to center the spinner */}
      <div className="flex justify-center items-center h-screen">
        {/* The spinner: A circular div with an animated rotating effect */}
        <div className="w-14 h-14 border-6 border-yellow-400 border-t-gray-300 rounded-full animate-spin"></div>
      </div>
    </>
  );
}

// Exporting the component to be used in other parts of the application
export default LoadingSpinner;
