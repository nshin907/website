const navLinks = document.querySelectorAll("nav a");
const navEl = document.querySelector("nav");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("data-target");
    const targetView = document.getElementById(targetId);
    const currentView = document.querySelector(".view.active");

    if (currentView === targetView) return;

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    currentView.classList.remove("active");
    currentView.classList.add("exiting");

    setTimeout(() => {
      currentView.classList.remove("exiting");
      currentView.style.position = "absolute";
      targetView.classList.add("active");
    }, 400);
  });
});

function handleNavScroll() {
  if (window.scrollY > 10) {
    navEl.classList.add("scrolled");
  } else {
    navEl.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleNavScroll);