import React from "react"; // Importing React to use JSX and functional components

/**This are comments to understand the code
 * Reusable Input component for form fields.
 * 
 * @param {string} id - The unique identifier for the input field.
 * @param {string} type - The type of input (e.g., text, email, password).
 * @param {string} placeholder - Placeholder text displayed inside the input.
 * @param {string} name - The name attribute for the input (used for form handling).
 * @param {string} value - The current value of the input field (controlled component).
 * @param {function} onChange - Function to handle changes in the input field.
 * @param {string} autoComplete - Specifies autocomplete behavior (e.g., "username", "new-password").
 */

function Input({ id, type, placeholder, name, value, onChange, autoComplete }) {
  return (
    <div>
      {/* Hidden label for accessibility */}
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>

      {/* Input field with styling and dynamic props */}
      <input
        id={id} // Assigning unique ID to match the label
        className="w-72 h-10 bg-gray-300 px-2 py-3 focus:outline-none rounded-lg font-semibold"
        type={type} // Input type (text, email, password, etc.)
        name={name} // Name attribute for form control
        value={value} // Controlled component value
        placeholder={placeholder} // Placeholder text inside the input field
        onChange={onChange} // Event handler to update state on input change
        autoComplete={autoComplete} // Enables/disables autocomplete based on provided value
      />
    </div>
  );
}

export default Input; // Exporting the component for use in other files
