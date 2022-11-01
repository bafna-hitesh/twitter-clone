import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../context";

const Header = () => {
  const { setIsLogin } = useData();

  const logoutHandler = () => {
    localStorage?.removeItem("loginStatus");
    setIsLogin(false);
    console.log("Logged Out Successfully!");
  };

  return (
    <header className="header-container">
      <div className="header-title-main">
        <Link to="/home">
          <span className="header-title">twitter</span>
        </Link>
        <nav className="logout-main">
          <button className="logout-btn" onClick={logoutHandler}>
            Log Out
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
