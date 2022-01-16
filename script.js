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
        $("#preferences").modal("hide");
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
    var inputcrust= parseInt($("#crust").val()) * selectedpizza[0];
    var inputtoppings = parseInt($("#toppings").val()) * selectedpizza[0];
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

    
    var totalsum = 0;
    // add new totals to tottals array
    $('#cart li').each(function(){
      neworder.totals.push(total);
     });

    $.each(neworder.totals,function(){totalsum += this;});
    // display receipt
    $("#cart").append(pizzaamt + " " + pizzaname + " " + pizzasize + "</br>" + 
    pizzacrust + "</br>"+ 
    pizzatoppings + "</br>" +
    "<li>" + neworder.totals + "</li>" + "</br>" 

    );
    $("#cart li").hide();

    $("#total").text("Total cost: " + totalsum);
    $("#getlocation").html('<button id="setlocation" class="choose">Select Location</button>');
    $("#setlocation").click(function(){
      $("#location").toggle();
    });
    $("#checkout").html('</br><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">Checkout</button>');
    $("#location").hide();
    
    $("#location").html('<form><select id="delivery"><option value="0"> <b>!! NO PICKUP @:KSH 0 !! </b> </option><option value="50">Nairobi @:Ksh 50</option><option value="70">Kasarani @:Ksh 70</option><option value="80">Kahawa @:Ksh 80</option></select></form>');

    // calculate totalcost + delivery
    $("#checkout").click(function(){
      var totaldeliverycost = parseInt($("#delivery").val()) + totalsum;
    $("#message").text("your order will be delivered at " + $( "#delivery option:selected" ).text() + " the total cost is: " + totaldeliverycost);
    $('#reload').click(function() {
      location.reload();
  });
    });
   
  });

});
