import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              href="https://www.facebook.com/profile.php?id=100009354945172"
              className="socialIcons"
            >
              <FaFacebookF />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.instagram.com/mr._.harshh/"
              className="socialIcons"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a href="https://twitter.com/harshsahu1143" className="socialIcons">
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/harsh-sahu-a8a780230/"
              className="socialIcons"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
