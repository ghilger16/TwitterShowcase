import React from "react";
import "./App.css";
import background from "./Images/home.jpg";

const Home = () => {
    return (
        <div
            className="intro"
            style={{ backgroundImage: `url(${background})` }}
        ></div>
    );
};

export default Home;
