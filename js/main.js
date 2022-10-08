const playTrigger = document.querySelector(".product-offer-block__play");
const blockTrigger = document.querySelector(".product-offer-block");
const video = document.querySelector(".product-offer__video");

const pointsSlaider = document.querySelectorAll(".carousel-bullet");

// Video
playTrigger.addEventListener("click", () => {
  video.play();
  blockTrigger.classList.add("no-visible");
  video.classList.remove("blur");
});

video.addEventListener("pause", () => {
  blockTrigger.classList.remove("no-visible");
  video.classList.add("blur");
  video.pause();
});

// Slider
pointsSlaider.forEach((point) => {
  point.addEventListener("click", () => {
    pointsSlaider.forEach((lastPoint) => {
      if (point !== lastPoint) {
        point.classList.add("active");
        lastPoint.classList.remove("active");
      }
    });
  });
});
