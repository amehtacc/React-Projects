// Importing React (necessary for defining a functional component)
import React from "react";

/**
 * Button Component
 * 
 * A reusable button component that accepts class names and text as props.
 * It allows for easy styling and customization while maintaining a consistent button structure.
 * 
 * @param {string} className - Additional Tailwind CSS classes for styling the button
 * @param {string} text - The text to be displayed inside the button
 */

function Button({ className, text }) {
  return (
    <>
      {/* A button with rounded corners and customizable styles via props */}
      <button className={`rounded-3xl font-semibold cursor-pointer border-4 border-transparent ${className}`}>
        {text} {/* Dynamically renders the button text */}
      </button>
    </>
  );
}

// Exporting the Button component for use in other parts of the application
export default Button;
