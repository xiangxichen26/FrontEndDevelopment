import React from 'react';
import "./Panel.css";

function Panel({
    img,
    imgAlt,
    title,
    text,
}) {
  return (
    <div className="panel">
        <div className="panel-content">
            <h2 className="panel-title">{ title }</h2>
            <p className="panel-text">{ text }</p>
        </div>
        <img className="panel-img" src={ img } alt={ imgAlt } />
    </div>
  );
}

export default Panel;