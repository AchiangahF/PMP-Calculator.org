// This is a commment.........................................................
// Accessing elements from the HTML document and initializing them to a variable

let input_field = document.getElementById("input_field");
let Buttons = document.querySelectorAll(".pBtn");

// Adding a click event to all buttons on the calculator which returns the button value when clicked

Buttons.forEach((Button)=>{
    Button.addEventListener("click", (e)=>{
        input_field.innerText += e.target.value;
    })
})

// Adding a click event to the equals-to button and a function that returns the result 
//of the expression in the input_field or screen 

let calc = document.getElementById("calc");

calc.addEventListener("click", ()=>{
    input_field.innerText = eval(input_field.innerText);
})

// Adding a click event to the AC button to clear the calculator screen when clicked

document.getElementById("clearAll").addEventListener("click", ()=>{
    input_field.innerText = "";
})

// Adding a click event to the CE button to delete the last element in the calculator screen

document.getElementById("backspace").addEventListener("click", ()=>{
    input_field.innerText = input_field.innerText.slice(0, input_field.innerText.length-1);
})

//Take your time and study the code. If you have any trouble understanding some code, feel to 
//Express your worries over at PMP(Practice Makes Programmer).