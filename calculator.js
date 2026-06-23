let numbercontainer = document.querySelector(".numbercontainer");
let calculatorcontainer = document.querySelector(".calculatorcontainer");
let screencontainer = document.querySelector(".screencontainer");
let operationcontainer = document.querySelector(".operationcontainer");
let output = document.querySelector(".output");

let operations = ["+", "-", "*", "/", "="];

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;


for (let i = 9; i >= 0; i--) {
    let num = document.createElement("button");
    num.className = "btn";
    num.textContent = i;

    numbercontainer.append(num);

    num.addEventListener("click", () => {
        if (!isSecond) {
            firstNumber += num.textContent;
            output.value = firstNumber;
        } else {
            secondNumber += num.textContent;
            output.value = secondNumber;
        }
    });
}


for (let i = 0; i < 5; i++) {
    let choice = document.createElement("button");
    choice.className = "operation";
    choice.textContent = operations[i];

    operationcontainer.append(choice);


    choice.addEventListener("click", () => {

        if (choice.textContent === "=") {

            let a = Number(firstNumber);
            let b = Number(secondNumber);

            let result = 0;

            if (operator === "+") result = a + b;
            else if (operator === "-") result = a - b;
            else if (operator === "*") result = a * b;
            else if (operator === "/") {
                result = (b !== 0) ? a / b : "Error";
            }

            output.value = result;


            firstNumber = result.toString();
            secondNumber = "";
            operator = "";
            isSecond = false;

        } else {
            operator = choice.textContent;
            isSecond = true;
            output.value = operator;
        }
    });
}

calculatorcontainer.append(numbercontainer);