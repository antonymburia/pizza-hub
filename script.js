//validate input
function getamt() {
  var beef = document.getElementById('ammount').value;
  var chicken = document.getElementById('num').value;
  var cheese = document.getElementById('qty').value;

  if (beef > 0) { 
    return [beef, 'Beef Pizza'];
  } else {
    if (chicken > 0) {
      return [chicken, 'Chicken Pizza'];
    } else {
      if (cheese > 0) {
        return [cheese, 'Cheese Pizza'];
      } else {
        alert("enter valid ammount");
      }
    }
  }
}


// order constructor
function customerorder(ammount, size, crust, toppings) {
  this.ammount = ammount;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.totals = [];
}
function totalprice(total) {
  this.total = total;
}


$(document).ready(function(){
  $("#getvalue").click(function() {
    var selectedpizza = getamt();
    var inputamt = selectedpizza[0];
    var inputsize = parseInt($("#size").val());
    var inputcrust= parseInt($("#crust").val());
    var inputtoppings = parseInt($("#toppings").val());
    var pizzasize = $( "#size option:selected" ).text();
    var pizzacrust = $( "#crust option:selected" ).text();
    var pizzatoppings = $( "#toppings option:selected" ).text();
    var pizzaamt = selectedpizza[0];
    var pizzaname = selectedpizza[1]
    var total = inputamt * inputsize + inputcrust + inputtoppings; 

    
 
 
    // clear form data after submission
    if (inputamt > 0) {
      document.getElementById("first").reset();
      document.getElementById("2nd").reset();
      document.getElementById("3rd").reset();
    }


    const neworder = new customerorder(inputamt, inputsize, inputcrust, inputtoppings, total);
    var newtotal = new totalprice(total);
    neworder.totals.push(total);

    
    
    // display receipt
    $("#cart").append(pizzaamt + " " + pizzaname + " " + pizzasize + "</br>" + 
    pizzacrust + "</br>"+ 
    pizzatoppings + "</br>" +
    "<li>" + neworder.totals + "</li>" + "</br>" 
    );
    $("#cart li").hide();

    $("#total").text("Total cost: " + totalsum);
   
  });

});