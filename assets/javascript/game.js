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
            reset();
            
        }
        else if(total > number)
        {
            lose++;
            $("#lose").text(lose);
            reset();
        }
    })

    $("#add2").on("click", function(){
        total= total+num2;
        $("#points").text(total);
        if(total == number)
        {
            win++;
            $("#wins").text(wins);
            reset();
           
            
        }
        else if(total > number)
        {
            lose++;
            $("#lose").text(lose);
            reset();
        }
    })

    $("#add3").on("click", function(){
        total= total+num3;
        $("#points").text(total);
        if(total == number)
        {
            win++;
            $("#wins").text(wins);
            reset();
        
            
        }
        else if(total > number)
        {
            lose++;
            $("#lose").text(lose);
            reset();
        }
    })

    $("#add4").on("click", function(){
        total= total+num4;
        $("#points").text(total);
        if(total == number)
        {
            win++;
            $("#wins").text(wins);
            reset();
        }
        else if(total > number)
        {
            lose++;
            $("#lose").text(lose);
            reset();
        }
    })

    function reset(){
        number=Math.floor(Math.random()* 101 +19);
        $("#answer").text(number);
        num1=Math.floor(Math.random()* 11 +1);
        num2=Math.floor(Math.random()* 11 +1);
        num3=Math.floor(Math.random()* 11 +1);
        num4=Math.floor(Math.random()* 11 +1);
        total=0;
        $("#points").text(total);
    }
});