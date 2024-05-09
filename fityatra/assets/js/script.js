"use strict";

let allowScrolling = true;

document.addEventListener("keydown", function (event) {
  if (event.key === "w") {
    allowScrolling = false;
  } else if (event.key === "Enter") {
    allowScrolling = true;
  }
});

window.addEventListener("scroll", function (event) {
  if (!allowScrolling) {
    window.scrollTo(0, 0); // Scroll to the top to prevent scrolling
  }
});
