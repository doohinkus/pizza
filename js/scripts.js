function Pizza (){
  this.toppings = [mushrooms, pineapple, pepperoni, ham, provolone, anchovies],
  this.size = [small, medium, large, giant],
  this.price = 0
}
//toppings
var mushrooms = {name: "mushrooms", price: 1.00 };
var pineapple = {name: "pineapple", price: 1.00 };
var pepperoni = {name: "pepperoni", price: 2.00 };
var ham = {name: "ham", price: 2.00 };
var provolone = {name: "provolone", price: 1.50 };
var anchovies = {name: "mushrooms", price: 1.00 };
//sizes
var small = {name: "small", price: 10.00};
var medium = {name: "medium", price: 15.00};
var large = {name: "large", price: 20.00};
var giant = {name: "giant", price: 25.00};

Pizza.prototype.addExtras = function(){

}

$(document).ready(function (){

  $("#input").submit(function (event){
    event.preventDefault();
    



  })

});
