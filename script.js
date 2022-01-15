//validate input
function getamt() {
  var beef = document.getElementById('ammount').value;
  var chicken = document.getElementById('num').value;
  var cheese = document.getElementById('qty').value;

  if (beef > 0) { 
    return beef;
  } else {
    if (chicken > 0) {
      return chicken;
    } else {
      if (cheese > 0) {
        return cheese;
      } else {
        alert("enter valid ammount");
      }
    }
  }
}
function customerorder(ammount, size, crust, toppings,totalprice) {
  this.ammount = ammount;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.totalprice = totalprice
}

$(document).ready(function(){
  $("#getvalue").click(function() {
    var inputamt = getamt();
    var inputsize = parseInt($("#size").val());
    var inputcrust= parseInt($("#crust").val());
    var inputtoppings = parseInt($("#toppings").val());
    var totalprice = inputamt * inputsize + inputcrust + inputtoppings; 

    // clear form data after submission

    const neworder = new customerorder(inputamt, inputsize, inputcrust, inputtoppings, totalprice);
    
    $("#cart").append("<li>" + neworder.totalprice + "</li>");
  });

});