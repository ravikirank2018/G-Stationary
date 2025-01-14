// Back to Top Button Logic
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle Logic
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "Toggle Dark Mode";
darkModeToggle.id = "darkModeToggle";
darkModeToggle.className = "dark-mode-btn";
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector("nav").classList.toggle("dark-mode");
  document.querySelector(".hero").classList.toggle("dark-mode");
});
