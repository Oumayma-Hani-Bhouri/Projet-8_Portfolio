import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "../Header/Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <img className="header-logo" src={Logo} alt="Logo du site" />

      <nav className={`header_nav ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={(header_nav__link) =>
                header_nav__link.isActive ? "header_nav__link-active" : ""
              }
            >
              Présentation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/compétences"
              onClick={closeMenu}
              className={(header_nav__link) =>
                header_nav__link.isActive ? "header_nav__link-active" : ""
              }
            >
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Réalisations"
              onClick={closeMenu}
              className={(header_nav__link) =>
                header_nav__link.isActive ? "header_nav__link-active" : ""
              }
            >
              Réalisations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              onClick={closeMenu}
              className={(header_nav__link) =>
                header_nav__link.isActive ? "header_nav__link-active" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
