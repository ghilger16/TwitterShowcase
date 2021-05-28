import React, { useState } from "react";
import TweetCard from "./components/TweetCard";
import "./App.css";
import axios from "axios";
import Toggle from "react-toggle";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchType, setSearchType] = useState("user");
    const [tweets, setTweets] = useState([]);

    const getUserTweets = async (searchQuery, searchType) => {
        axios
            .get(`/tweet/${searchType}/${searchQuery}`)
            .then((response) => {
                searchType === "user"
                    ? setTweets(response.data)
                    : setTweets(response.data.statuses);
            })
            .catch((error) => {
                alert(error + " \nPlease try search again");
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery === "") {
            alert("Search Form is Empty!");
            return;
        }
        getUserTweets(searchQuery, searchType);
    };

    const handleToggle = () => {
        const searchTerm = searchType === "user" ? "keyword" : "user";
        setSearchType(searchTerm);
    };

    const renderTweetCard = (tweet) => {
        if (tweet.retweeted_status) {
            return (
                <TweetCard
                    tweet={tweet.retweeted_status}
                    retweetedBy={tweet.user.name}
                    border={true}
                />
            );
        }
        return <TweetCard tweet={tweet} border={true} />;
    };

    return (
        <div>
            <h2 class="d-flex justify-content-center mr-5 mt-3 text-light font-weight-bold">
                Find Tweets
      </h2>
            <div class="d-flex justify-content-center ml-5">
                <form class="d-flex mt-5" onSubmit={handleSubmit}>
                    <input
                        class="form-control input-lg"
                        type="text"
                        onChange={(e) => setSearchQuery(e.target.value.split(" ").join(""))}
                    />
                    <button
                        class=" px-3 btn btn-lg text-light font-weight-bold"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Search
          </button>
                </form>
            </div>
            <span class="d-flex p-2 mr-5 justify-content-center text-light font-weight-bold">
                <label class="mr-3">User</label>
                <Toggle icons={false} onChange={handleToggle} />
                <label class="ml-3">Keyword</label>
            </span>
            <div class="align-items-center d-flex flex-column">
                {tweets.map((tweet) => renderTweetCard(tweet))}
            </div>
        </div>
    );
};

export default Search;
