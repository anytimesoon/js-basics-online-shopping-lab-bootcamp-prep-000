var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


function getCart(){
  return cart;
}

function addToCart(item){
  let p = Math.random() * 100;
  Math.floor(p);

  cart.push({item: p});
  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
	var str = 'In your cart you have ';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    for (var i = 0; i < cart.length; i++) {
      for (var j in cart[i]) {
        str += `${j} at ${cart[i][j]}`;
        if (i+1<cart.length){
        	str += ', '
        } else {
        	str += '.'
        }
      };
    };
    console.log(str);
  };
};

function removeFromCart(toRemove){
  for(i in cart){
    if (cart[i].hasOwnProperty(toRemove)){
      cart.splice(i, 0);
      var counter = 1;
    }
  }
  if (counter != 1){
  	console.log('That item is not in your cart.')
  }
}

function placeOrder(ccnum){
  if (ccnum == null){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is ${total()}, which will be charged to the card ${ccnum}.`);
    cart = cart.splice(0, 0);
  }
}
