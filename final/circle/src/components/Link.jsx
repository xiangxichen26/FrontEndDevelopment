import React from "react";

import "./Link.css";

function Link({ className, children, onClick, visual = "link", href }) {
  let linkClass = "link";
  if (visual === "button") {
    linkClass = "link-button";
  }

  return (
    <a className={linkClass} onClick={onClick} visual={visual} href={href}>
      {children}
    </a>
  );
}

export default Link;
