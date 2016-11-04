function Customer (name, address) {
  this.address = address,
  this.bill = 0;
  this.pizzas = [];
}

function Pizza (toppings, size){
  this.toppings = toppings,
  this.size = size,
  this.price = 0
}
//toppings
var mushrooms = {name: "mushrooms", price: 1.00 };
var pineapple = {name: "pineapple", price: 1.25 };
var pepperoni = {name: "pepperoni", price: 2.00 };
var ham = {name: "ham", price: 2.25 };
var provolone = {name: "provolone", price: 1.50 };
var anchovies = {name: "mushrooms", price: 1.00 };

var prices = [
    {name: "small", price: 10.00},
    {name: "medium",price: 15.00},
    {name: "large", price: 20.00},
    {name: "giant", price: 25.00}];


Pizza.prototype.addExtras = function(size){
  //sizes
  var sizeSelection = "small";
  prices.forEach (function (price){
    if (price.name === size){
      sizeSelection = price.price;
    }

  });
  return this.price += parseFloat(sizeSelection);
}


$(document).ready(function (){

  $("#input").submit(function (event){
    event.preventDefault();
    var size = $("#size").val();
    var pizza = new Pizza ("something", size);

    console.log(pizza.size, " ", pizza.addExtras(size));
    $("#output").text(pizza.size);



  })

});
