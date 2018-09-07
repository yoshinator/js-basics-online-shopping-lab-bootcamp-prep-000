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
  var statement = ""
  if (cart.length === 0){
    return "Your shopping cart is empty." 
  }
  else if (cart.length === 1){
    statement =`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    return statement+"."
  }
  else {
      statement =`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
      for (var i = 1; i < cart.length - 1; i++){
      statement = statement+ `, ${cart[i].itemName} at $${cart[i].itemPrice}`
    }return statement+`, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  }
}

function total() {
  var totalPrice =0;
  for (var i = 0; i < cart.length; i ++){
    totalPrice += parseInt(cart[i].itemPrice)
  }
  return totalPrice;
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