import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" left-sec bg-white-dark rounded-md">
      <nav className="navbar">
        <Link to="/home">
          <li className="nav-list bg-white ">
            <i class="fa-solid fa-house"></i>
            <div className="nav-title text-black ">Home</div>
          </li>
        </Link>
        <Link to="/profile">
          <li className="nav-list bg-white">
            <i class="fa-solid fa-user"></i>
            <div className="nav-title text-black ">Profile</div>
          </li>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
