import React, { useState } from "react";

import Button from "./Button";

import "./Tabs.css";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.id);

  const handleClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tab">
      <ul className="tab-list">
        {children.map((tab) => (
          <li key={tab.props.id} className="tab-list-item">
            <button
              className={tab.props.id === activeTab ? "tab-button active" : "tab-button"}
              onClick={() => handleClick(tab.props.id)}
              aria-label={ `Switch tab to ${tab.props.title}` }
            >
              {tab.props.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {children.find((tab) => tab.props.id === activeTab)}
      </div>
    </div>
  );
}

export default Tabs;
