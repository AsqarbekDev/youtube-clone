import React, { useState } from "react";
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { Avatar } from "@mui/material";
import youtubelogo from "../assets/YouTube_Logo.png";
import avatarpic from "../assets/elonmusk.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img className="header__logo" src={youtubelogo} alt="YouTube" />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallSharpIcon className="left__icons" />
        <AppsSharpIcon className="left__icons" />
        <NotificationsSharpIcon className="left__icons" />
        <Avatar alt="Avatar" src={avatarpic} />
      </div>
    </div>
  );
}

export default Header;
