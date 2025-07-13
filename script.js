function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("toggle-mode");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}
