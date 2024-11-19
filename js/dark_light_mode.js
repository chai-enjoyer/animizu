const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title, a, .footer,.navbar-container, .anime-container, .featured-content, .sidebar,.left-menu-icon, .toggle"
);

const textContainerImg = document.querySelector(".text-container img");
const logoImg = document.querySelector(".logo-container img");

// Function to apply the theme and switch images
function applyTheme(theme) {
  if (theme === "dark") {
    items.forEach((item) => item.classList.add("active"));
    ball.classList.add("active");
    textContainerImg.src = "../images/Animes2.png"; // Switch to dark-mode image
    logoImg.src = "../images/Animizu2.png"; // Switch to dark-mode logo
  } else {
    items.forEach((item) => item.classList.remove("active"));
    ball.classList.remove("active");
    textContainerImg.src = "../images/animes.png"; // Switch to light-mode image
    logoImg.src = "../images/Animizu.png"; // Switch to light-mode logo
  }
}

// Load the saved theme preference from localStorage on page load
const savedTheme = localStorage.getItem("theme") || "light"; // Default to light mode
applyTheme(savedTheme);

// Toggle theme, switch images, and save the preference to localStorage
ball.addEventListener("click", () => {
  const isDarkMode = ball.classList.toggle("active");
  items.forEach((item) => item.classList.toggle("active"));
  const newTheme = isDarkMode ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});