// ✅ Importing StrictMode for highlighting potential issues in development mode
import { StrictMode } from "react";

// ✅ Importing createRoot to create a root for rendering React components
import { createRoot } from "react-dom/client";

// ✅ Importing global styles for the application
import "./index.css";

// ✅ Importing the main App component that acts as the layout or wrapper for other pages
import App from "./App.jsx";

// ✅ Importing necessary functions from React Router for routing setup
import {
  Route,                  // Defines individual routes
  RouterProvider,         // Provides the router configuration to the app
  createBrowserRouter,    // Creates a browser router for navigation
  createRoutesFromElements // Allows defining routes using JSX elements
} from "react-router-dom";

// ✅ Importing page components that will be used as different routes
import Home from "./pages/Home.jsx";       // Home Page Component
import About from "./pages/About.jsx";     // About Page Component
import Contact from "./pages/Contact.jsx"; // Contact Page Component
import NoPage from "./pages/NoPage.jsx";   // 404 Page Component (for unmatched routes)

// ❌ [OLD APPROACH - Using Route Objects]
// This method uses an array of route objects to define navigation. This is commented out 
// because we are now using `createRoutesFromElements` instead.

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />, // App component acts as a layout that wraps child pages
//     children: [
//       {
//         path: "",        // Default route → Loads Home component
//         element: <Home />,
//       },
//       {
//         path: "about",   // Navigating to "/about" → Loads About component
//         element: <About />
//       },
//       {
//         path: "contact", // Navigating to "/contact" → Loads Contact component
//         element: <Contact />
//       },
//       {
//         path: "*",       // Catch-all route for undefined pages → Loads NoPage component
//         element: <NoPage />
//       },
//     ]
//   }
// ])

// ✅ [NEW APPROACH - Using JSX Routes]
// This method is cleaner and more readable, defining routes using JSX elements.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Default Route → Renders the Home component when the user visits "/" */}
      <Route path="" element={<Home />} />

      {/* "/about" Route → Renders the About component */}
      <Route path="about" element={<About />} />

      {/* "/contact" Route → Renders the Contact component */}
      <Route path="contact" element={<Contact />} />

      {/* Catch-All Route (404) → If the user enters an invalid path, NoPage component is rendered */}
      <Route path="*" element={<NoPage />} />
    </Route>
  )
);

// ✅ Rendering the application inside the root element of "index.html"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Providing the router to the application using RouterProvider */}
    <RouterProvider router={router} />

    {/* ❌ [ALTERNATIVE APPROACH - Using BrowserRouter and Routes] */}
    {/* This approach is commented out because we are using RouterProvider instead. */}
    {/* 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> 
    */}
  </StrictMode>
);
