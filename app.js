const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error"
    }
}

function suppDisplay(){
    display.value = display.value.toString().slice(0,-1);
}

function parenthèseDisplay(input) {
    display.value += input;
}

