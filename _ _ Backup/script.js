// Année auto
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const menu = document.getElementById("menu");
const nav  = document.getElementById("nav");
menu?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.gap = "10px";
});