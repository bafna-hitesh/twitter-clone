import React from "react";
import { useState } from "react";
import { useData } from "../context";

const Searchbar = () => {
  const { tweetArr, setFilterTweet } = useData();

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const filterData = tweetArr.data.filter((e) => {
      return e.text.includes(input);
    });

    setFilterTweet(filterData ? { ...tweetArr, data: filterData } : tweetArr);
  };
  // console.log(filterTweet);
  return (
    <form onSubmit={handleSubmit}>
      <div className="searchbar-container bg-white-dark rounded-md">
        <div className="search-bar ">
          <button className="search-bar-btn link-no-style" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <input
            className="search-bar-input"
            type="text"
            placeholder="Search Twitter"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
