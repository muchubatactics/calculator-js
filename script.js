/*
    The Burden of Being
        ~muchubatactics 21/08/23
*/

//global variables

let num1, num2, result;
let operator;

//functions

function add(x, y)
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x, y)
{
    return x * y;
}

function divide(x, y)
{
    return x / y;
}

function operate(operator, x, y)
{
    switch (operator)
    {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
        //debug
        default:
            console.log("error in operate");
    }
}

let display = document.querySelector(".display");

let digitButtons = Array.from(document.querySelectorAll(".digit-buttons > button"));
digitButtons.forEach( (btn) => {
    btn.addEventListener("click", () => {
        display.textContent += String(btn.textContent);
    });
});

let addButton = document.querySelector(".addBtn");
addButton.addEventListener("click", () => {
    if (!operator)
    {
        operator = "+";
        if(!num1)
        {
            num1 = Number(display.textContent);
        }
        else
        {
            num1 = result;
        }
        display.textContent = String(num1) + (" " + operator + " ");
    }

});

let subtractButton = document.querySelector(".subBtn");
subtractButton.addEventListener("click", () => {
    if (!operator)
    {
        operator = "-";
        if(!num1)
        {
            num1 = Number(display.textContent);
        }
        else
        {
            num1 = result;
        }
        display.textContent = String(num1) + (" " + operator + " ");
    }
});

let multiplyButton = document.querySelector(".mulBtn");
multiplyButton.addEventListener("click", () => {
    if (!operator)
    {
        operator = "*";
        if(!num1)
        {
            num1 = Number(display.textContent);
        }
        else
        {
            num1 = result;
        }
        display.textContent = String(num1) + (" " + operator + " ");
    }
});

let divideButton = document.querySelector(".divBtn");
divideButton.addEventListener("click", () => {
    if (!operator)
    {
        operator = "/";
        if(!num1)
        {
            num1 = Number(display.textContent);
        }
        else
        {
            num1 = result;
        }
        display.textContent = String(num1) + (" " + operator + " ");
    }
});

let equalsButton = document.querySelector(".equBtn");
equalsButton.addEventListener("click", () => {
    num2 = Number(display.textContent.match(/\d+/g)[1]);
    console.log(num1, operator, num2);
    if (num2)
    {
        result = operate(operator, num1, num2);
        display.textContent = String(result);
    }
});

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    num1 = undefined;
    num2 = undefined;
    result = undefined;
    operator = undefined;
    display.textContent = '';
});
