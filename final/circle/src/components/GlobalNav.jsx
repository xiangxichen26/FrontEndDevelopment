import React, { useState } from "react";

import Link from "./Link";
import Button from "./Button";

import headerMenu from "../mock-data/header-menu";

import "./GlobalNav.css";

function GlobalNav({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = showMenu ? "submenu-open" : "";

  function changePage(event) {
    event.preventDefault();
    setPage(event.target.pathname);
  }

  const menuItems = headerMenu.map((item) => {
    return (
      <li key={item.id} className="global-nav-item">
        <Link
          className="global-nav-link"
          visual="link"
          href={item.path}
          onClick={changePage}
        >
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <nav className="global-nav">
      <div className="global-nav-button">
        <Button
          type="button"
          visual="link"
          onClick={() => setShowMenu(!showMenu)}
          ariaLabel= {showMenu ? "Close menu" : "Open menu"}
        >
          Menu
        </Button>
      </div>
      <ul className={`global-nav-list ${toggleMenu}`}>{menuItems}</ul>
    </nav>
  );
}

export default GlobalNav;
