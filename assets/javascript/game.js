$(document).ready(function(){

    var number=Math.floor(Math.random()* 101 +19)

    $("#answer").text(number);

    var num1=Math.floor(Math.random()* 11 +1);
    var num2=Math.floor(Math.random()* 11 +1);
    var num3=Math.floor(Math.random()* 11 +1);
    var num4=Math.floor(Math.random()* 11 +1);

    var total=0;
    var wins=0;
    var lose=0;

    function reset(){

    }

    $("#wins").text(wins);
    $("#lose").text(lose);
    $("#points").text(total);

    $("#add1").on("click", function(){
        total= total+num1;
        $("#points").text(total);
        if(total == number)
        {
            win++;
            $("#wins").text(wins);
            
        }
        else if(total > number)
        {
            lose++;
            $("#wins").text(lose);
        }
    })

    $("#add1").on("click", function(){
        total= total+num1;
        $("#points").text(total);
        if(total == number)
        {
            win++;
            $("#wins").text(wins);
            
        }
        else if(total > number)
        {
            lose++;
            $("#wins").text(lose);
        }
    })

    $("#add1").on("click", function(){
        total= total+num1;
        $("#points").text(total);
        if(total == number)
        {
            win++;
            $("#wins").text(wins);
            
        }
        else if(total > number)
        {
            lose++;
            $("#wins").text(lose);
        }
    })

    $("#add1").on("click", function(){
        total= total+num1;
        $("#points").text(total);
        if(total == number)
        {
            win++;
            $("#wins").text(wins);
            
        }
        else if(total > number)
        {
            lose++;
            $("#wins").text(lose);
        }
    })
});