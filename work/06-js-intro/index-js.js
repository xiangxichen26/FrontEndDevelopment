"use strict";
(function () {
  // Your code here
  const buttonEl = document.querySelector("button");
  const menuEl = document.querySelector(".menu-submenu");
  buttonEl.addEventListener("click", function() {
    menuEl.classList.toggle("menu-open");
  });

})();