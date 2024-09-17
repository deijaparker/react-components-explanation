// Explanation of React Components
// React components are the building blocks of a React application.
// A component is a JavaScript function or class that optionally accepts inputs (called "props")
// and returns a React element that describes how a section of the UI should appear.

import React from "react"; // Import React library to use React features

// Functional Component
// Functional components are JavaScript functions that return JSX (a syntax extension that allows mixing HTML with JavaScript).
// They are ideal for simple components that do not require internal state or lifecycle methods.
function Welcome(props) {
  // Props are inputs passed to the component, in this case, `name`
  return <h1>Hello, {props.name}!</h1>;
}
