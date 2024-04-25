import React from "react";

import Link from "./Link";

import "./Footer.css";

function Footer({ setPage }) {
  const changePage = (e) => {
    e.preventDefault();
    setPage(e.target.pathname);
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <Link visual="link" href="/privacy-policy" onClick={changePage}>
          Privacy Policy
        </Link>
        <Link visual="link" href="/join-us" onClick={changePage}>
          Join US
        </Link>
        <Link visual="link" href="/contact-us" onClick={changePage}>
          Contact US
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
