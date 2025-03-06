// Importing necessary dependencies
import React from "react";
import { useFetchProduct } from "./hooks/useFetchProduct"; // Custom hook to fetch product data
import ProductCard from "./components/ProductCard"; // Reusable component to display product details
import LoadingSpinner from "./components/LoadingSpinner"; // Component to show a loading indicator

// Main App component
function App() {
  // Destructuring values returned by the custom hook
  const { data, loading, error } = useFetchProduct(); 
  // - `data`: Holds the array of products fetched from the API
  // - `loading`: Boolean state to indicate if data is being fetched
  // - `error`: Holds any error message encountered during fetching

  return (
    // Outer container with full height, centered content, and spacing
    <div className="h-screen flex flex-wrap justify-center items-center gap-10 p-10">
      
      {/* Conditional rendering based on fetch states */}
      {loading ? ( 
        // Show the loading spinner while data is being fetched
        <LoadingSpinner />
      ) : error ? ( 
        // If an error occurs, display an error message in red
        <p className="text-red-500 text-xl font-bold">Fetched Error {error}</p>
      ) : (
        // If data is successfully fetched, map through the products and render a ProductCard for each
        data?.map((product) => (
          <ProductCard
            key={product.id} // Unique key to help React efficiently update the UI
            image={product.image} // Product image URL
            title={product.title} // Product title
            price={product.price} // Product price
            category={product.category} // Product category
            rating={product.rating.rate} // Product rating (out of 5)
            reviewsCount={product.rating.count} // Number of reviews
            description={product.description} // Product description
          />
        ))
      )}
    </div>
  );
}

// Exporting the App component as default so it can be used in index.js or other files
export default App;
