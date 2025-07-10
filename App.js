import React from "react";
import ReactDOM from 'react-dom/client';

// React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1", 
//     {id: "heading"},
//     "Hello React!"
// )

// console.log(heading);

// JSX (Transpiled before it reaches the JS) - PARCEL - Babel

// JSX =>React.createElement => ReactElement-JS-Object => HTMLElement(render)

const jsxHeading = <h1>Hello React!!..</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading)