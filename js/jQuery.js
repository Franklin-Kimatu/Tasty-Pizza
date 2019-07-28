$(document).ready(function(){


    $(".orderbutton").click(function(){
        $(".fourteen1").fadeIn();
    });
    $(".cancel").click(function(){
        $(".fourteen1").fadeOut(300);
    });
    $("#ok").click(function(){
        $(".fourteen1").fadeOut(300);
    });
    $("#ok").click(function(){
        $(".fourteen2").fadeIn(700);
    });
    $("#fourteen3button").click(function(){
        $(".fourteen2").fadeOut(300);
    });
    $("#fourteen4button").click(function(){
        $(".fourteen2").fadeOut(300);
    });
    $("#doorStepDelivery").click(function(){
        $("#location").show();
    });
    $("#addAnotherOrder").click(function(){
        $("#choices").append('<div id="choices">'+
                                '<div class="form-group">'+
                                    '<label for="pizzaSize">Choose the size:</label>'+
                                    '<select class="form-control" id="pizzaSize" onchange="getSizeValue();">'+
                                    '<option value="0">&nbsp;</option>'+
                                    '<option value="400">Small -- Ksh. 400</option>'+
                                    '<option value="700">Medium -- Ksh. 700</option>'+
                                    '<option value="900">Large -- Ksh. 900</option>'+
                                    '</select>'+
                                    '<label for="crust">Chooose the crust:</label>'+
                                    '<select class="form-control" id="crust" onchange="getCrust();" required>'+
                                    '<option value="0">&nbsp;</option>'+
                                    '<option value="200">Crispy&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;&nbsp;Ksh.200</option>'+
                                    '<option value="300">Stuffed&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;Ksh.300</option>'+
                                    '<option value="100">Glutten-free&nbsp;&nbsp;-- &nbsp;&nbsp;Ksh100</option>'+
                                    '<option value="400">Fried Ramen&nbsp;&nbsp;--&nbsp;&nbsp;Ksh.400</option>'+
                                    '<option value="0">None</option>'+
                                    '</select>'+
                                    '<label for="toppings">Choose toppings:</label><br>'+
                                    '<input type="checkbox" id="pepperoni"name="checks" value="100" onclick="getPepperoni();">Pepperoni.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
                                    '<input type="checkbox" id="mushrooms" name="checks" value="150" onclick="getMushroom();">Mushrooms.<br>'+
                                    '<input type="checkbox" id ="onions" name="checks" value="100" onclick="getOnions();">Onions.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
                                    '<input type="checkbox" id="sausage" name="checks" value="200"onclick="getSausage();">Sausage.<br>'+
                                    '<label for="many">How many?</label>'+
                                    '<select class="form-control"id="many" onchange="getNumber();" required>'+
                                    '<option value="0">&nbsp;</option>'+
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
                            '</div>')
    })
});