import React from "react";

import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="app__footer app__bg">
      <div className="app__footer-icons">
        <FaFacebookSquare color="#808080" fontSize={24} />
        <FaInstagram color="#808080" fontSize={24} />
        <FaTwitter color="#808080" fontSize={24} />
        <FaYoutube color="#808080" fontSize={24} />
      </div>

      <div className="app__footer-links">
        <div className="app__footer-links_list">
          <p className="p__footer">Voice Over and Subtitles</p>
          <p className="p__footer">Media Center</p>
          <p className="p__footer">Privacy</p>
          <p className="p__footer mr-contact">Contact Us</p>
        </div>

        <div className="app__footer-links_list">
          <p className="p__footer">Audio Description</p>
          <p className="p__footer">Investor Relations</p>
          <p className="p__footer">Legal Provisions</p>
        </div>

        <div className="app__footer-links_list">
          <p className="p__footer">Help Center</p>
          <p className="p__footer">Job Opportunities</p>
          <p className="p__footer">Cookie Preferences</p>
        </div>

        <div className="app__footer-links_list">
          <p className="p__footer">Gift Cards</p>
          <p className="p__footer">Terms of Use</p>
          <p className="p__footer">Corporate Information</p>
        </div>
      </div>

      <button className="button footer__button">Service Code</button>

      <div className="footer">
        <p className="p__opensans">© 1997-2021 Netflix, Inc.</p>
      </div>
    </div>
  );
}
