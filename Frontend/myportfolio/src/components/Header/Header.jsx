import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import "../Header/Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(section);
    closeMenu();
  };

  return (
    <header className="header">
      <img
        className="header-logo"
        src={Logo}
        alt="Logo du site"
        width="60px"
        height="60px"
      />

      <nav className={`header_nav ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a
              href="#Title"
              onClick={() => handleNavigation("Title")}
              className={`header_nav__link ${
                activeSection === "Title" ? "header_nav__link-active" : ""
              }`}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#presentation"
              onClick={() => handleNavigation("presentation")}
              className={`header_nav__link ${
                activeSection === "presentation"
                  ? "header_nav__link-active"
                  : ""
              }`}
            >
              Présentation
            </a>
          </li>
          <li>
            <a
              href="#competences"
              onClick={() => handleNavigation("competences")}
              className={`header_nav__link ${
                activeSection === "competences" ? "header_nav__link-active" : ""
              }`}
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#realisations"
              onClick={() => handleNavigation("realisations")}
              className={`header_nav__link ${
                activeSection === "realisations"
                  ? "header_nav__link-active"
                  : ""
              }`}
            >
              Réalisations
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleNavigation("contact")}
              className={`header_nav__link ${
                activeSection === "contact" ? "header_nav__link-active" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="icon close-icon" />
        ) : (
          <FaBars className="icon" />
        )}
      </div>
    </header>
  );
}

export default Header;
