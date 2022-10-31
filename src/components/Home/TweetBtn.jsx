import React, { useId } from "react";
import { useData } from "../context";

const TweetBtn = () => {
  const { tweet, setTweet, tweetArr, setTweetArr, isEditedTweet } = useData();

  const clickHandler = () => {
    const newTweet = { id: new Date().getTime().toString(), text: tweet };

    if (tweet && isEditedTweet.status) {
      isEditedTweet.status = false;
      tweetArr.data.map((el) =>
        el.id === isEditedTweet.id ? (el.text = tweet) : "el"
      );
    } else {
      tweetArr.data.unshift(newTweet);
    }
    setTweet("");
  };
  // tweetArr.data.map((el) => {
  //   console.log(el);
  //   return el.id === isEditedTweet.id ? (el.text = tweet) : el;
  // })
  return (
    <div className="tweet-btn-container">
      <button className="tweet-btn text-white btn-hover" onClick={clickHandler}>
        Tweet
      </button>
    </div>
  );
};

export default TweetBtn;
