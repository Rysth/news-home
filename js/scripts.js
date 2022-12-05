const toggler = document.querySelector(".nav-toggler");
const navbar = document.querySelector("nav");
const overlay = document.querySelector(".overlay-dark");

toggler.addEventListener("click", () => {
  navbar.classList.toggle("display-flex");
  toggler.classList.toggle("nav-toggler--active");
  changeOverlayOpacity();
});

function changeOverlayOpacity() {
  const opacity = overlay.style.opacity;

  if (opacity === "0" || opacity === "") {
    overlay.style.opacity = "0.7";
  } else {
    overlay.style.opacity = "0";
  }
}
