import React, { useEffect, useState } from "react";
import Input from "./Input"; // Importing a reusable Input component

function Login() {
  // State variables for managing form input values, errors, and loading state
  const [email, setEmail] = useState(""); // Stores the email input
  const [password, setPassword] = useState(""); // Stores the password input
  const [error, setError] = useState(""); // Stores error messages
  const [showPassword, setShowPassword] = useState(false); // Toggles password visibility
  const [loading, setLoading] = useState(false); // Manages loading state to prevent multiple clicks

  function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    const trimmedEmail = email.trim(); // Removes extra spaces from the email input
    const trimmedPassword = password.trim(); // Removes extra spaces from the password input

    // Validation: Check if both fields are filled
    if (!trimmedEmail || !trimmedPassword) {
      setError("*All fields are required!");
      return;
    }

    // Validation: Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    // Validation: Password length check
    if (trimmedPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true); // Set loading state to true to prevent multiple submissions

    // Simulating an API call with setTimeout (Replace with actual API integration later)
    setTimeout(() => {
      alert(`Your Email: ${trimmedEmail}\nYour Password: ${trimmedPassword}`);
      
      // Reset the form fields after successful login
      setEmail("");
      setPassword("");
      setError("");
      setLoading(false);
    }, 2000);
  }

  return (
    // Login form container with styling
    <form
      onSubmit={handleSubmit} // Calls handleSubmit on form submission
      className="w-[400px] h-[460px] rounded-xl bg-white flex flex-col items-center p-10"
    >
      {/* Form heading */}
      <h1 className="text-3xl font-bold mt-10 mb-12">Login</h1>
      
      {/* Container for form inputs */}
      <div className="flex flex-col justify-center items-center gap-10">

        {/* Email input field */}
        <Input
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setError(""); // Clear error when user types
          }}
          value={email}
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
        />
        

        {/* Password input field with show/hide toggle */}
        <div className="flex justify-center items-center relative">
          <Input
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); // Clear error when user types
            }}
            value={password}
            type={showPassword ? "text" : "password"} // Toggle password visibility
            placeholder="Enter your password"
            autoComplete="current-password"
          />
          {/* Toggle button to show/hide password */}
          <button
            type="button"
            aria-label="Toggle password visibility"  // Improves accessibility for screen readers
            className="absolute right-3 cursor-pointer font-medium text-sm text-gray-600 hover:text-gray-900 transition duration-200"
            onClick={() => setShowPassword(!showPassword)}  // Toggle show/hide password
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Login button with loading state */}
        <button
          type="submit"
          className={`w-28 h-10 rounded-lg font-semibold ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-400 hover:bg-green-500 hover:text-white cursor-pointer"} border-[3px] border-transparent hover:border-green-600 transition-all duration-200`}
          disabled={loading} // Disable button while loading to prevent multiple clicks
        >
          {loading ? "Logging in..." : "Login"} {/* Show different text while loading */}
        </button>
      </div>

      {/* Display error message if any */}
      {error && (
        <p className="text-red-500 font-medium text-sm mt-5">{error}</p>
      )}
    </form>
  );
}

export default Login;
