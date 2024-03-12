"use script";
(function () {
  // Your code here
  const menuEl = document.querySelector(".menu-button");
  menuEl.addEventListener("click", (e) => {
    const submenuEl = document.querySelector(".menu-submenu");
    if(submenuEl.classList.contains("submenu-open")) {
      e.target.setAttribute("aria-expanded", "false");
      submenuEl.classList.remove("submenu-open");
    }else {
      e.target.setAttribute("aria-expanded", "true");
      submenuEl.classList.toggle("submenu-open");
    }

  });

})();