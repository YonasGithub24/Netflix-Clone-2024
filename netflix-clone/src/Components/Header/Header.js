import React, { useEffect, useState } from "react";
import "./header.css";
import NetflixLogo from "../../Assets/Images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`header_outer_container ${show && "nav_black"}`}>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/tvshows">TVShows</a>
            </li>
            <li>
              {" "}
              <a href="/movies">Movies</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/new_&_popular">New & Popular</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/my_list">My List</a>{" "}
            </li>
            <li>
              <a href="/browse_by_language">Browse by Languages</a>{" "}
            </li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneRoundedIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
