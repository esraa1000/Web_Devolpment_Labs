
function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (typeof num === 'number') {
        num = num.toString();
    }
    document.getElementById("output-value").innerText = num;
}

function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

let currentNumber = "0";
let newNumber = true;
let lastOperator = "";
let waitingForOperand = false;

window.onload = function() {
    printOutput("0");
    printHistory("");

    // Handle number buttons
    const numberButtons = document.getElementsByClassName("number");
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener("click", function() {
            if (newNumber || currentNumber === "0") {
                currentNumber = this.id;
                newNumber = false;
            } else {
                currentNumber += this.id;
            }
            printOutput(currentNumber);
            waitingForOperand = false;
        });
    }

    // Handle operator buttons
    const operatorButtons = document.getElementsByClassName("operator");
    for (let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].addEventListener("click", function() {
            const operator = this.id;
            
            if (operator === "clear") {
                currentNumber = "0";
                newNumber = true;
                lastOperator = "";
                waitingForOperand = false;
                printOutput("0");
                printHistory("");
                return;
            }
            
            if (operator === "backspace") {
                if (currentNumber.length > 1) {
                    currentNumber = currentNumber.slice(0, -1);
                } else {
                    currentNumber = "0";
                    newNumber = true;
                }
                printOutput(currentNumber);
                return;
            }

            let history = getHistory();
            
            if (operator === "=") {
                if (!waitingForOperand && history !== "") {
                    history = history + currentNumber;
                    try {
                        let result = eval(history.replace(/×/g, "*").replace(/÷/g, "/"));
                        if (!isFinite(result)) {
                            printOutput("Error");
                        } else {
                            printOutput(result);
                            currentNumber = result.toString();
                        }
                        printHistory("");
                        newNumber = true;
                        waitingForOperand = false;
                        lastOperator = "";
                    } catch (e) {
                        printOutput("Error");
                        printHistory("");
                        currentNumber = "0";
                        newNumber = true;
                        waitingForOperand = false;
                        lastOperator = "";
                    }
                }
            } 
            else if (operator === "%") {
                let result = parseFloat(currentNumber) / 100;
                currentNumber = result.toString();
                printOutput(currentNumber);
                newNumber = true;
            } 
            else if (!waitingForOperand) {
                history = history + currentNumber + operator;
                printHistory(history);
                lastOperator = operator;
                newNumber = true;
                waitingForOperand = true;
            }
            else if (lastOperator && lastOperator !== operator) {
                history = history.slice(0, -1) + operator;
                printHistory(history);
                lastOperator = operator;
            }
        });
    }
}


