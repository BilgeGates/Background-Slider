document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const slider = document.querySelectorAll(".slider");
  const btn_left = document.getElementById("btn_left");
  const btn_right = document.getElementById("btn_right");

  let activeSlider = 0;

  const setBody = () => {
    body.style.backgroundImage = slider[activeSlider].style.backgroundImage;
  };

  const setActiveSlider = () => {
    slider.forEach((slide, index) => {
      slide.classList.toggle("active", index === activeSlider);
    });
  };

  const updateSlider = (direction) => {
    activeSlider = (activeSlider + direction + slider.length) % slider.length;
    setBody();
    setActiveSlider();
  };

  btn_right.addEventListener("click", () => {
    updateSlider(1);
  });

  btn_left.addEventListener("click", () => {
    updateSlider(-1);
  });

  setBody();
  setActiveSlider();
});
