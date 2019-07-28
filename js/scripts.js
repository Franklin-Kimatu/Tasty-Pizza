$(document).ready(function(){


    $(".orderbutton").click(function(){
        $(".fourteen1").fadeIn();
    });
    $(".cancel").click(function(){
        $(".fourteen1").fadeOut(300);
    });
    $("#ok").click(function(){
        $(".fourteen1").fadeOut(300);
    })
    $("#doorStepDelivery").click(function(){
        $("#location").show();
    });
});

function getSizeValue(){
    var selectedValue= document.getElementById("pizzaSize").value;
    return parseInt(selectedValue);
}

function getCrust(){
    var selectedCrust =document.getElementById("crust").value;
    return parseInt(selectedCrust);
}

function getPepperoni(){
    var pepperoni=0;
    var selectedPepperoni =document.getElementById("pepperoni");
    if(selectedPepperoni.checked===true){
        pepperoni=100;
    }
    return parseInt(pepperoni);
}

function getMushroom(){
    var mushroom=0;
    var selectedMushroom=document.getElementById("mushrooms");
    if(selectedMushroom.checked===true){
        mushroom=150;
    }
    return parseInt(mushroom);
}

function getOnions(){
    var onions=0;
    var selectedOnions=document.getElementById("onions");
    if(selectedOnions.checked===true){
        onions=100;
    }
    return parseInt(onions);
}

function getSausage(){
    var sausage=0;
    var selectedSausage=document.getElementById("sausage");
    if(selectedSausage.checked===true){
        sausage=200;
    }
    return parseInt(sausage);
}

function getNumber(){
    var selectedNumber=document.getElementById("many").value;
    return parseInt(selectedNumber);
}

function getLocation(){
    var selectedLocation= document.getElementById("delivery").value;
    return parseInt(selectedLocation);
}

function getTotalAmount(){
    var totalAmount=(getSizeValue() + getCrust() + getPepperoni() + getMushroom() + getOnions() + getSausage()) * getNumber() + getLocation();
    alert(totalAmount);
}