import React from "react";

import "./Tag.css";

function Tag({ className, children, color = "blue" }) {
  let tagClass = "";
  if (color === "blue") {
    tagClass = "tag-blue";
  } else if (color === "green") {
    tagClass = "tag-green";
  } else if (color === "red") {
    tagClass = "tag-red";
  } else if (color === "yellow") {
    tagClass = "tag-yellow";
  } else if (color === "purple") {
    tagClass = "tag-purple";
  } else if (color === "orange") {
    tagClass = "tag-orange";
  } else if (color === "grey") {
    tagClass = "tag-grey";
  } else if (color === "pink") {
    tagClass = "tag-pink";
  } 
  
  return <div className={tagClass}>{children}</div>;
}

export default Tag;
