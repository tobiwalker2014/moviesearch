// Import necessary modules and components
import React, { useReducer, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import spinner from "../assets/ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";

// Get the search value from local storage or default to "man"
const searcValueFromLocalStorage = localStorage.getItem("searchValue") || "man";

// Define the API URL
const MOVIE_API_URL = `https://www.omdbapi.com/?s=${searcValueFromLocalStorage}&apikey=4a3b711b`;

// Define the App component
const App = () => {
  // Use the useReducer hook to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    axios.get(MOVIE_API_URL).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  // Define the search function
  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    // Make a request to the API with the search value
    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      jsonResponse => {
        console.log("jsonResponse", jsonResponse);
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  // Destructure the state
  const { movies, errorMessage, loading } = state;

  console.log("movies", movies);

  let retrievedMovies;

  // Determine what to display based on the state
  if (loading && !errorMessage) {
    retrievedMovies = <img className="spinner" src={spinner} alt="Loading spinner" />;
  } else if (errorMessage) {
    retrievedMovies = <div className="errorMessage">{errorMessage}</div>;
  } else {
    retrievedMovies = movies?.map((movie) => (
      <Movie key={movie.imdbID} movie={movie} />
    ))
  }

  // Render the component
  return (
    <div className="App">
      <div className="m-container">
        <Header text="Tobi's Movie Selection" />

        <Search search={search} />

        <p className="App-intro">Below are a few movies our of my selection</p>

        <div className="movies">{retrievedMovies}</div>
      </div>
    </div>
  );
};

// Export the App component
export default App;