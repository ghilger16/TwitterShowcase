import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import Modal from "./components/Modal";
import axios from "axios";

const Random = () => {
    const [showRandomTweetModal, setShowRandomTweetModal] = useState(false);
    const [randomTweet, setRandomTweet] = useState([]);
    const [userCards, setUserCards] = useState([]);

    const twitterUserIcons = [
        "simpsonsqotd",
        "officeqs",
        "snl_polls",
        "all_seinfeld",
        "bluthquotes",
    ];

    useEffect(() => {
        getUserCards();
    }, []);

    const getUserCards = async () => {
        const result = Promise.all(
            twitterUserIcons.map(async (userName) => {
                const result = await axios.get(`/tweet/randomUser/${userName}`);
                const user = result.data[0].user;
                user.profile_image_url_https = user.profile_image_url_https.replace(
                    "_normal",
                    ""
                );
                return user;
            })
        );
        const cards = await result;
        setUserCards(cards);
    };

    const getRandomTweet = async (searchQuery) => {
        axios
            .get(`/tweet/randomTweet/${searchQuery}`)
            .then((response) => {
                setRandomTweet(response.data);
                setShowRandomTweetModal(true);
            })

            .catch((error) => {
                alert(error);
            });
    };

    const handleRandomTweetClick = (randomTweet) => {
        getRandomTweet(randomTweet);
    };

    const closeModal = () => setShowRandomTweetModal(false);

    return (
        <div className="random-user">
            {showRandomTweetModal ? (
                <div onClick={closeModal} className="back-drop" />
            ) : null}
            <h3 class="d-flex justify-content-center pt-3">Random Tweets</h3>
            <span class="d-flex justify-content-center mt-5">
                {userCards.map((user) => {
                    return (
                        <UserCard user={user} onRandomTweetClick={handleRandomTweetClick} />
                    );
                })}
            </span>
            <Modal show={showRandomTweetModal} tweet={randomTweet} />
        </div>
    );
};

export default Random;
