/*
    The Burden of Being
        ~muchubatactics 21/08/23
*/

//global variables

let num1 = undefined, num2 = undefined, result = undefined, operator = undefined, tempString = '', minorDisplayString = '';
let justPressedEquals = false;

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
    if (y == 0)
    {
        prompt("come on man, don't divide by 0 :)");
        return undefined;
    }
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

function processTempString(str)
{
    return String(Number(str));
}

function mathOpButtonCode(op)
{
    justPressedEquals = false;
    if (num1 != undefined && num2 != undefined)
    {
        num1 = Number(tempString);
        result = undefined;
        num2 = undefined;
    }
    else if (num1 == undefined && num2 == undefined)
    {
        if (processTempString(tempString) != 0)
        {
            num1 = Number(tempString);
        }
    }
    else
    {
        if (processTempString(tempString) != 0)
        {
            num2 = Number(tempString);
            num1 = operate(operator, num1, num2);
            num2 = undefined;
        }
    }
    tempString = '';
    tempString = processTempString(tempString);

    operator = op;
    minorDisplayString = String(num1) +  (" " + operator + " ");
    display.textContent = tempString;
    minorDisplay.textContent = minorDisplayString;
}

function hoverAction(button)
{
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "rgb(60, 60, 60)";
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "rgb(83, 83, 83)";
    });
}

//buttons

let display = document.querySelector(".display");
display.textContent = processTempString(tempString);
let minorDisplay = document.querySelector(".minor-display");

let digitButtons = Array.from(document.querySelectorAll(".digit-buttons > button"));
digitButtons.forEach( (btn) => {
    btn.addEventListener("click", () => {
        if (justPressedEquals) 
        {
            tempString = '';
            justPressedEquals = false;
        }
        tempString += btn.textContent;
        tempString = processTempString(tempString);
        display.textContent = tempString;
    });
    
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "rgb(70, 70, 70)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "rgb(92, 92, 92)";
    });

});

let addButton = document.querySelector(".addBtn");
addButton.addEventListener("click", () => {
    mathOpButtonCode("+");
});
hoverAction(addButton);

let subtractButton = document.querySelector(".subBtn");
subtractButton.addEventListener("click", () => {
    mathOpButtonCode("-");
});
hoverAction(subtractButton);

let multiplyButton = document.querySelector(".mulBtn");
multiplyButton.addEventListener("click", () => {
    mathOpButtonCode("*");
});
hoverAction(multiplyButton);

let divideButton = document.querySelector(".divBtn");
divideButton.addEventListener("click", () => {
    mathOpButtonCode("/");
});
hoverAction(divideButton);

let equalsButton = document.querySelector(".equBtn");
equalsButton.addEventListener("click", () => {
    if (num1 != undefined && tempString && operator)
    {
        num2 = Number(tempString);
        result = operate(operator, num1, num2);
        if (result == undefined)
        {
            num2 = undefined; 
            return;
        }
        result = Math.round(result*10000) / 10000;
        minorDisplay.textContent = String(num1) + " " + operator + " " + String(num2) + " =";
        tempString = String(result);
        display.textContent = tempString;
        operator = undefined;
        justPressedEquals = true;
    }
});
hoverAction(equalsButton);

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    justPressedEquals = false;
    num1 = undefined;
    num2 = undefined;
    result = undefined;
    operator = undefined;
    tempString = '';
    tempString = processTempString(tempString);
    display.textContent = tempString;
    minorDisplayString = '';
    minorDisplay.textContent = minorDisplayString;
});
clearButton.addEventListener("mouseover", () => {
    clearButton.style.backgroundColor = "rgb(75, 1, 1)";
});

clearButton.addEventListener("mouseout", () => {
    clearButton.style.backgroundColor = "rgb(83, 83, 83)";
});

let pointButton = document.querySelector(".point");
pointButton.addEventListener("click", () => {
    justPressedEquals = false;
    if (tempString && !tempString.includes("."))
    {
        tempString += ".";
        display.textContent = tempString;
    }
});
hoverAction(pointButton);

let deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    justPressedEquals = false;
    if (!tempString || tempString.length == 1)
    {
        tempString = "0";
    }
    else
    {
        tempString = tempString.slice(0, -1);
    }
    display.textContent = tempString;
});
deleteButton.addEventListener("mouseover", () => {
    deleteButton.style.backgroundColor = "rgb(1, 2, 75)";
});

deleteButton.addEventListener("mouseout", () => {
    deleteButton.style.backgroundColor = "rgb(83, 83, 83)";
});
