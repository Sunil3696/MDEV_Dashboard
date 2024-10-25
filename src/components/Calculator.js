import React, { useState } from 'react';
import '../styles/Calculator.css'; 

const Calculator = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState(null);


    //handling calculations
    const handleCalculation = (operation) => {
        let res;
        switch (operation) {
            case 'add':
                res = num1 + num2;
                break;
            case 'subtract':
                res = num1 - num2;
                break;
            case 'multiply':
                res = num1 * num2;
                break;
            case 'divide':
                res = num1 / num2;
                break;
            default:
                break;
        }
        setResult(res);
    };


    //calculation components
    return (
        <div className="calculator">
            <h2>Simple Calculator</h2>
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <div className="buttons">
                <button onClick={() => handleCalculation('add')}>+</button>
                <button onClick={() => handleCalculation('subtract')}>-</button>
                <button onClick={() => handleCalculation('multiply')}>*</button>
                <button onClick={() => handleCalculation('divide')}>/</button>
            </div>
            {result !== null && <h3>Result: {result}</h3>}
        </div>
    );
};

export default Calculator;
