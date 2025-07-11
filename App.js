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

// const jsxHeading = <h1>Hello React!!..</h1>;

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)


const heading = (
    <h1 className="head" tabIndex="5">Hello React</h1>
)

// React Conponent

// 1. React Function component


// Component Composition

const Title = () => (
    <h1>Hello Title</h1>
)

const HeadingComponent = () => {
    return (
    <div id="container">
        <Title />
        {Title()}
    <h1>Hello React Function Component</h1>;
    </div>
    )
}


// const HeadingComponent1 = () =>  <h1>Hello React Function Component</h1>;



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent/>);