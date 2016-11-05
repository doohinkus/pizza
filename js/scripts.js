
var pizzas = [];
function Pizza (size){
  this.toppings = [],
  this.size = size,
  this.price = 0,
  this.fullfillment = "pick-up"
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


Pizza.prototype.addExtras = function(size, selectedToppings, order){
  //sizes
  var sizeSelection = "small";
  var toppingPrice = 0;
  if (order === "delivery"){
    toppingPrice += 5;
  }
  prices.forEach (function (price){
    if (price.name === size){
      sizeSelection = price.price;
    }
  });
  //toppings gotta be a better way to get the topping price
  toppings.forEach(function (topping){
    selectedToppings.forEach(function (setopping){
      if (topping.name === setopping){
        toppingPrice += parseFloat(topping.price);
        console.log(parseFloat(toppingPrice))
      }
    });
  });

  toppingPrice += sizeSelection;

  return this.price = toppingPrice;
}

var grandTotal = function (pizzas){
  var total = 0;
  pizzas.forEach(function (pizza){
  total += pizza.price;

  });
  return total;


}

function cleanUpForm(){
  $("#anotherPizza").fadeIn();
  $("#completeOrder").fadeIn();
  $(".order-number").text("Would you like another pizza?");
  $(".order-options").hide();
  $(".order").hide().slideDown(800);
  $("#order-type").val("0");
  //rewrite form
  $("input:checkbox[name=toppings]").each(function(){
    $(this).prop( "checked", false );
 });

}

$(document).ready(function (){


  $("#input").submit(function (event){

    event.preventDefault();

//grab form info stuff
    var size = $("#size").val();
    var orderOption = $("#order-type").val();
    var pizza = new Pizza (size);

    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      pizza.fulfillment = orderOption;
      pizza.toppings.push(topping);
      // console.log("topping: "+topping+ "");
   });
   cleanUpForm();
//update object
   pizza.addExtras(size, pizza.toppings, orderOption);
  //  console.log(pizzas)
//push object to pizzas array
   pizzas.push(pizza);


  //output stuff
  $(".amount").text("Your " + pizza.size + " pizza is $" + pizza.price.toFixed(2));

   });

   $("#completeOrder").click(function (){

    pizzas.forEach(function (pizza){
      console.log (pizza.size, " ", pizza.price, " ", pizza.toppings);
      $(".modal-body").append('<div class="pizza-details"><h2 class="pizza">'+
                      pizza.size + ' pizza</h2><p class="cost">$' + pizza.price.toFixed(2) + "</p><p>Toppings: " + pizza.toppings +'</p></div>');

      // pizza.toppings.forEach(function (topping){
      //   console.log(toppings)
      //   $(".toppings").append("<li>"+topping+"</li>");
      // });
      });

      $(".modal-body").append("<h2> Grand Total: $" + grandTotal(pizzas).toFixed(2) + "</h2>");
      $('#myModal').modal();
      $('#myModal').on('hide.bs.modal', function () {

      location.reload();
    });
   });

});
