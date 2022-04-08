let cart = 0;
const AddCart = function() {
  cart += 1;
  document.querySelector("#CartNum").innerHTML = cart;
}
const checkColor = function(n) {
  let colorSpan = document.querySelector("#ColorId");
  if(n === 1) {
    colorSpan.innerHTML = "Graphite/Black";
  }
  else if(n === 2) {
    colorSpan.innerHTML = "Lunar White/Soft Gold";
  }
  else if(n === 3){
    colorSpan.innerHTML = "Steel Blue/Platinum";

  }
}