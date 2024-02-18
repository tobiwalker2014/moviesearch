// Import the React library
import React from "react";

// Define the Header component
// This component receives props and uses the 'text' prop to display a title
const Header = props => {
  // Render the component
  return (
    // Create a header element with a class name of 'App-header'
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};

// Export the Header component
export default Header;