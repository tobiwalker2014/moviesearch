// Import the React library
import React from "react";

// Define a default placeholder image URL
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

// Define the Movie component
const Movie = ({ movie }) => {
  // Determine the poster URL - if the movie's Poster property is "N/A", use the default placeholder image
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  
  // Render the component
  return (
    <div className="movie">
      <h2>{movie.Title}</h2> {/* Display the movie's title */}
      <div>
        <img
          width="200" // Set the width of the image
          alt={`The movie titled: ${movie.Title}`} // Set the alt text of the image
          src={poster} // Set the source of the image
        />
      </div>
      <p>({movie.Year})</p> {/* Display the movie's year */}
    </div>
  );
};

// Export the Movie component
export default Movie;