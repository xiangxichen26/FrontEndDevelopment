import React, { useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";
import Tag from "../components/Tag";

import "./EventDetail.css";

function EventDetail({ eventDetail, onBackClick, onRegister }) {
  const [isOpen, setIsOpen] = useState(false);
  const [eventData, setEventData] = useState(eventDetail);
  const [modalTitle, setModalTitle] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    name: "",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleRegister = () => {
    openModal();
    setModalTitle(`Register for the ${eventDetail.eventTitle}`);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value))
          return "Email must be a valid email address";
        return "";
      case "confirmEmail":
        if (!value) return "Confirmed Email is required";
        if (value !== formData.email) return "Emails do not match";
        return "";
      case "name":
        if (!value) return "Name is required";
        return "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitRegistration = (event) => {
    event.preventDefault();
    // if the form is not valid, return
    // if the form is valid, submit the form and clean the form
    if (validateForm()) {
      const updatedEvent = { ...eventDetail, isRegistered: true };
      onRegister(eventDetail.id, true);
      setFormData({
        email: "",
        confirmEmail: "",
        name: "",
      });
      setEventData(updatedEvent);
      closeModal();
    } else {
      return;
    }
  };

  return (
    <div className="event-detail">
      <div className="event-detail-container">
        <div className="backButton">
          <Button visual="link" onClick={onBackClick}>
            Back
          </Button>
        </div>
        <div className="event-detail-header">
          <h1>{eventDetail.eventTitle}</h1>
          {eventDetail.isRegistered ? (
            <Tag>Registered</Tag>
          ) : (
            <Button category="solid" onClick={handleRegister}>
              Register
            </Button>
          )}
        </div>
        <div className="event-detail-info">
          <div className="event-detail-info-item">
            <div className="event-detail-info-item-icon">
              <i className="gg-calendar-two"></i>
            </div>
            <div className="event-detail-info-item-text">
              {eventDetail.eventLocation}
            </div>
          </div>
          <div className="event-detail-info-item">
            <div className="event-detail-info-item-icon">
              <i className="gg-pin"></i>
            </div>
            <span className="event-detail-info-item-text">
              {eventDetail.eventDateAndTime}
            </span>
          </div>
          <div className="event-detail-info-item">
            <div className="event-detail-info-item-icon">
              <i className="gg-organisation"></i>
            </div>
            <span className="event-detail-info-item-text">
              {eventDetail.eventOrganizer}
            </span>
          </div>
          <div className="event-detail-info-item">
            <div className="event-detail-info-item-icon">
              <i className="gg-mail"></i>
            </div>
            <span className="event-detail-info-item-text">
              {eventDetail.eventOrganizerEmail}
            </span>
          </div>
        </div>
        <div className="event-detail-body">
          <img
            className="event-detail-body-img"
            src={eventDetail.eventImage}
            alt={`image for ${eventDetail.eventTitle}`}
          />
          <div className="event-detail-body-text">
            {eventDetail.eventDescription}
          </div>
        </div>
      </div>
      <Modal
        title={modalTitle}
        isOpen={isOpen}
        onClose={closeModal}
        submitButtonText="Register"
        onSubmit={submitRegistration}
      >
        <form className="modal-form" onSubmit={submitRegistration}>
          <div className="modal-form-item">
            <label className="modal-form-item-label" htmlFor="email">
              Email*:{" "}
            </label>
            <div className="modal-form-item-input">
              <input
                className="modal-form-item-input-content"
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {errors.email && (
                <div className="modal-form-item-input-error">
                  {errors.email}
                </div>
              )}
            </div>
          </div>
          <div className="modal-form-item">
            <label className="modal-form-item-label" htmlFor="confirm">
              Comfirm Email*:{" "}
            </label>
            <div className="modal-form-item-input">
              <input
                className="modal-form-item-input-content"
                type="text"
                name="confirmEmail"
                id="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {errors.confirmEmail && (
                <div className="modal-form-item-input-error">
                  {errors.confirmEmail}
                </div>
              )}
            </div>
          </div>
          <div className="modal-form-item">
            <label className="modal-form-item-label" htmlFor="name">
              Name*:{" "}
            </label>
            <div className="modal-form-item-input">
              <input
                className="modal-form-item-input-content"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {errors.name && (
                <div className="modal-form-item-input-error">{errors.name}</div>
              )}
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default EventDetail;
