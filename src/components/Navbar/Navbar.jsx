import React from "react";
import "./Navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MoveManiac</h1>
      <div className="navbar_links">
        <a href="">
          Popular
          <img src={Fire} alt="Fire emoji" className="navbar_emoji"></img>
        </a>
        <a href="">
          Top Rated
          <img src={Star} alt="Star emoji" className="navbar_emoji"></img>
        </a>
        <a href="">
          Upcoming
          <img
            src={Party}
            alt="Party face emoji"
            className="navbar_emoji"
          ></img>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
