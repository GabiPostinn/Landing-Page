document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-but");

  buttons.forEach((link) => {
    link.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.classList.remove("button-active");
      });
      link.classList.add("button-active");
    });
  });

  const divHover = document.getElementById("all-end");
  divHover.addEventListener("mouseenter", () => {
    divHover.textContent = "Ai dat hover";
  });

  const toggleButton = document.getElementById("toggle-dark").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
