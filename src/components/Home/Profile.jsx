import React from "react";
import { useData } from "../context";
import Navbar from "./Navbar";

const Profile = () => {
  const { user } = useData();

  return (
    <div className="profile-main">
      <Navbar />
      <div className="profile-container bg-white-dark rounded-md">
        <div className="home-header bg-white rounded-md pd-5 ">
          <div className="home-header-title text-black-dark">
            {user.first_name} {user.last_name}
          </div>
        </div>
        <div className="">
          <div className="cover-img-container">
            <img
              class="cover-img rounded-md"
              src="https://pbs.twimg.com/profile_banners/1207570391478104067/1593924235/1500x500"
              alt="Cover"
            />
          </div>

          <div className="profile-logo-container">
            <div className="profile-logo">
              <img
                className="profile-logo-img"
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
                alt=""
              />
            </div>
            <div className="home-header-title text-black-dark">
              {user.first_name} {user.last_name}
            </div>
            <div className="user-profile-detail">
              <div className="user-detail">
                <span className="fa-icon-thin">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                {user.country}
              </div>
              <div className="user-detail ">
                <span className="fa-icon-thin">
                  <i class="fa-solid fa-link"></i>
                </span>
                <span className="link-text-color">{user.email}</span>
              </div>
              <div className="user-detail">
                <span className="fa-icon-thin">
                  <i class="fa-solid fa-person-dress"></i>
                </span>
                {user.gender}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
