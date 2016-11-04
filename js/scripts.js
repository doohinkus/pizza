function Customer (name, address) {
  this.address = address,
  this.bill = 0;
  this.pizzas = [];
}

function Pizza (size){
  this.toppings = [],
  this.size = size,
  this.price = 0
}
var toppings = [
  {name: "mushrooms", price: 1.00 },
  {name: "pineapple", price: 1.25 },
  {name: "pepperoni", price: 2.00 },
  {name: "ham", price: 2.25 },
  {name: "provolone", price: 1.50 },
  {name: "mushrooms", price: 1.00 }];

var prices = [
  {name: "small", price: 10.00},
  {name: "medium", price: 15.00},
  {name: "large", price: 20.00},
  {name: "giant", price: 25.00}];


Pizza.prototype.addExtras = function(size, selectedToppings){
  //sizes
  var sizeSelection = "small";
  var toppingPrice = 0;
  prices.forEach (function (price){
    if (price.name === size){
      sizeSelection = price.price;
    }
  });
  //toppings gotta be a better way to get the topping price
  toppings.forEach(function (topping){
    selectedToppings.forEach(function (setopping){
      if (topping.name === setopping){
        // console.log (setopping, " : ", topping.price);
        toppingPrice += parseFloat(topping.price);
        console.log(parseFloat(toppingPrice))
      }
    });
  });

  toppingPrice += sizeSelection;

  return this.price = toppingPrice;
}

$(document).ready(function (){

  $("#input").submit(function (event){
    event.preventDefault();
    var size = $("#size").val();
    var pizza = new Pizza (size);

    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      pizza.toppings.push(topping);
   });

   pizza.addExtras(size, pizza.toppings);
  //  console.log("price: ", pizza.price);
    // console.log(pizza.size, pizza.addExtras(size, pizza.toppings));
    $(".amount").text("Your " + pizza.size + " pizza is $" + pizza.price.toFixed(2));



  })

});
