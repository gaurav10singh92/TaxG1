import React from "react";
/*import Client from "../../pages/client/Client";
import Contact from "../../pages/contact/Contact";
import Resources from "../../pages/resources/resources";*/
import Clock from "../Clock/Clock";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-img">
        <h1 className="logo">TaxG Jagadish and Co</h1>
        <img
          src="/images/user.png"
          alt="User-Profile.jpg"
          className="user-image"
        ></img>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          viewBox="0 0 24 17"
          fill="none"
          className="arrow"
        >
          <path
            d="M11.5807 16.1582L0.00462967 0.271015L23.5272 0.547625L11.5807 16.1582Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <nav className="navbar">
        <div className="navdiv">
          <Clock />
          <ul>
            <li>Home</li>
            <li>Notice</li>
            <li>Resources</li>
            <li>Client</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
