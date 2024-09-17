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

// Class Component
// Class components are ES6 classes that extend from React.Component and have a render method.
// They can hold internal state and have lifecycle methods.
class Goodbye extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Goodbye!" }; // Initial state
  }

  render() {
    // Accessing props and state to render the UI
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>See you soon, {this.props.name}!</p>
      </div>
    );
  }
}

// App Component
// The App component uses the Welcome and Goodbye components.
// It demonstrates how components can be composed together.
function App() {
  return (
    <div>
      <Welcome name="Deija" /> {/* Using the functional component */}
      <Goodbye name="Deija" /> {/* Using the class component */}
    </div>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;

/*
In this code:
1. We import the React library to use its features.
2. We define a functional component `Welcome` that displays a greeting.
3. We define a class component `Goodbye` that displays a farewell message and uses internal state.
4. We create an `App` component that renders both `Welcome` and `Goodbye`.
5. We export the `App` component for use in other parts of the application.
*/

// Note: To see this in action, you would need to integrate this code into a React application,
// typically using tools like Create React App to set up the environment.
