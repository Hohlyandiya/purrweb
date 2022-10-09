document.addEventListener("DOMContentLoaded", () => {
  const playTrigger = document.querySelector(".product-offer-block__play");
  const blockTrigger = document.querySelector(".product-offer-block");
  const video = document.querySelector(".product-offer__video");

  const pointsSlaider = document.querySelectorAll(".carousel-bullet");

  const burger = document.querySelector(".header-burger");
  const iconCloseBurger = document.querySelector(".header-menu__icon");
  const burgerMenu = document.querySelector(".header-menu");

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

  // Burger
  burger.addEventListener("click", () => {
    burger.classList.add("hidden");
    burgerMenu.classList.add("open");
    document.body.style.overflowY = "hidden";
  });

  iconCloseBurger.addEventListener("click", () => {
    burger.classList.remove("hidden");
    burgerMenu.classList.remove("open");
    document.body.style.overflowY = "auto";
  });

  document.addEventListener("mouseup", (e) => {
    const container = burgerMenu;
    if (!container.contains(e.target)) {
      container.classList.remove("open");
      burger.classList.remove("hidden");
      document.body.style.overflowY = "auto";
    }
  });
});
