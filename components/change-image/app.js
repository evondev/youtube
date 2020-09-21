const images = document.querySelectorAll(".list img");
images.forEach((el) => el.addEventListener("click", handleChangeImage));
function handleChangeImage(e) {
  const source = e.target.getAttribute("src");
  const featureImage = document.querySelector(".feature-image");
  featureImage.setAttribute("src", source);
}
