//calculator program

const display =document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}
function clearDisplay(){
    display.value ="";

}
function deletDisplay(){
    display.value ="";

}
function rebeatDisplay(){
    try{
        display.value =eval(display.value);
        }
        catch(rebeatDisplay){
            display.value ="display.value "
        }

}
function calculate(){
    try{
    display.value =eval(display.value);
    }
    catch(error){
        display.value ="errer "
    }
    
}