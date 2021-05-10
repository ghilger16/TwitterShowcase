import React from "react";

import ReactPlayer from "react-player";
import badge from "../Images/verified.png";

const TweetCard = ({ tweet, retweetedBy, border }) => {
  return (
    <div
      className="tweet"
      style={{
        borderStyle: border ? "solid" : "none",
      }}
    >
      <ProfileImage
        image={tweet.user.profile_image_url_https.replace("_normal", "")}
        alt="userIcon"
      />

      <div className="content">
        <div>
          {retweetedBy ? <RetweetStatus retweetedBy={retweetedBy} /> : null}
        </div>
        <ScreenName user={tweet.user} />
        <Time time={tweet.created_at} />
        <Text
          text={tweet.text || tweet.full_text}
          media={tweet.extended_entities}
        />

        <div className="buttons">
          <LikeButton likes={tweet.favorite_count} />
          <RetweetButton retweets={tweet.retweet_count} />
        </div>
      </div>
    </div>
  );
};

const ProfileImage = ({ image }) => {
  return <img src={image} className="profile-image" alt="profile" />;
};

const Text = ({ text, media }) => {
  return (
    <div className="text">
      <div>{linkify(text)}</div>
      <div class="mt-3">{renderMedia(media)}</div>
    </div>
  );
};

const ScreenName = ({ user }) => {
  return (
    <span className="screen-name">
      <span className="name">
        {user.name}
        {user.verified ? <img src={badge} alt="verifiedbadge" /> : null}
      </span>
      <span className="handle">{`@${user.screen_name}`}</span>
    </span>
  );
};

const Time = ({ time }) => <span className="time">{prettyDate(time)}</span>;

const LikeButton = ({ likes }) => (
  <i class="fa fa-heart like-button">
    <span class="ml-3">{likes}</span>
  </i>
);

const RetweetButton = ({ retweets }) => (
  <i class="fa fa-retweet retweet-button">
    <span class="ml-3">{retweets}</span>
  </i>
);

const RetweetStatus = ({ retweetedBy }) => {
  return (
    <div className="retweetStatus">
      <i class="fa fa-retweet retweet-button">
        <span class="ml-2">{retweetedBy} Retweeted</span>
      </i>
    </div>
  );
};

const renderMedia = (media) => {
  if (media) {
    const type = media.media[0].type;
    switch (type) {
      case "photo":
        return (
          <img
            src={media.media[0].media_url_https}
            className="photo"
            alt="tweetedphoto"
          />
        );
      case "video":
        return (
          <ReactPlayer
            className="video"
            width={500}
            controls={true}
            url={media.media[0].video_info.variants[0].url}
            alt="tweetedvideo"
          />
        );
      default:
        return null;
    }
  }
};

//taken from stackoverflow
const linkify = (text) => {
  var replacedText, replacePattern1;

  //URLs starting with http://, https://, or ftp://
  replacePattern1 = /(\b(https?|ftp):[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  replacedText = text.replace(replacePattern1, "");
  return replacedText;
};

//taken from stackoverflow
const prettyDate = (time) => {
  var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
    diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);

  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) return;

  return (
    (day_diff === 0 &&
      ((diff < 60 && "just now") ||
        (diff < 120 && "1 minute ago") ||
        (diff < 3600 && Math.floor(diff / 60) + " minutes ago") ||
        (diff < 7200 && "1 hour ago") ||
        (diff < 86400 && Math.floor(diff / 3600) + " hours ago"))) ||
    (day_diff === 1 && "Yesterday") ||
    (day_diff < 7 && day_diff + " days ago") ||
    (day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago")
  );
};

export default TweetCard;
