// Import necessary modules and components
import React, { useEffect, useState } from "react";

// Define the Search component
const Search = ({ search }) => {
  // Use the useState hook to manage the search value
  const [searchValue, setSearchValue] = useState("");

  // Define the function to handle changes to the search input
  const handleSearchInputChanges = e => {
    // Update the search value state with the new input
    setSearchValue(e.target.value);
    // Store the search value in local storage
    localStorage.setItem("searchValue", e.target.value);
  };

  // Use the useEffect hook to set the search value from local storage when the component mounts
  useEffect(() => {
    const searchValue = localStorage.getItem("searchValue");
    setSearchValue(searchValue);
  }, []);

  // Define the function to call the search function passed in as a prop
  const callSearchFunction = e => {
    // Prevent the form from refreshing the page
    e.preventDefault();
    // Call the search function with the current search value
    search(searchValue);
  };

  // Render the component
  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

// Export the Search component
export default Search;