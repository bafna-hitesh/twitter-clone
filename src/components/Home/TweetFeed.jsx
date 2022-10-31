import React from "react";
import { useRef, useEffect, useState } from "react";
import { useData } from "../context";
import Tweet from "./Tweet";
import TweetBtn from "./TweetBtn";

import { featchData } from "../../data";

const TweetFeed = () => {
  const { tweet, setTweet, tweetArr, filterTweet } = useData();

  const textareaRef = useRef(null);

  const changeHandler = (e) => {
    setTweet(e.target.value);
  };

  useEffect(() => {
    tweet ? textareaRef.current.focus() : null;
  }, [tweet]);

  return (
    <div className="tweet-sec bg-white-dark rounded-md">
      <div className="home-header bg-white rounded-md pd-5 ">
        <div className="home-header-title text-black-dark">Home</div>
      </div>

      <div className="tweet-textarea rounded-md bg-white rounded-md">
        <div className="textarea-sec pd-5">
          <div className="profile-logo-container-sm">
            <div className="rounded-full ">
              <img
                className="profile-logo-sm rounded-full"
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
                alt=""
              />
            </div>
          </div>
          <div className="textarea-container">
            <div>
              <textarea
                placeholder="What's Happening?"
                value={tweet}
                className="textarea-field text-black bg-white rounded-md"
                onChange={changeHandler}
                ref={textareaRef}
              ></textarea>
            </div>
            <TweetBtn />
          </div>
        </div>
      </div>

      {(filterTweet || tweetArr).data.map((element) => (
        <Tweet
          key={element.id}
          id={element.id}
          tweetmsg={element.text}
          authorId={element.author_id}
        />
      ))}
    </div>
  );
};

export default TweetFeed;
