// Importing React hooks
import { useState, useEffect } from "react";

// Custom hook to fetch product data from an API
export function useFetchProduct() {
  // State variables for storing fetched data, loading state, and error messages
  const [data, setData] = useState([]); // Stores fetched product data (initially an empty array)
  const [loading, setLoading] = useState(true); // Indicates whether data is being loaded (initially `true`)
  const [error, setError] = useState(""); // Stores error messages (initially an empty string)

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Async function to fetch product data from the API
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // Sending GET request to the API

        // Checking if the response is not successful (e.g., 404, 500 errors)
        if (!response.ok) {
          throw new Error(`Status : ${response.status}`); // Throwing an error if the response isn't OK
        }

        const data = await response.json(); // Parsing response data into JSON format
        setData(data); // Updating the state with fetched data
      } catch (error) {
        setError(error.message); // Storing error message in the state if an error occurs        
      } finally {
        setLoading(false); // Setting `loading` to false after fetching is complete (whether successful or not)
      }
    }

    fetchData(); // Calling the function to fetch data

  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Returning the fetched data, loading state, and error message so they can be used in a component
  return { data, loading, error };
}
