$(document).ready(function(){


    $(".orderbutton").click(function(){
        $(".fourteen1").fadeIn();
        $("body").blur();
    });
    $(".cancel").click(function(){
        $(".fourteen1").hide();
    });
    $("#ok").submit(function(){
        $(".fourteen1").fadeOut();
    })

    $("#doorStepDelivery").click(function(){
        $("#location").fadeIn();
    });

    $("#addAnotherOrder").click(function(){
        $("#choices").append('<div class="form-group">' +
        '<label for="pizzaSize">Choose the size:</label>'+
        '<select class="form-control" id="pizzaSize" onchange="getSelectValu();">'+
            '<option value="0">&nbsp;</option>'+
            '<option value="400">Small -- Ksh. 400</option>'+
            '<option value="700">Medium -- Ksh. 700</option>'+
            '<option value="900">Large -- Ksh. 900</option>'+
        '</select>'+
        '<label for="crust">Chooose the crust:</label>'+
        '<select class="form-control" id="crust" onchange="getSelectValu();">'+
            '<option value="0">&nbsp;</option>'+
            '<option value="200">Crispy&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;&nbsp;Ksh.200</option>'+
            '<option value="300">Stuffed&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;Ksh.300</option>'+
            '<option value="100">Glutten-free&nbsp;&nbsp;-- &nbsp;&nbsp;Ksh100</option>'+
            '<option value="400">Fried Ramen&nbsp;&nbsp;--&nbsp;&nbsp;Ksh.400</option>'+
            '<option value="0">None</option>'+
        '</select>'+
        '<label for="toppings">Choose toppings:</label>'+
        '<select class="form-control" id="toppings" onchange="getSelectValu();">'+
            '<input type="checkbox" class="checks" value="100">Pepperoni.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
            '<input type="checkbox" class="checks" value="150">Mushrooms.<br>'+
            '<input type="checkbox" class="checks" value="100">Onions.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
            '<input type="checkbox" class="checks" value="200">Sausage.<br>'+
        '</select>'+
        '<label for="many">How many?</label>'+
        '<select class="form-control" id="many" onchange="getSelectValu();" required>'+
            '<option value="1">1</option>'+
            '<option value="2">2</option>'+
            '<option value="3">3</option>'+
            '<option value="4">4</option>'+
            '<option value="5">5</option>'+
            '<option value="6">6</option>'+
            '<option value="7">7</option>'+
            '<option value="8">8</option>'+
            '<option value="9">9</option>'+
            '<option value="10">10</option>'+
        '</select><br>'+
    '</div>');
    });
});

function getSelectValue(){
    var selectedSizeValue= parseInt(document.getElementById("pizzaSize").value);
    var selectedCrustValue=parseInt(document.getElementById("crust").value);
    var selectedToppingValue= parseInt(document.getElementById("toppings").value);
    var selectedNumber= parseInt(document.getElementById("many").value);
    var selectedLocation= parseInt(document.getElementById("delivery").value);
    console.log(selectedSizeValue);
    console.log(selectedCrustValue);
    console.log(selectedToppingValue);
    console.log(selectedNumber);
    console.log(selectedLocation);

    var totalAmount= (selectedSizeValue + selectedCrustValue + selectedToppingValue) * selectedNumber + selectedLocation;
     alert(totalAmount);
}
