// Define the initial state for the reducer
export const initialState = {
  loading: true, // Indicates whether the app is currently loading data
  movies: [], // An array to store the movies fetched from the API
  errorMessage: null // A string to store any error messages
};

// Define the reducer function
export const reducer = (state, action) => {
  // Use a switch statement to handle different action types
  switch (action.type) {
    // When a search request is made
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state, // Spread the current state
        loading: true, // Set loading to true
        errorMessage: null // Clear any existing error messages
      };
    // When a search request is successful
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state, // Spread the current state
        loading: false, // Set loading to false
        movies: action.payload // Update the movies array with the payload from the action
      };
    // When a search request fails
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state, // Spread the current state
        loading: false, // Set loading to false
        errorMessage: action.error, // Set the error message to the error from the action
        movies: [] // Clear the movies array
      };
    // For any other action types, return the current state
    default:
      return state;
  }
};