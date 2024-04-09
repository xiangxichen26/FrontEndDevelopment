import React from 'react';
import "./Footer.css";

function Footer({ setPage }) {

  function changePage(event) {
    event.preventDefault();
    setPage(event.target.pathname);
  }

  return (
    <footer className="footer">
            <a className="footer-link" href="/privacy" onClick={changePage}>Privacy Policy</a>
            <a className="footer-link" href="/work" onClick={changePage}>Work for us</a>
            <a className="footer-link" href="/contact" onClick={changePage}>Contact Us</a>
            <a className="footer-link" href="/media" onClick={changePage}>Social Media</a>
        </footer>
  )
}

export default Footer;