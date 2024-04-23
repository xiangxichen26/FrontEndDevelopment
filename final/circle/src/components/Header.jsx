import React, { useState } from "react";

import GlobalNav from "./GlobalNav";
import Avatar from "./Avatar";
import Modal from "./Modal";

import logo from "../assets/img/header/logo.png";
import avatar from "../assets/img/header/avatar.jpg";

import "./Header.css";

function Header({ setPage }) {
  const [userName, setUserName] = useState("userName");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);
  const [isFormValid, setIsFormValid] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUsernameChange = (event) => {
    setNewUserName(event.target.value);
  };

  const handleBlur = (event) => {
    if (!newUserName) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  const saveUserName = (event) => {
    event.preventDefault();
    if (!newUserName) {
      setIsFormValid(false);
      return;
    } else {
      setIsFormValid(true);
    }
    setUserName(newUserName);
    closeModal();
  };

  return (
    <header className="header">
      <div className="header-title">
        <img className="header-title-logo" src={logo} alt="Logo for Circle" />
        <h3 className="header-title-name">Circle</h3>
      </div>
      <div className="header-nav">
        <GlobalNav setPage={setPage} />
      </div>
      <div className="header-user">
        <div className="header-user-name">Hi {userName}</div>
        <div className="header-user-avatar">
          <Avatar
            src={avatar}
            alt="User avatar"
            size="small"
            onAvatarClick={openModal}
            ariaLabel="Change username"
          />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={saveUserName}
        title="Change the username"
        submitButtonText="Save"
      >
        <form className="modal-form" onSubmit={saveUserName}>
          <label className="modal-form-item-label" htmlFor="userName">
            Username*:
          </label>
          <input
            className="modal-form-item-input"
            name="userName"
            id="userName"
            value={newUserName}
            onChange={handleUsernameChange}
            onBlur={handleBlur}
          />
          {isFormValid ? null : (
            <span className="modal-form-item-error">
              Please enter a username
            </span>
          )}
        </form>
      </Modal>
    </header>
  );
}

export default Header;
