import React from "react";

import "./Button.css";

function Button({
  className,
  children,
  onClick,
  type = "button",
  visual = "button",
  category = "outline",
  ariaLabel = "",
}) {
  let buttonClass = "button";
  if (visual === "link") {
    buttonClass = "button-link";
  }
  if (category === "solid") {
    buttonClass = "button-solid";
  }

  return (
    <button className={buttonClass} type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default Button;
