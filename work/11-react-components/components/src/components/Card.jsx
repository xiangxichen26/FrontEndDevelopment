import React from "react";
import { useState } from "react";

import Button from "./Button";
import Modal from "./Modal";
import "./Card.css";

function Card({ title, children, img, imgAlt, text, onLinkToAbout}) {
  const [visible, setVisible] = useState(false);

  const handleLinkToAbout = () => {
    if (onLinkToAbout) {
      onLinkToAbout();
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img className="card-image" src={img} alt={imgAlt} />
      <p className="card-text">{text}</p>
      <p className="card-text">
        Let's{" "}
        <Button type="button" visual="link" onClick={() => setVisible(true)} >
          Subscribe
        </Button>{" "}
        the channel and get to know more about cats.{" "}
      </p>
      <p className="card-text">
        <Button type="button" visual="link" onClick={ handleLinkToAbout }>Contact Us</Button>
      </p>
        <Modal 
            title="Subscribe to the channel"
            visible={visible}
            onClose={() => setVisible(false)}
        >
        </Modal>
      {children}
      {}
    </div>
  );
}

export default Card;
