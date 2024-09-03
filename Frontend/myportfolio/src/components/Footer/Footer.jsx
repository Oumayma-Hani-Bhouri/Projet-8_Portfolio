import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-copywright">
          <h3>Designed and Developed by Oumayma</h3>
        </div>
        <div className="footer-copywright">
          <h3>Copyright © {year} OH</h3>
        </div>
        <div className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Oumayma-Hani-Bhouri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/oumayma-b-8b89a4182"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
