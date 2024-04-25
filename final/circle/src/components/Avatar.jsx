import React from "react";

import "./Avatar.css";

function Avatar({ className, src, alt, size = "small", onAvatarClick, ariaLabel = ""}) {
  let avatarClass = "avatar";
  if (size === "small") {
    avatarClass = "avatar-small";
  } else if (size === "medium") {
    avatarClass = "avatar-medium";
  } else if (size === "large") {
    avatarClass = "avatar-large";
  }

  return (
    <img
      className={avatarClass}
      src={src}
      alt={alt}
      size={size}
      onClick={onAvatarClick}
      aria-label={ariaLabel}
    />
  );
}

export default Avatar;
