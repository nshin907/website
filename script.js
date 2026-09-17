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

const copyEmailBtn = document.getElementById("copyEmailBtn");
const emailToast = document.getElementById("emailToast");
const emailAddress = "mosehshin@gmail.com";

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch (err) {
      const tempInput = document.createElement("input");
      tempInput.value = emailAddress;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }

    copyEmailBtn.classList.add("copied");
    emailToast.classList.add("show");

    setTimeout(() => {
      copyEmailBtn.classList.remove("copied");
    }, 500);

    setTimeout(() => {
      emailToast.classList.remove("show");
    }, 2200);
  });
}