import React from "react";

import Button from "./Button";
import Tag from "./Tag";
import Link from "./Link";

import "./Card.css";

function Card({
  title,
  buttonName,
  linkName,
  tagName,
  buttonOnClick,
  buttonAriaLabel,
  linkOnClick,
  children,
  className,
}) {
  const hasHeader = title || buttonName || tagName || linkName;

  return (
    <div className="card">
      {hasHeader && (
        <div className="card-header">
          {title && <h3 className="card-header-title">{title}</h3>}
          {buttonName && (
            <Button
              className="card-header-button"
              visual="link"
              onClick={buttonOnClick}
              ariaLabel={buttonAriaLabel}
            >
              {buttonName}
            </Button>
          )}
          {linkName && (
            <Link
              className="card-header-link"
              onClick={linkOnClick}
            >
              {linkName}
            </Link>
          )}
          {tagName && <Tag className="card-header-tag" color="green">{tagName}</Tag>}
        </div>
      )}
      <div className="card-body"> {children}</div>
    </div>
  );
}

export default Card;
