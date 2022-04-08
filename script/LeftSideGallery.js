// Big Picture
let bigImg = document.querySelector("#BigImg");
// Side Pictures
let img1 = document.querySelector("#imgSmall-1");
let img2 = document.querySelector("#imgSmall-2");
let img3 = document.querySelector("#imgSmall-3");
let img4 = document.querySelector("#imgSmall-4");
let img5 = document.querySelector("#imgSmall-5");
let img6 = document.querySelector("#imgSmall-6");
// list of images
let imgLists = [img1, img2, img3, img4, img5, img6];
// Active image
let imgActive = 1;
// Add border to the current active
img1.classList.add('active')
// Change image
const changeImage = function (imgSrc, n) {
  // change the big picture
  bigImg.src = imgSrc;
  imgLists[imgActive - 1].classList.remove('active');
  imgLists[n - 1].classList.add('active');
  imgActive = n;
}