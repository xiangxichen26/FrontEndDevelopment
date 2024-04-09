import React from "react";
import { useState } from "react";

import "./Header.css";
import logoImage from "../img/logo.jpg";
import Button from "./Button";

function Header({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  function changePage(event) {
    event.preventDefault();
    setPage(event.target.pathname);
  }

  const toggleMenu = showMenu ? "submenu-open" : "";

  return (
    <header className="header">
      <a className="header-logo" href="/">
        <img className="header-logo-image" src={logoImage} alt="logo image" />
      </a>
      <h1 className="header-title">Cats Power the Internet</h1>
      <nav className="header-nav">
        <div className="menu-button">
          <Button visual="button" onClick={() => setShowMenu(!showMenu)}>
            Menu
          </Button>
        </div>
        <ul className={`menu-submenu ${toggleMenu}`}>
          <li className="submenu-item">
            <a className="submenu-link" href="/" onClick={changePage}>
              Home
            </a>
          </li>
          <li className="submenu-item">
            <a className="submenu-link" href="/cats" onClick={changePage}>
              Famous Cats
            </a>
          </li>
          <li className="submenu-item">
            <a className="submenu-link" href="/about" onClick={changePage}>
              About us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
