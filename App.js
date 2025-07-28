import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'


/**
 * Building a swigy type website
 * 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  -Search Bar
 *  -Cards Container
 * Footer
 *  - Copyright
 *  -Links
 *  - Adress
 *  - Contact
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images-platform.99static.com/PqkxPzdIGHYlwJzMzFSLbWCaI0g=/0x0:1181x1181/500x500/top/smart/99designs-contests-attachments/134/134197/attachment_134197839" />
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}



// De-strcturing the Props in the object
// const RestaurantCard =({ resName, cuisine}) => {
//     return (
//         <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
//             <img 
//             className="res-logo"
//             alt="res-logo"
//             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg" />
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>4.4 stars</h4>
//             <h4>38 mins</h4>
//         </div>
//     )
// }

const RestaurantCard =(props) => {
    const { resName, cuisine} = props
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Biriyani, North Indian"/>
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);


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


// const heading = (
//     <h1 className="head" tabIndex="5">Hello React</h1>
// )

// React Conponent

// 1. React Function component


// Component Composition

// const Title = () => (
//     <h1>Hello Title</h1>
// )

// const HeadingComponent = () => {
//     return (
//     <div id="container">
//         <Title />
//         {Title()}
//     <h1>Hello React Function Component</h1>;
//     </div>
//     )
// }


// const HeadingComponent1 = () =>  <h1>Hello React Function Component</h1>;



// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// root.render(<HeadingComponent/>);