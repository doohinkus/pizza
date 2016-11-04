
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
   });

//update object
   pizza.addExtras(size, pizza.toppings, orderOption);
//push object to pizzas array
  pizzas.push(pizza);
  // console.log (pizza, " ", pizzas.length)
//output stuff
   $("#anotherPizza").fadeIn();
   $("#completeOrder").fadeIn();
   $(".order-number").text("Another ?");
   $(".order-options").hide();
   $(this).hide().slideDown(800);
   $("#order-type").val("0");
   $(".amount").text("Your " + pizza.size + " pizza is $" + pizza.price.toFixed(2));

   $("input:checkbox[name=toppings]:checked").each(function(){
     $(this).prop( "checked", false );

  });


   });
   $("#completeOrder").click(function (){
    //  console.log("features work!!!")
    // $('#myModal').modal()
    pizzas.forEach(function (pizza){
      // $(".pizza").text(pizza.size+ " pizza");
      $(".modal-body").append('<div class="pizza-details"><h2 class="pizza">'+
                      pizza.size + 'pizza</h2><ul class="toppings"></ul><p class="order">' +
                      pizza.fullfillment + '</p><p class="cost">$' + pizza.price.toFixed(2) + '</p></div>');
      pizza.toppings.forEach(function (topping){
        $(".toppings").append("<li>"+topping+"</li>");
      });
      $('#myModal').modal();
      $('#myModal').on('hide.bs.dropdown', function () {
  // do something
  console.log("modal closed!!!")
      });

    });
   });

});
