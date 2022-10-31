import React from "react";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

import { featchData, userData } from "../data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(userData);
  const [tweet, setTweet] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [tweetArr, setTweetArr] = useState(featchData);
  const [filterTweet, setFilterTweet] = useState();
  const [isEditedTweet, setIsEditTweet] = useState({ id: "", status: false });

  // async function featchUserData() {
  //   const res = await fetch("https://tweets.free.beeceptor.com/profile");
  //   const data = await res.json();
  //   setUser(data);
  // }

  // useEffect(() => {
  //   async function featchData() {
  //     const res = await fetch("https://tweets.free.beeceptor.com/tweets/all");
  //     const data = await res.json();
  //     setTweetArr(data);
  //   }
  //   // featchData()
  // }, []);

  // console.log(featchData);

  const initialState = {
    tweet,
    setTweet,
    tweetArr,
    setTweetArr,
    isEditedTweet,
    setIsEditTweet,
    isLogin,
    setIsLogin,
    user,
    filterTweet,
    setFilterTweet,
  };

  return (
    <DataContext.Provider value={initialState}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
