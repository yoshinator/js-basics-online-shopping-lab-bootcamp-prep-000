var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = generatePrice();
 var itemObject = new Object({itemName:item, itemPrice:price})
 cart.push(itemObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
  return "Your shopping cart is empty." 
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}


function generatePrice(){
  var randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}