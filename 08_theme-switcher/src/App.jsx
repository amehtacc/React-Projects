// Importing React library (required for JSX)
import React from 'react';

// Importing `useTheme` from ThemeContext
// - This allows us to access the theme state and the function to toggle it.
import { useTheme } from './contexts/ThemeContext';

function App() {
  // 1️⃣ Extracting theme values from the Context
  // - `theme` holds the current theme (either 'light' or 'dark').
  // - `themeSwitcher` is the function to toggle between light and dark modes.
  const { theme, themeSwitcher } = useTheme();

  return (
    // 2️⃣ Creating a full-screen div with conditional styling based on the theme
    // - `h-screen` ensures it takes the full height of the viewport.
    // - `justify-center` & `items-center` center everything inside.
    // - The background and text color change dynamically based on the theme.
    <div 
      className={`w-full h-screen flex justify-center items-center 
      ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      {/* 3️⃣ Theme Toggle Button */}
      {/* - Clicking the button triggers `themeSwitcher` to toggle themes */}
      {/* - The button's color scheme also changes dynamically */}
      <button 
        onClick={themeSwitcher} 
        className={`w-40 h-16 text-2xl font-bold border-4 rounded-3xl cursor-pointer 
        ${theme === 'dark' ? 
          'bg-white text-gray-900 hover:bg-gray-200 border-gray-400' : 
          'bg-gray-900 hover:bg-gray-950 text-white border-gray-500'} 
        transition-all duration-200`}
      >
        {/* 4️⃣ Button Text Updates Dynamically */}
        {/* - If the theme is 'dark', it shows 'White' (indicating the switch to light mode). */}
        {/* - If the theme is 'light', it shows 'Dark' (indicating the switch to dark mode). */}
        {theme === 'dark' ? 'White' : 'Dark'}
      </button>
    </div>
  );
}

// Exporting the App component
export default App;
