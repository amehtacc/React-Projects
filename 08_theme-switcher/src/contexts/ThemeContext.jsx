// Importing necessary hooks from React
import React, { createContext, useContext, useState } from 'react';

// 1️⃣ Creating a Context for Theme
// - This creates a new context object that will hold our theme-related state and functions.
// - Context API helps in avoiding props drilling by providing a global state.
const ThemeContext = createContext();

// 2️⃣ Creating a Provider Component
// - This component wraps the part of the app where we want to provide theme-related data.
// - It manages the theme state and provides a function to switch themes.
export function ThemeProvider({ children }) {
    // 3️⃣ Initializing the theme state
    // - `theme` stores the current theme ('light' or 'dark').
    // - `setTheme` is the function to update the theme.
    const [theme, setTheme] = useState("light");

    // 4️⃣ Function to Toggle Theme
    // - This function switches the theme between 'light' and 'dark'.
    // - Uses the previous state (`prev`) to determine the next theme.
    function themeSwitcher() {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light');
    }

    return (
        // 5️⃣ Providing Theme State and Function Globally
        // - `ThemeContext.Provider` makes `theme` and `themeSwitcher` available to all child components.
        <ThemeContext.Provider value={{ theme, themeSwitcher }}>
            {children} {/* Renders all child components inside the provider */}
        </ThemeContext.Provider>
    );
}

// 6️⃣ Custom Hook to Use Theme Context
// - `useTheme` is a shortcut to access `ThemeContext` easily in any component.
// - Instead of `useContext(ThemeContext)` every time, we can simply call `useTheme()`.
export function useTheme() {
    return useContext(ThemeContext);
}
