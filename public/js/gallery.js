"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const zooming = new Zooming({
    bgColor: "rgba(0, 0, 0, 0.75)"
  });
  zooming.listen(".img-zoomable");
});