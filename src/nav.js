var upBtn = document.getElementById("upBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

function goUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
