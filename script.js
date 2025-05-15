function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function divide(x,y){
    return x/y;
}
function multiply(x,y){
    return x*y;
}
let number1 
let number2 
let operator = "";
let inputbuffer = "";

function operate(num1,operator,num2){
    if (operator === "+"){
        return add(num1,num2);
    }
    else if(operator === "-"){
        return sub(num1,num2);
    }
    else if(operator === "*"){
        return multiply(num1,num2);
    }
    else if(operator === "/"){
        return divide(num1,num2);
    }
}
const display = document.querySelector("#display");
for (let i=0;i<10;i++){
    const button = document.querySelector(`#button${i}`);
    button.addEventListener("click",() => {
        inputbuffer+=i;
        display.textContent += i;
        console.log(number1);
        console.log(number2);
    });
    
}
const mult = document.querySelector("#mult");
mult.addEventListener("click",() => {
    if (inputbuffer === "") return; 
    number1 = parseFloat(inputbuffer); 
    display.textContent += "*";
    operator = "*";
    inputbuffer=""
    console.log(operator);
});
const addition = document.querySelector("#plus");
addition.addEventListener("click",() => {
    if (inputbuffer === "") return; 
    number1 = parseFloat(inputbuffer); 
    display.textContent += "+";
    operator = "+";
    inputbuffer=""
    console.log(operator);
});
const subt = document.querySelector("#subt");
subt.addEventListener("click",() => {
    if (inputbuffer === "") return; 
    number1 = parseFloat(inputbuffer);
    display.textContent += "-";
    operator = "-";
    inputbuffer=""
    console.log(operator);
});
const divid = document.querySelector("#divide");
divid.addEventListener("click",() => {
    if (inputbuffer === "") return; 
    number1 = parseFloat(inputbuffer);
    display.textContent += "/";
    operator = "/";
    inputbuffer=""
    console.log(operator);
});
const equal = document.querySelector("#equal");
equal.addEventListener("click",() => {
    if (inputbuffer === "") return; 
    number2 = parseFloat(inputbuffer);
    let operation = operate(number1,operator,number2);
    display.textContent=operation;
    inputbuffer = operation.toString();
    number1 = operation;
    number2 = undefined;
});
const clear = document.querySelector("#clear");
clear.addEventListener("click",() => {
    display.textContent = " ";
    number1 = undefined;
    number2 = undefined;
    operator = ""
});