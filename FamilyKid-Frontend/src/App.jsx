import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "./components/LoadingScreen/LoadingScreen"; // Import the LoadingSpinner component
import { ToastContainer } from "react-toastify";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed (2 seconds in this example)
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner /> // Display the loading spinner while loading
      ) : (
        <Outlet /> // Render the main app content when loading is complete
      )}
      <ToastContainer />
    </>
  );
}

export default App;
