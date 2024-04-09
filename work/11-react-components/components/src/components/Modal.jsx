import React from "react";
import { useRef, useEffect, useState, useId } from "react";
import Button from "./Button";

import "./Modal.css";

function Modal({ children, title, visible, onClose }) {
  const dialogRef = useRef(null);
  const id = useId();
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (visible && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    } else if (!visible && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [visible]);

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    if (onClose) {
      onClose();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setClicked(true);
    console.log(`Subscribe Successfully!`);
  };

  return (
    <dialog className="subscribe-dialog" ref={dialogRef}>
      {clicked && <p>Subscribe Successfully!</p>}
      <h2 className="subscribe-title">{title}</h2>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor={`${id}-name`}>
          Email(required):
        </label>
        <input
          className="form-input"
          type="email"
          id={`${id}-name`}
          value={ email }
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="form-button">
          <Button
            className="subscribe-submit"
            type="submit"
            visual="link"
          >
            Subscribe
          </Button>
          <Button
            className="subscribe-cancel"
            type="button"
            visual="link"
            onClick={handleClose}
          >
            close
          </Button>
        </div>
      </form>
      {children}
    </dialog>
  );
}

export default Modal;
