import React, { useEffect, useRef, useState } from "react";

import Button from "./Button";

import "./Modal.css";

function Modal({
  isOpen,
  onClose,
  onSubmit,
  children,
  title,
  submitButtonText,
  closeButtonText = "Close",
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-title">{title}</div>
      <div className="modal-content">{children}</div>
      <div className="modal-button">
          <Button onClick={onSubmit} category="solid" ariaLabel="submit the form">
            {submitButtonText}
          </Button>
          <Button onClick={handleClose} ariaLabel="close the modal">{closeButtonText}</Button>
        </div>
    </dialog>
  );
}

export default Modal;
