const plus = document.getElementsByClassName("fas fa-plus-circle");
const minus = document.getElementsByClassName("fas fa-minus-circle");
let quantity = document.getElementsByClassName("quantity");
const deleteButton = document.getElementsByClassName("fas fa-trash-alt");
const cards = document.getElementsByClassName("card-body");
const hearts = document.getElementsByClassName("fas fa-heart");
const unitPrices = document.getElementsByClassName("unit-price");
let total = document.getElementsByClassName("total")[0]; 

//Adjust the quantity of each item through  “+”  button.
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    let qu = parseInt(quantity[i].textContent);
    qu++;
    quantity[i].textContent = qu;
    updateTotal();
  });
}

//Adjust the quantity of each item through  “-”  button.
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    let qu = parseInt(quantity[i].textContent);
    if (qu > 0) qu--;
    quantity[i].textContent = qu;
    updateTotal();
  });
}

//Delete items from the cart.
for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", function () {
    cards[i].remove();
    updateTotal();
  });
}

//Like items through a clickable heart-shaped button that will change color accordingly.
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    hearts[i].style.color = 'red';
  });
}
// See the total price adjusted according to quantity and deletions.
function updateTotal() {
  let sum = 0;
  for (let i = 0; i < quantity.length; i++) {
    let qu = parseInt(quantity[i].textContent);
    let unitPrice = parseInt(unitPrices[i].textContent);
    sum += qu * unitPrice;
  }
  total.textContent = sum +"$";
}
updateTotal();
