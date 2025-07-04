import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
        "div", 
        {id: "parent"}, 
        [
            React.createElement(
            "div",
            {id: "child"},
            [React.createElement("h1", {}, "I'm h1 tags"),
            React.createElement("h2", {} , "I'm a h2 tag"),
        ]
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [React.createElement("h1", {}, "I'm h1 tag"),
            React.createElement("h2", {} , "I'm a h2 tag"),
        ]
        )
        ]
    )

    // const heading = React.createElement("h1", {}, "Hello World!");
    const root = ReactDOM.createRoot(document.getElementById("root"));

    
console.log(parent)

    root.render(parent)