// 1️⃣ Importing React's StrictMode for highlighting potential problems in development.
import { StrictMode } from "react";

// 2️⃣ Importing `createRoot` from React DOM (modern way to render React apps)
import { createRoot } from "react-dom/client";

// 3️⃣ Importing Global CSS file for styling
import "./index.css";

// 4️⃣ Importing the main App component
import App from "./App.jsx";

// 5️⃣ Importing ThemeProvider (Context API) to provide global theme state
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

// 6️⃣ Selecting the root div where the app will be mounted
createRoot(document.getElementById("root")).render(
  // 7️⃣ Wrapping the entire application in `StrictMode`
  // - Helps in identifying potential issues like deprecated methods, side effects, etc.
  <StrictMode>
    {/* 8️⃣ Wrapping the App inside ThemeProvider */}
    {/* - This ensures that the theme context is accessible in the entire app. */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
