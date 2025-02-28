import React, { useState } from "react"; // Import React and useState hook for state management
import Input from "./Input"; // Import the reusable Input component

function Registration() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to manage success message after form submission
  const [successMessage, setSuccessMessage] = useState("");

  // State to manage error messages for validation feedback
  const [error, setError] = useState("");

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State to manage loading state when submitting the form
  const [loading, setLoading] = useState(false);

  // Function to handle input changes
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update corresponding field in state
    setError(""); // Clear error message on change
    setSuccessMessage(""); // Clear success message when typing
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload
    
    setSuccessMessage(""); // Reset success message

    // Trim whitespace from input values
    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();
    const trimmedUsername = formData.username.trim();
    const trimmedConfirmPassword = formData.confirmPassword.trim();

    // Validation: Ensure all fields are filled
    if (!trimmedEmail || !trimmedPassword || !trimmedUsername || !trimmedConfirmPassword) {
      setError("*All fields are required!");
      return;
    }

    // Validation: Ensure username follows required pattern
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    if (!usernameRegex.test(trimmedUsername)) {
      setError("Username must have 3-16 chars, letters, numbers, underscores only.");
      return;
    }

    // Validation: Ensure email follows a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    // Validation: Ensure password is at least 8 characters long
    if (trimmedPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // Validation: Ensure passwords match
    if(trimmedPassword !== trimmedConfirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    setLoading(true); // Set loading state to true

    // Simulate a registration process with a timeout
    setTimeout(() => {
      setSuccessMessage(`*Welcome ${formData.username}, You are Successfully Registered.`); // Show success message
      setLoading(false); // Stop loading

      // Reset form fields
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 2000);
  }

  return (
    <form
      onSubmit={handleSubmit} // Attach submit handler
      className="w-[400px] h-[580px] rounded-xl bg-white flex flex-col items-center p-10"
    >
      {/* Form title */}
      <h1 className="text-3xl font-bold mt-3 mb-12">Registration</h1>

      <div className="flex flex-col justify-center items-center gap-10">
        {/* Username input */}
        <Input
          id="username"
          type="text"
          placeholder="Enter your username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          autoComplete="username"
        />
        {/* Email input */}
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        {/* Password input with show/hide toggle */}
        <div className="relative flex justify-center items-center">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <button
            className="absolute right-3 cursor-pointer font-medium text-sm text-gray-600 hover:text-gray-900 transition duration-200"
            aria-label="Toggle password visibility"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {/* Confirm password input */}
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
        />
        {/* Submit button with loading state */}
        <button
          className={`w-28 h-10 rounded-lg font-semibold border-[3px] ${
            loading
              ? "bg-gray-500 text-white border-gray-600 cursor-not-allowed"
              : "bg-green-400 hover:bg-green-500 hover:text-white cursor-pointer border-transparent hover:border-green-600 "
          } transition-all duration-200`}
          type="submit"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>

      {/* Error message display */}
      {error && (
        <p className="text-red-500 font-medium text-sm mt-5 text-center">
          {error}
        </p>
      )}
      {/* Success message display */}
      {successMessage && (
        <p className="text-green-500 font-medium text-sm mt-5 text-center">
          {successMessage}
        </p>
      )}
    </form>
  );
}

export default Registration;
