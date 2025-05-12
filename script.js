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
let number1 = 0;
let number2 = 0;
let operator = "";

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
        display.textContent += i;
        if (number1 !== undefined ){
            number1 = i;
        }
        else{
            number2 = i;
        }
        console.log(number1);
    });
    
}
const mult = document.querySelector("#mult");
mult.addEventListener("click",() => {
    display.textContent += "*";
    operator = "*";
    console.log(operator);
});
const add = document.querySelector("#plus");
mult.addEventListener("click",() => {
    display.textContent += "+";
    operator = "+";
    console.log(operator);
});
const subt = document.querySelector("#subt");
subt.addEventListener("click",() => {
    display.textContent += "-";
    operator = "-";
    console.log(operator);
});
const divid = document.querySelector("#divide");
divid.addEventListener("click",() => {
    display.textContent += "/";
    operator = "/";
    console.log(operator);
});
const equal = document.querySelector("#equal");
equal.addEventListener("click",() => {
    let operation = operate(number1,operator,number2);
    display.textContent=operation;
});
const clear = document.querySelector("#clear");
mult.addEventListener("click",() => {
    display.textContent += " ";
});