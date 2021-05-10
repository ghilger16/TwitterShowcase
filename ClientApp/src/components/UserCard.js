import React, { useState, useEffect } from "react";
import badge from "../Images/verified.png";
import axios from "axios";

const UserCard = ({ twitterUser, setRandomTweet }) => {
  const [randomUserCardData, setRandomUserCardData] = useState([]);
  const [unblurredImgUrl, setUnblurredImgUrl] = useState("");

  useEffect(() => {
    getUserCardData(twitterUser);
  }, [twitterUser]);

  const getUserCardData = async (searchQuery) => {
    const response = await axios
      .get("https://localhost:5001/tweet/randomUser/" + searchQuery)
      .then((response) => {
        setRandomUserCardData(response.data[0].user);
        setUnblurredImgUrl(
          response.data[0].user.profile_image_url_https.replace("_normal", "")
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getRandomTweet = async (searchQuery) => {
    const response = await axios
      .get("https://localhost:5001/tweet/randomTweet/" + searchQuery)
      .then((response) => {
        setRandomTweet(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleClick = (e) => {
    getRandomTweet(twitterUser);
  };

  return (
    <div className="user" class="ml-4">
      <img
        src={unblurredImgUrl}
        className="user-image"
        onClick={handleClick}
        alt="twitter user "
      />
      <div>
        <span className="screen-name" class="ml-4">
          <span className="name">
            {randomUserCardData.name}
            {randomUserCardData.verified ? (
              <img src={badge} alt="verifiedbadge" />
            ) : null}
          </span>
          <div class="ml-4">
            <span className="handle">{`@${randomUserCardData.screen_name}`}</span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default UserCard;
