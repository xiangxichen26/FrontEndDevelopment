import React, { useState } from "react";

import Card from "../components/Card";
import Avatar from "../components/Avatar";
import Tag from "../components/Tag";
import Modal from "../components/Modal";
import SkipLink from "../components/SkipLink";

import initialGroupData from "../mock-data/groups";
import groupCategories from "../mock-data/group-categories";

import "./Groups.css";

function Groups() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGroupId, setSelectedGroupId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [groupData, setGroupData] = useState(initialGroupData);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    name: "",
    job: "",
    otherJob: "",
  });

  const filteredGroups = selectedCategory
    ? groupData.filter((group) => group.category === selectedCategory)
    : groupData; // if no category is selected, show all groups

  const groups = filteredGroups.map((group) => {
    return (
      <Card
        title={group.name}
        buttonName={group.isSubscribed ? "" : "Subscribe"}
        buttonOnClick={() => {
          group.isSubscribed ? null : onSubscribe(group.id, group.name);
        }}
        buttonAriaLabel={`Subscribe to ${group.name}`}
        tagName={group.isSubscribed ? "Subscribed" : ""}
        key={group.id}
      >
        <div className="card-content">
          <div className="card-content-top">
            <img
              className="card-content-img"
              src={group.img}
              alt={group.imgAlt}
            ></img>
            <p className="card-content-description">{group.description}</p>
          </div>
          <div className="card-content-bottom">
            <div className="card-content-bottom-founder">
              <Avatar
                src={group.founder.avatarImg}
                alt={`avatar image for ${group.founder.name}`}
              />
              <div>
                {" "}
                {group.founder.name} ({group.founder.pronoun}){" "}
              </div>
            </div>
            <div className="card-content-bottom-category">
              <Tag color={group.categoryColor}>{group.category}</Tag>
            </div>
          </div>
        </div>
      </Card>
    );
  });

  const onSearch = (event) => {
    setSelectedCategory(event.target.value);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubscribe = (groupId, groupName) => {
    openModal();
    setModalTitle(`Subscribe to the ${groupName}`);
    setSelectedGroupId(groupId);
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
      case "job":
        if (!value) return "Please select a career";
        return "";
      case "otherJob":
        if (formData.job === "14" && !value)
          return "Please specify your career";
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

  const submitSubscription = (event) => {
    event.preventDefault();
    // if the form is not valid, return
    // if the form is valid, submit the form and clean the form
    if (validateForm()) {
      const updatedGroups = groupData.map((group) =>
        group.id === selectedGroupId ? { ...group, isSubscribed: true } : group
      );
      setFormData({
        email: "",
        confirmEmail: "",
        name: "",
        job: "",
        otherJob: "",
      });
      setGroupData(updatedGroups);
      closeModal();
    } else {
      return;
    }
  };

  return (
    <div className="groups">
      <SkipLink />
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="groups-search">
        <label className="groups-search-label" htmlFor="group-catagory">
          Catagory
        </label>
        <select
          className="groups-search-option"
          name="group-catagory"
          id="group-catagory"
          onChange={onSearch}
        >
          <option className="groups-search-option" value="">
            Please select
          </option>
          {groupCategories.map((category) => {
            return (
              <option value={category.name} key={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="groups-list" id="main">
        {groups.length > 0 ? groups : "No groups available"}
      </div>

      <Modal
        title={modalTitle}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        submitButtonText="Subscribe"
        onSubmit={submitSubscription}
      >
        <form className="modal-form" onSubmit={submitSubscription}>
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
            <label className="modal-form-item-label" htmlFor="confirmEmail">
              Confirm Email*:{" "}
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
          <div className="modal-form-item">
            <label className="modal-form-item-label" htmlFor="job">
              Career*:{" "}
            </label>
            <div className="modal-form-item-input">
              <select
                className="modal-form-item-input-content"
                name="job"
                id="job"
                value={formData.job}
                onChange={handleInputChange}
                onBlur={handleBlur}
              >
                <option value="">Please select</option>
                <option value="1">Law</option>
                <option value="2">Arts</option>
                <option value="3">Business Administration</option>
                <option value="4">Education</option>
                <option value="5">Sales Associate</option>
                <option value="6">Health Care</option>
                <option value="7">Business Development Manager</option>
                <option value="8">Communications</option>
                <option value="9">Engineering</option>
                <option value="10">Construction</option>
                <option value="11">Finance</option>
                <option value="12">Manufacturing</option>
                <option value="13">Real estate agent</option>
                <option value="14">Others</option>
              </select>
              {errors.job && (
                <div className="modal-form-item-input-error">{errors.job}</div>
              )}
            </div>
          </div>
          {/** If the user selects "Others" in the career dropdown, show the input field below */}
          {formData.job === "14" && (
            <div className="modal-form-item">
              <label className="modal-form-item-label" htmlFor="other-job">
                Others*:{" "}
              </label>
              <div className="modal-form-item-input">
                <input
                  className="modal-form-item-input-content"
                  type="text"
                  name="otherJob"
                  id="other-job"
                  value={formData.otherJob}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                ></input>
                {errors.otherJob && (
                  <div className="modal-form-item-input-error">
                    {errors.otherJob}
                  </div>
                )}
              </div>
            </div>
          )}
        </form>
      </Modal>
    </div>
  );
}

export default Groups;
