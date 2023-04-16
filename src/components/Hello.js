import React, { useState, useEffect } from 'react';

/* 
    useState hook example
    Click on button to increase counter by 1 every time user press button
*/

function UseStateFunction() {
    const [counter, setCounter] = useState(0);

    const incCounter = () => {
        //useState hook
        setCounter(counter + 1);
    };


    return (
        <>
            <button onClick={incCounter}>UseState</button>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}></div>
            <div id='counter'>Counter (useState hook): {counter}</div>
        </>
    );
}


function UseEffectFunction() {
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        document.getElementById('counter2').textContent = `Counter (useEffect hook): ${counter2}`;
    }, [counter2]);
    //Increase by 1 every time user press button
    const incCounter2 = () => {
        setCounter2(counter2 + 1);
    };


    return (
        <>
            <button onClick={incCounter2}>UseEffect</button>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}></div>
            <div id='counter2'></div>
        </>
    );
}
function UseEffectAutomatic() {
    const [counter3, setCounter3] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter3(counter3 => counter3 + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}></div>
            <div id='counter3'>Counter (useEffect hook with setInterval): {counter3}</div>
        </>
    );
}

//React onclick event
function OnClickEvent() {
    const alertUsingFunction = () => {
        alert("Second button clicked");
    };
    const alertUsingFunctionWithArg = (message) => {
        alert(message);
    };
    const alertUsingFunctionWithProp = (message) => {
        alert(message.detail);
    };
    return (
        <>
            <h5>OnClick events</h5>
            <button onClick={() => { alert("First button clicked") }}>Normal alert</button>
            <button onClick={() => { alertUsingFunction() }}>Alert using function</button>
            <button onClick={() => { alertUsingFunctionWithArg("Third button clicked") }}>Alert using function with argument</button>
            <button onClick={() => { alertUsingFunctionWithProp({ detail: "Fourth button clicked" }) }}>Alert using function with property</button >
        </>
    );
}

//React if else
function IsBlack() {
    return <div>This is black</div>
}
function IsWhite() {
    return <div>This is white</div>
}
function IfElsePractice() {
    const [color, setColor] = useState("black");
    let colorState;
    if (color === "black") {
        colorState = <IsBlack />
    }
    else {
        colorState = <IsWhite />
    }
    return (
        <>
            <h4>If else with useState practice</h4>
            <button onClick={() => setColor(color === "black" ? "white" : "black")}>Change color</button>
            {colorState}
        </>
    );
}
export { UseStateFunction, UseEffectFunction, UseEffectAutomatic, OnClickEvent, IfElsePractice };