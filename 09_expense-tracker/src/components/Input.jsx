// Import React library
import React from "react";

/**
 * Reusable Input Component
 * 
 * @param {string} id - Unique identifier for the input field
 * @param {string} type - Type of input (text, number, email, etc.)
 * @param {string} placeholder - Placeholder text for the input field
 * @param {string | number} value - The current value of the input field
 * @param {function} onChange - Event handler for input changes
 * @param {boolean} readOnly - Whether the input should be read-only (default: false)
 * @param {string} className - Additional Tailwind CSS classes for styling
 */
function Input({ id, type, placeholder, value, onChange, readOnly, className }) {
  return (
    <div>
      {/* 
        Screen Reader Only Label 
        - Helps improve accessibility (hidden for sighted users but readable by screen readers) 
      */}
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>

      {/* Input Field */}
      <input
        className={`rounded-lg outline-none px-2 py-3 font-semibold bg-gray-900 text-white ${className}`}
        id={id} // Unique ID for accessibility and form handling
        type={type} // Input type (e.g., text, number)
        placeholder={placeholder} // Placeholder text
        name={id} // Name attribute (useful for forms)
        value={value} // Controlled input value
        onChange={onChange} // Event handler for user input
        readOnly={readOnly} // Makes input non-editable if true
      />
    </div>
  );
}

// Export the component for reuse
export default Input;
