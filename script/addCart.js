let cart = 0;
const AddCart = function() {
  cart += 1;
  document.querySelector("#CartNum").innerHTML = cart;
}