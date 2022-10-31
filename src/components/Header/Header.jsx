import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../context";

const Header = () => {
  const { setIsLogin } = useData();

  return (
    <header className="header-container">
      <div className="header-title-main">
        <Link to="/home">
          <span className="header-title">twitter</span>
        </Link>
        <nav className="logout-main">
          <button className="logout-btn" onClick={() => setIsLogin(false)}>
            Log Out
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
