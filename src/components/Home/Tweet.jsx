import React from "react";
import { useData } from "../context";

const Tweet = ({ id, tweetmsg, authorId }) => {
  const { setTweet, tweetArr, setTweetArr, setIsEditTweet, user } = useData();

  function userName(userId) {
    return tweetArr.includes.users.map((e) =>
      e.id === userId ? e.username : ""
    );
  }

  const deleteHandler = (elId) => {
    const updatedItems = tweetArr.data.filter((item) => item.id !== elId);
    setTweetArr({ ...tweetArr, data: updatedItems });
  };

  const editHandler = (elId) => {
    const editItem = tweetArr.data.find((el) => el.id === elId);
    // console.log(editItem.text);
    setTweet(editItem.text);
    setIsEditTweet({ id: editItem.id, status: true });
  };

  // function urlify(text) {
  //   let urlRegex = /(https?:\/\/[^ ]*)/;
  //   let url = text.match(urlRegex);
  //   return url ? url[0] : null;
  // }
  // console.log(urlify(tweetmsg));

  return (
    <article className="tweet-article rounded-md mt-5  bg-white">
      <div className="tweet-article-main pd-5">
        <div className="profile-logo-container-sm">
          <div className="rounded-full ">
            <img
              className="profile-logo-sm rounded-full"
              src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
              alt=""
            />
          </div>
        </div>
        <div className="tweet-container ">
          <div className="tweet-user ">
            <a href="">
              <span className="tweet-user-name text-black-dark">
                {authorId
                  ? userName(authorId)
                  : user.first_name + user.last_name}
              </span>
            </a>
          </div>

          <p
            className="tweet-msg text-black"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {tweetmsg}
          </p>

          <div className="tweet-controller">
            <div className="btn ">
              <button
                className="edit-btn text-white"
                onClick={() => editHandler(id)}
              >
                <i class="fa-solid fa-pen-to-square fa-icon"></i>
              </button>
            </div>
            <div className="btn ">
              <button
                className="delete-btn text-white"
                onClick={() => deleteHandler(id)}
              >
                <i class="fa-sharp fa-solid fa-trash fa-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Tweet;
