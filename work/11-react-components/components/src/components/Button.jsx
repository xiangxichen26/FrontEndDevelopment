import React from 'react';
import "./Button.css";

function Button ({
    children, 
    onClick, 
    type="button", 
    visual="button"
}) {
    let buttonClass = "button";
    if (visual === "link") {
        buttonClass = "button-link";
        }

    return (
        <button className={buttonClass} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button