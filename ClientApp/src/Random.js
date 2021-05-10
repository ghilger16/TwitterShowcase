import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import Modal from "./components/Modal";

const Random = () => {
  const [showRandomTweetModal, setShowRandomTweetModal] = useState(false);
  const [randomTweet, setRandomTweet] = useState([]);
  const [twitterUserIcons] = useState([
    "simpsonsqotd",
    "satisfyingdaily",
    "mental_floss",
    "merriamwebster",
    "goodquoteco",
  ]);

  useEffect(() => {
    return () => setShowRandomTweetModal(true);
  }, [randomTweet]);

  const closeModal = () => setShowRandomTweetModal(false);

  return (
    <div className="random-user">
      {showRandomTweetModal ? (
        <div onClick={closeModal} className="back-drop" />
      ) : null}
      <h3 class="d-flex justify-content-center pt-3">Random Tweets</h3>
      <span class="d-flex justify-content-center mt-5">
        {twitterUserIcons.map((twitterUser) => {
          return (
            <UserCard
              twitterUser={twitterUser}
              setRandomTweet={setRandomTweet}
            />
          );
        })}
      </span>
      <Modal show={showRandomTweetModal} tweet={randomTweet} />
    </div>
  );
};

export default Random;
