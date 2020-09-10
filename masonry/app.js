window.addEventListener("load", function () {
  const items = document.querySelectorAll(".grid__item");
  let x = 0;
  let y = 0;
  const gap = 20;
  const itemPerRow = 5;
  document.querySelector(".wrapper").style.width = "1260px";
  const gridImage = document.querySelectorAll(".grid__image");
  const container =
    document.querySelector(".wrapper").clientWidth - gap * (itemPerRow - 1);
  const itemWidth = Math.ceil(container / itemPerRow);
  items.forEach((el) => {
    el.style.left = 0;
    el.style.top = 0;
    el.style.width = itemWidth + "px";
    el.style.height = el.querySelector("img").offsetHeight + "px";
  });

  gridImage.forEach((el) => {
    const image = el.querySelector("img");
    const imageWidth = image.clientWidth;
    const imageHeight = image.clientHeight;
    const ratio = (imageHeight / imageWidth) * 100;
    el.style.paddingBottom = ratio + "%";
  });

  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    if (index > 0 && index < itemPerRow) {
      x = x + items[index - 1].offsetWidth + gap;
      element.style.left = x + "px";
    } else if (index >= itemPerRow) {
      x = items[index - itemPerRow].offsetLeft;
      y =
        items[index - itemPerRow].offsetHeight +
        items[index - itemPerRow].offsetTop;
      element.style.left = x + "px";
      element.style.top = y + gap + "px";
    }
  }
});
