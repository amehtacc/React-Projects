// Import React to create a functional component
import React from "react";

/**
 * Reusable Button component that can be customized using props.
 *
 * @param {string} className - Additional CSS classes to style the button.
 * @param {function} onClick - Function to execute when the button is clicked.
 * @param {string} type - Specifies the button type (e.g., "button", "submit", "reset").
 * @param {string} text - The text displayed inside the button.
 * @returns {JSX.Element} - A customizable button element.
 */
function Button({ className, onClick, type, text }) {
  return (
    <button
      className={`flex justify-center items-center cursor-pointer ${className}`} // Allows external styles using Tailwind classes
      onClick={onClick} // Handles button clicks
      type={type} // Sets button type (e.g., submit, button, reset)
    >
      {text} {/* Displays the button text */}
    </button>
  );
}

// Export the Button component for use in other files
export default Button;
