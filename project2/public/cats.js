"use script";
(function () {
  // control the menu
  const menuEl = document.querySelector(".menu-button");
  menuEl.addEventListener("click", (e) => {
    const submenuEl = document.querySelector(".menu-submenu");
    if (submenuEl.classList.contains("submenu-open")) {
      e.target.setAttribute("aria-expanded", "false");
      submenuEl.classList.remove("submenu-open");
    } else {
      e.target.setAttribute("aria-expanded", "true");
      submenuEl.classList.toggle("submenu-open");
    }
  });

  // control the subscribe dialog
  const modelEl = document.querySelector(".subscribe-dialog");
  const openEl = document.querySelectorAll(".subscribe-button");
  const cancelButtonEl = document.querySelector(".subscribe-cancel");

  openEl.forEach((el) => {
    el.addEventListener("click", () => {
      modelEl.showModal();
    });
  });

  cancelButtonEl.addEventListener("click", () => {
    modelEl.close();
  });

  // subscribe form validation
  const emailInputEl = document.querySelector("#email");
  const comfirmEmailInputEl = document.querySelector("#confirm-email");
  const emailEmptyErrorEl = document.querySelector("#email-error-empty");
  const emailInvalidErrorEl = document.querySelector("#email-error-invalid");
  const confirmEmailErrorEl = document.querySelector("#confirm-email-error");
  const formEl = document.querySelector(".subscribe-form");

  emailInputEl.addEventListener("input", () => {
    if (emailInputEl.value) {
      emailEmptyErrorEl.hidden = true;
      if (emailInputEl.value.includes("@")) {
        emailInputEl.classList.remove("invalid");
        emailInvalidErrorEl.hidden = true;
      } else {
        emailInputEl.classList.toggle("invalid");
        emailInvalidErrorEl.hidden = false;
      }
    } else {
      emailInputEl.classList.toggle("invalid");
      emailEmptyErrorEl.hidden = false;
      emailInvalidErrorEl.hidden = true;
    }
  });

  emailInputEl.addEventListener("focus", () => {
    if (emailInputEl.value) {
      emailEmptyErrorEl.hidden = true;
      if (emailInputEl.value.includes("@")) {
        emailInputEl.classList.remove("invalid");
        emailInvalidErrorEl.hidden = true;
      } else {
        emailInputEl.classList.toggle("invalid");
        emailInvalidErrorEl.hidden = false;
      }
    } else {
      emailInputEl.classList.toggle("invalid");
      emailEmptyErrorEl.hidden = false;
      emailInvalidErrorEl.hidden = true;
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
    if (comfirmEmailInputEl.value === emailInputEl.value) {
      comfirmEmailInputEl.classList.remove("invalid");
      confirmEmailErrorEl.hidden = true;
    } else {
      comfirmEmailInputEl.classList.toggle("invalid");
      confirmEmailErrorEl.hidden = false;
    }
  });

  formEl.addEventListener("submit", (event) => {
    let isFormInvalid = true;

    if (
      emailEmptyErrorEl.hidden === false ||
      emailInvalidErrorEl.hidden === false ||
      confirmEmailErrorEl.hidden === false
    ) {
      isFormInvalid = false;
    }
    if (!isFormInvalid) {
      event.preventDefault();
    }
  });
})();
