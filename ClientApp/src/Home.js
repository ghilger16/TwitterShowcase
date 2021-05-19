import React from "react";
import "./App.css";
import background from "./Images/home.jpg";
import badge from "./Images/verified.png";

const Home = () => {
    return (
        <body style={{ overflow: "hidden" }}>
            <div
                className="intro d-flex"
                style={{ backgroundImage: `url(${background})` }}
            >
                {" "}
                <div>
                    <h1 class="text-white ml-4">
                        Welcome to Twitter Showcase
            <img className="name" src={badge} alt="verifiedbadge" />
                    </h1>
                    <h3 class="text-white ml-5">
                        Search Tweets by User{" "}
                        <i class="fa fa-retweet retweet-button text-primary">
                            <span class="ml-3"></span>
                        </i>
                    </h3>
                    <h3 class="text-white ml-5">
                        Search Tweets by Keyword{" "}
                        <i class="fa fa-heart like-button text-primary">
                            <span class="ml-3"></span>
                        </i>
                    </h3>
                    <h3 class="text-white ml-5">
                        Explore Random Tweets{" "}
                        <i class="fa fa-twitter text-primary">
                            <span class="ml-3"></span>
                        </i>
                    </h3>
                </div>
            </div>
        </body>
    );
};

export default Home;
