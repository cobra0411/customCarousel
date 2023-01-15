import "./styles.css";
// carousel

const computeNextIndex = (index, add, mod = 4) => {
  console.log("indexxxx", index, add, mod);
  let newIndex = parseInt(index, 10);
  newIndex += add;
  newIndex += mod;
  newIndex %= mod;
  return newIndex;
};

const navHandler = (event, dir) => {
  console.log("clicked", dir);
  const topCarouselItem = document.querySelector("[data-active-item]");
  const index = topCarouselItem.dataset.index;
  const nextIndex = computeNextIndex(index, dir);
  console.log("topCarouselItem", topCarouselItem);
  const closetCarouselWrapper = topCarouselItem.closest(".carousel-wrapper");
  // removing older active item
  delete topCarouselItem.dataset.activeItem;
  topCarouselItem.classList.toggle("carousel-active-item");
  // setting new active item
  console.log("nextIndex", nextIndex);
  closetCarouselWrapper.children[nextIndex].dataset.activeItem = 1;
  closetCarouselWrapper.children[nextIndex].classList.add(
    "carousel-active-item"
  );
  console.log("topCarouselItem", topCarouselItem);
};

const initializeCarouselState = () => {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  console.log("ook", carouselWrapper);
  const firstCarouselChild = carouselWrapper.firstElementChild;
  firstCarouselChild.dataset.activeItem = 1;
  firstCarouselChild.classList.add("carousel-active-item");
};

(() => {
  const btnLeft = document.querySelector(".carousel-btn-left");
  const btnRight = document.querySelector(".carousel-btn-right");

  initializeCarouselState();

  btnLeft.addEventListener("click", (event) => navHandler(event, -1));
  btnRight.addEventListener("click", (event) => navHandler(event, 1));
})();
