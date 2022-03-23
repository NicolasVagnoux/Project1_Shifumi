const wrapper = document.querySelector(".opinionContainer__wrapper");
const indicators = [
  ...document.querySelectorAll(".opinionContainer__indicators button"),
];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
  item.addEventListener("click", () => {
    indicators[currentTestimonial].classList.remove(
      "opinionContainer__indicators__active"
    );
    wrapper.style.marginLeft = `-${100 * i}%`;
    item.classList.add("opinionContainer__indicators__active");
    currentTestimonial = i;
  });
});
