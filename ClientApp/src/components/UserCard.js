import React from "react";
import badge from "../Images/verified.png";

const UserCard = ({ onRandomTweetClick, user }) => {
    const handleClick = (e) => {
        onRandomTweetClick(user.screen_name);
    };

    return (
        <div className="user" class="ml-4">
            <img
                src={user.profile_image_url_https}
                className="user-image"
                onClick={handleClick}
                alt="twitter user "
            />
            <div>
                <span className="screen-name" class="ml-4">
                    <span className="name">
                        {user.name}
                        {user.verified ? <img src={badge} alt="verifiedbadge" /> : null}
                    </span>
                    <div class="ml-4">
                        <span className="handle">{`@${user.screen_name}`}</span>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default UserCard;
