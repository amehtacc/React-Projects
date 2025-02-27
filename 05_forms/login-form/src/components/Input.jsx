import React from "react";

// Input component - A reusable input field with accessibility support
function Input({ id, type, placeholder, value, onChange, autoComplete }) {
  return (
    <div>
      {/* Hidden label for screen readers to improve accessibility */}
      <label className="sr-only" htmlFor={id}>
        {placeholder} 
      </label>{" "}
      
      {/* Input field */}
      <input
        id={id} // Unique identifier for the input field
        className="w-72 h-10 bg-gray-300 px-2 py-3 focus:outline-none rounded-lg font-semibold"
        type={type} // Input type (e.g., text, email, password)
        name={id} // Name attribute for form submission
        value={value} // Controlled component, value is managed by parent state
        placeholder={placeholder} // Placeholder text inside the input
        onChange={onChange} // Event handler for handling user input
        autoComplete={autoComplete} // Helps with browser autofill behavior
      />
    </div>
  );
}

export default Input;
