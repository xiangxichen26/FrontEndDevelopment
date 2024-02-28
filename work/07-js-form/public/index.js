"use script";
(function () {
  // Your code here
  const nameInputEl = document.querySelector("#name");
  const emailInputEl = document.querySelector("#email");
  const comfirmEmailInputEl = document.querySelector("#confirm-email");
  const formEl = document.querySelector(".register-form");
  const nameErrorEl = document.querySelector("#name-error");
  const emailErrorEl = document.querySelector("#email-error");
  const confirmEmailErrorEl = document.querySelector("#confirm-email-error");

  nameInputEl.addEventListener("input", () => {
    if (!nameInputEl.value) {
      nameErrorEl.hidden = false;
    } else {
      nameErrorEl.hidden = true;
    }
  });

  nameInputEl.addEventListener("focus", () => {
    if (nameInputEl.value !== "") {
      nameInputEl.classList.remove("invalid");
      nameErrorEl.hidden = true;
    } else {
      nameInputEl.classList.toggle("invalid");
      nameErrorEl.hidden = false;
    }
  });

  emailInputEl.addEventListener("input", () => {
    if (!emailInputEl.value) {
      emailErrorEl.hidden = false;
    } else {
      emailErrorEl.hidden = true;
    }
  });

  emailInputEl.addEventListener("focus", () => {
    if (emailInputEl.value !== "") {
      emailInputEl.classList.remove("invalid");
      emailErrorEl.hidden = true;
    } else {
      emailInputEl.classList.toggle("invalid");
      emailErrorEl.hidden = false;
    }
  });

  comfirmEmailInputEl.addEventListener("input", () => {
    if (comfirmEmailInputEl.value !== emailInputEl.value) {
      comfirmEmailInputEl.classList.toggle("invalid");
      confirmEmailErrorEl.hidden = false;
    } else {
      comfirmEmailInputEl.classList.remove("invalid");
      confirmEmailErrorEl.hidden = true;
    }
  });

  comfirmEmailInputEl.addEventListener("focus", () => {
    if (comfirmEmailInputEl.value !== "") {
      comfirmEmailInputEl.classList.remove("invalid");
      confirmEmailErrorEl.hidden = true;
    } else {
      comfirmEmailInputEl.classList.toggle("invalid");
      confirmEmailErrorEl.hidden = false;
    }
  });

  formEl.addEventListener("submit", (event) => {
    // event.target is the form, not the fields
    let isFormInvalid = true; // Put code to decide here

    if (!nameInputEl.value) {
      nameInputEl.classList.toggle("invalid");
      nameErrorEl.hidden = false;
      isFormInvalid = false;
    }

    if (!emailInputEl.value) {
      emailInputEl.classList.toggle("invalid");
      emailErrorEl.hidden = false;
      isFormInvalid = false;
    }

    if (comfirmEmailInputEl.value !== emailInputEl.value) {
      comfirmEmailInputEl.classList.toggle("invalid");
      confirmEmailErrorEl.hidden = false;
      isFormInvalid = false;
    }

    if (!isFormInvalid) {
      // Put code to tell user what to fix here
      event.preventDefault();
    }
  });
})();
