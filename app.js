
window.alert("hello client");

const display = document.getElementById("display");
const display_input = document.getElementById("display_input");

function appendToDisplay(input){
    display_input.value += input;
    display.value += input;
}

function clearDisplay(){
    display.value = "";
    display_input.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value);

    }catch(error){
        display.value = "Error"
    }
}

function suppDisplay(){
    display.value = display.value.slice(0,-1);
}

function parenthèseDisplay(input) {
    display_input.value += input;
    display.value += input;
}



