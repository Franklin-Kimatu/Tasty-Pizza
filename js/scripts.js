$(document).ready(function(){


    $(".orderbutton").click(function(){
        $(".fourteen1").fadeIn();
    });
    $(".cancel").click(function(){
        $(".fourteen1").fadeut();
    });

    $("#doorStepDelivery").click(function(){
        $("#location").show();
    });
});

function getSelectValue(){
    var selectedSizeValue= parseInt(document.getElementById("pizzaSize").value);
    var selectedCrustValue=parseInt(document.getElementById("crust").value);
    var selectedToppingValue= parseInt(document.getElementById("toppings").value);
    var selectedNumber= parseInt(document.getElementById("many").value);
    var selectedLocation= parseInt(document.getElementById("delivery").value);
    alert(selectedSizeValue);
    alert(selectedCrustValue);
    alert(selectedToppingValue);
    alert(selectedNumber);
    alert(selectedLocation);

    var totalAmount= (selectedSizeValue + selectedCrustValue + selectedToppingValue) * selectedNumber + selectedLocation;
     alert(totalAmount);
}
