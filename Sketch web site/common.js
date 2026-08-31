/* =========================================================
   common.js
   Small, beginner-friendly script shared by every page.
   It only handles things every page needs:
   1. Opening/closing the nav on small screens
   2. Showing the "Go to top" button after scrolling
   3. Scrolling to the top when that button is clicked
   ========================================================= */

// 1. Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");

    // Update the button text and aria-expanded so screen readers
    // know whether the menu is open or closed
    const isOpen = mainNav.classList.contains("open");
    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.textContent = isOpen ? "Close menu ✕" : "Menu ☰";
  });
}

// 2 & 3. Go to top button
const goToTopBtn = document.querySelector("#go-to-top");

if (goToTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      goToTopBtn.classList.add("visible");
    } else {
      goToTopBtn.classList.remove("visible");
    }
  });

  goToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
