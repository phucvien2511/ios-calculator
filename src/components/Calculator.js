import React, { useState, useEffect } from "react";
import "../styles/Calculator.css";

function UpdateScreen() {
    const [screenValue, setScreenValue] = useState("0"); //Set the content of the screen
    const [operator, setOperator] = useState(""); //Set the current operator
    const [firstNumber, setFirstNumber] = useState(0); //Set the current first number value
    const [secondNumber, setSecondNumber] = useState(0); //Set the current second number value
    const updateScreenValue = (key) => {
        const keyType = key.target.className.split(" ")[1]; //Get the key type
        if (keyType === "number") {
            if (operator === "" && operator !== "=") {
                setScreenValue(key.target.innerText);
                setFirstNumber(parseInt(key.target.innerText));
            }
            else if (operator !== "" && operator !== "=") {
                setScreenValue(key.target.innerText);
                setSecondNumber(parseInt(key.target.innerText));
            }
        }
        else if (keyType === "operator") {
            const keyId = key.target.id; //Get the key id
            if (keyId === "reverse") {
                setScreenValue(screenValue * -1);
                if (operator === "" && operator !== "=") {
                    setFirstNumber(screenValue * -1);
                }
                else {
                    setSecondNumber(screenValue * -1);
                }
            }
            else if (keyId === "decimal") {
                setScreenValue(screenValue + ".");
            }
            else if (keyId === "addition") {
                setOperator("+");
            }
            else if (keyId === "subtraction") {
                setOperator("-");
            }
            else if (keyId === "multiplication") {
                setOperator("*");
            }
            else if (keyId === "division") {
                setOperator("/");
            }
            else if (keyId === "modulo") {
                setOperator("%");
            }
            else if (keyId === "calculate") {
                setOperator("=");
                let result = 0;
                if (operator === "+") {
                    result = firstNumber + secondNumber;
                } else if (operator === "-") {
                    result = firstNumber - secondNumber;
                } else if (operator === "*") {
                    result = firstNumber * secondNumber;
                } else if (operator === "/") {
                    result = firstNumber / secondNumber;
                } else if (operator === "%") {
                    result = firstNumber % secondNumber;
                }
                setScreenValue(result);
                setFirstNumber(result);
                setSecondNumber(0);
                setOperator("");
            }
        }

    };

    console.log({ screenValue, operator, firstNumber, secondNumber });

    return [screenValue, updateScreenValue];
}

function Keypad() {
    const [screenValue, updateScreenValue] = UpdateScreen();
    const checkKeyPressed = (key) => {
        updateScreenValue(key);

    };

    return (
        <>
            <div className="screen">{screenValue}</div>
            <div className="key-row" onClick={checkKeyPressed}>
                <button type="button" id="off" className="key system">AC</button>
                <button type="button" id="reverse" className="key operator">+/-</button>
                <button type="button" id="modulo" className="key system">%</button>
                <button type="button" id="division" className="key operator">÷</button>
                <button type="button" id="seven" className="key number">7</button>
                <button type="button" id="eight" className="key number">8</button>
                <button type="button" id="nine" className="key number">9</button>
                <button type="button" id="multiplication" className="key operator">x</button>
                <button type="button" id="four" className="key number">4</button>
                <button type="button" id="five" className="key number">5</button>
                <button type="button" id="six" className="key number">6</button>
                <button type="button" id="subtraction" className="key operator">-</button>
                <button type="button" id="one" className="key number">1</button>
                <button type="button" id="two" className="key number">2</button>
                <button type="button" id="three" className="key number">3</button>
                <button type="button" id="addition" className="key operator">+</button>
                <button type="button" id="zero" className="key number long">0</button>
                <button type="button" id="decimal" className="key number">.</button>
                <button type="button" id="calculate" className="key operator">=</button>
            </div>
        </>
    )
}


function Calculator() {
    return (
        <>
            <h2>iOS Calculator</h2>
            <div className="wrapper">
                <Keypad />
            </div>
        </>
    )
}

export { Calculator }