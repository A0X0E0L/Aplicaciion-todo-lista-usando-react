//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Card from "./component/Card.jsx";
import Home from "./component/home.jsx";

//import your own components


//render your react application
ReactDOM.render(<Home/> , document.querySelector("#app"));