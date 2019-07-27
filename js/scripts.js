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
    var selectedSizeValue= document.getElementById("pizzaSize").value;
    var selectedCrustValue=document.getElementById("crust").value;
    var selectedToppingValue= document.getElementById("toppings").value;
    var selectedNumber= document.getElementById("many").value;
    alert(selectedSizeValue);
    alert(selectedCrustValue);
    alert(selectedToppingValue);
    alert(selectedNumber);
}
