var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

const bubbleIsVisible = document.querySelector("body");
const iconsIsVisible = document.querySelector("#contact-btn");

document.addEventListener("DOMContentLoaded", () => {
  bubbleIsVisible.addEventListener("click", showBubbleHideGlow);
  iconsIsVisible.addEventListener("click", showContactIcons);
});

function showBubbleHideGlow() {
  document.getElementsByClassName("modal")[0].hidden = false;
  const glowClass = document.getElementById("den");
  glowClass.classList.remove("glow");
}

function showContactIcons() {
  const icons = document.querySelectorAll(".contact-link");
  for (let i = 0; i < icons.length; i++) {
    icons[i].hidden = false;
  }
}
