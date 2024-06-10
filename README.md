# Movie Search App with React Hooks
Welcome to the Movie Search App built with React Hooks! This project aims to demonstrate the power and simplicity of React Hooks API by creating a movie search application entirely with functional components.

## Overview
This application allows users to search for movies using the OMDB API and view the results in a simple and intuitive interface. It serves as a practical example of how React Hooks can be utilized to manage state, handle side effects, and create reusable logic within functional components.

# Features
  - **'Search Movies:'** Enter a movie title in the search bar and instantly see matching results.
  - **'Dynamic Rendering:'** Movies are dynamically rendered as you type, providing a seamless user experience.
  - **'Error Handling:'** Comprehensive error handling ensures smooth operation even in case of API errors.
  - **'Responsive Design:'** The application is designed to be responsive and works seamlessly across different screen sizes.

## Software Stack
  - **'React JS:'** The core library for building the user interface.
  - **'OMDB API:'** Provides access to a vast database of movie information.
  - **'Node.js:'** Required for setting up the React app and managing dependencies.

## Dependencies
Before getting started, make sure you have the following prerequisites:

  - Node (Version ≥ 6)
  - A Text Editor of your choice
  - OMDB API Key (You can obtain it here or use the provided one)

## Getting Started
 
1. **'Create React App:'** Start by creating a new React app using create-react-app:
   
   ```bash
   npx create-react-app hooked

   #If create-react-app is not installed, you can install it globally:
  
  ```bash
  npm install -g create-react-app

2. **'Project Structure:'** After creating the app, you'll have a folder named "hooked" containing the initial project structure.

3. **'Install Dependencies:'** Navigate to the project directory and install the necessary dependencies:

    ```bash
    cd hooked
    npm install

4. **'Start the Development Server:'** Launch the development server to see the app in action:

    ```bash
    npm start

    This command will start the development server and open the app in your default web browser.


## Project Structure
The project structure follows a component-based architecture:

  - **App.js:** The main component serving as the parent for other components. It handles API requests and renders the UI.
  - **Header.js:** Renders the application header with a customizable title.
  - **Movie.js:** Renders individual movie items, including title, image, and year.
  - **Search.js:** Provides a search form with input field and button, and handles user input and search functionality.

## Conclusion
Congratulations! You've now set up the Movie Search App using React Hooks. This project serves as a practical introduction to the capabilities of Hooks and demonstrates how they can simplify React development.

Feel free to explore further by experimenting with additional hooks or implementing your own custom hooks. Join the excitement around React Hooks and unleash the full potential of functional components in your projects!

For any questions or feedback, please don't hesitate to reach out. Happy coding! 🚀


