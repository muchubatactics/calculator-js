/*
    The Burden of Being
        ~muchubatactics 21/08/23
*/

//global variables

let num1 = undefined, num2 = undefined, result = undefined, count = undefined, operator = undefined, tempString = '', displayString = '', minorDisplayString = '';

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
    if (y == 0) return 0;
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
let minorDisplay = document.querySelector(".minor-display");

let digitButtons = Array.from(document.querySelectorAll(".digit-buttons > button"));
digitButtons.forEach( (btn) => {
    btn.addEventListener("click", () => {
        tempString += btn.textContent;
        displayString += btn.textContent;
        display.textContent = displayString;
        console.log(num1, operator, num2);
    });
});

let addButton = document.querySelector(".addBtn");
addButton.addEventListener("click", () => {
    if (num1 && num2)
    {
        num1 = result;
        result = undefined;
        num2 = undefined;
    }
    else if (!num1 && !num2)
    {
        num1 = Number(tempString);
    }
    else
    {
        num2 = Number(tempString);
        num1 = operate(operator, num1, num2);
        num2 = undefined;
    }
    tempString = '';

    operator = "+";
    minorDisplayString = String(num1) +  (" " + operator + " ");
    console.log(minorDisplayString);
    displayString = '';
    display.textContent = displayString;
    minorDisplay.textContent = minorDisplayString;
    console.log(num1, operator, num2);


});

let subtractButton = document.querySelector(".subBtn");
subtractButton.addEventListener("click", () => {
    if (num1 && num2)
    {
        num1 = result;
        result = undefined;
        num2 = undefined;
    }
    else if (!num1 && !num2)
    {
        num1 = Number(tempString);
    }
    else
    {
        num2 = Number(tempString);
        num1 = operate(operator, num1, num2);
        num2 = undefined;
    }
    tempString = '';

    operator = "-";
    minorDisplayString = String(num1) +  (" " + operator + " ");
    console.log(minorDisplayString);
    displayString = '';
    display.textContent = displayString;
    minorDisplay.textContent = minorDisplayString;
    console.log(num1, operator, num2);

});

let multiplyButton = document.querySelector(".mulBtn");
multiplyButton.addEventListener("click", () => {
    if (num1 && num2)
    {
        num1 = result;
        result = undefined;
        num2 = undefined;
    }
    else if (!num1 && !num2)
    {
        num1 = Number(tempString);
    }
    else
    {
        num2 = Number(tempString);
        num1 = operate(operator, num1, num2);
        num2 = undefined;
    }
    tempString = '';

    operator = "*";
    minorDisplayString = String(num1) +  (" " + operator + " ");
    console.log(minorDisplayString);
    displayString = '';
    display.textContent = displayString;
    minorDisplay.textContent = minorDisplayString;
    console.log(num1, operator, num2);


});

let divideButton = document.querySelector(".divBtn");
divideButton.addEventListener("click", () => {
    if (num1 && num2)
    {
        num1 = result;
        result = undefined;
        num2 = undefined;
    }
    else if (!num1 && !num2)
    {
        num1 = Number(tempString);
    }
    else
    {
        num2 = Number(tempString);
        num1 = operate(operator, num1, num2);
        num2 = undefined;
    }
    tempString = '';

    operator = "/";
    minorDisplayString = String(num1) +  (" " + operator + " ");
    console.log(minorDisplayString);
    displayString = '';
    display.textContent = displayString;
    minorDisplay.textContent = minorDisplayString;
    console.log(num1, operator, num2);


});

let equalsButton = document.querySelector(".equBtn");
equalsButton.addEventListener("click", () => {
    num2 = Number(tempString);
    tempString = '';
    result = operate(operator, num1, num2);
    minorDisplay.textContent = String(num1) + " " + operator + " " + String(num2) + " =";
    displayString = String(result);
    display.textContent = displayString;
    console.log(num1, operator, num2);

});

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    num1 = undefined;
    num2 = undefined;
    result = undefined;
    operator = undefined;
    displayString = '';
    tempString = '';
    display.textContent = displayString;
    minorDisplayString = '';
    minorDisplay.textContent = minorDisplayString;
    console.log(num1, operator, num2);

});
