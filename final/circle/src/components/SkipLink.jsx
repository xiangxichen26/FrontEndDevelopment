import React from "react";

import "./SkipLink.css";

function SkipLink({ children }) {
    return (
        <a className="skip-link" href="#main">
           Skip to the main content
        </a>
    );
}

export default SkipLink;