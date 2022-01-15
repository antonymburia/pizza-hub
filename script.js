function customerorder(amount, size, crust, toppings,totalprice) {
  this.ammount = ammount;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.totalprice = totalprice
}

$(document).ready(function(){
  $("#getvalue").click(function() {
    var inputamt = $("input#ammount").val();
    var inputsize = parseInt($("#size").val());
    var inputcrust= parseInt($("#crust").val());
    var inputtoppings = parseInt($("#toppings").val());
    var totalprice = inputamt * inputsize + inputcrust + inputtoppings; 

    const neworder = new customerorder(inputamt, inputsize, inputcrust, inputtoppings, totalprice);
    
    $("#cart").append("<li>" + neworder.totalprice + "</li>");
  });

});