
$(document).ready(function(){

    var num1, num2, operator, result;
    var operatorCheck, keyLock, equal;
    
    function inicialize (){
        num1 = "";
        num2 = "";
        operator = "";
        result = "";
        operatorCheck = false;
        calcutated = false;
        $("#first-number, #second-number, #operator, #result").empty();
    }

    inicialize();

    /*listening all the class number buttons=====================================*/
    $(".number").on("click", function(){
        // if condicional is true force to jumps out of the listening event
        if (calcutated) return;

        if (operatorCheck !== true){
            num1 += this.value;
            $("#first-number").text(num1);
        }else{
            num2 += this.value;
            $("#second-number").text(num2);
        }     
    });

    /*listening all the class operator buttons====================================*/
    $(".operator").on("click", function(){
        // if condicional is true force to jumps out of the listening event
        if (calcutated) return;     

        if (num1 !== ""){
            operator = this.value;
            $("#operator").text($(this).text());
            operatorCheck = true;
        }
    });

    /*listening for equal button===================================================*/
    $(".equal").on("click", function(){
        // if condicional is true force to jumps out of the listening event
        if (calcutated) return;
        calcutated = true;

        //converting from str to Int
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        
        if (operator === "plus"){
            result = num1 + num2;
        } 
        if (operator === "minus"){
            result = num1 - num2;
        } 
        if (operator === "divide"){
            result = num1 / num2;
        } 
        if (operator === "times"){
            result = num1 * num2;
        } 
        if (operator === "power"){
            result = Math.pow(num1,num2);
        } 

        $("#result").text(result);
    });

    /*listening for clear button====================================================*/
    $(".clear").on("click", function(){
        inicialize();

    });
});
