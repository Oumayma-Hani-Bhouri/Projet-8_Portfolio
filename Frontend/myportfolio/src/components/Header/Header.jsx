import { NavLink } from "react-router-dom";
import React from "react";
import Logo from "../../assets/images/logo.png";
import "../Header/Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={Logo} alt="Logo du site" />
      <nav className="header_nav">
        <ul>
          <li>
            <NavLink to="/" className="header_nav__link ">
              Présentation
            </NavLink>
          </li>
          <li>
            <NavLink to="/compétences" className="header_nav__link ">
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink to="/Réalisations" className="header_nav__link ">
              Réalisations
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="header_nav__link ">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
