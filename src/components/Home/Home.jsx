import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import TweetFeed from "./TweetFeed";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <TweetFeed />
      <Searchbar />
    </div>
  );
};

export default Home;
