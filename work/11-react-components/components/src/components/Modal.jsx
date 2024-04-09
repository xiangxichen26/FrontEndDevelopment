import React from "react";
import { useRef,useEffect,useState } from "react";
import "./Modal.css";
import Button from "./Button";

function Modal({ children, title, visible, onClose }) {
    const dialogRef = useRef(null);
    const [clicked, setClicked] = useState(false);
   
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
      <dialog className="subscribe-dialog" ref={dialogRef} >
        {clicked && <p>Subscribe Successfully!</p>}
        <h2 className="subscribe-title">{title}</h2>
        <form className="subscribe-form">
          <div className="form-item">
            <label className="form-label" for="email">
              <span>Email: </span>
              <span className="form-label-requiredSign">* Required</span>
            </label>
            <div className="form-item-main-content">
              <input
                className="form-input"
                type="text"
                id="email"
                name="email"
              />
            </div>
          </div>
          <div className="form-button">
            <Button className="subscribe-submit" type="submit" visual="link" onClick={handleSubmit}>
              Subscribe
            </Button>
            <Button className="subscribe-cancel" type="button" visual="link" onClick={handleClose}>
              close
            </Button>
          </div>
        </form>
        {children}
      </dialog>
  );
}

export default Modal;
