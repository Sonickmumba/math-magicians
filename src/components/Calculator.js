import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [object, setObject] = useState({
    next: null,
    total: '0',
    operation: null,
  });

  const handleClick = (e) => {
    e.preventDefault();
    const { next, total, operation } = calculate(object, e.target.name);

    if (next === null && total === null) {
      setObject({ next, total: '0', operation });
    } else {
      setObject({ next, total, operation });
    }
  };

  const { total, next } = object;
  const btnNames = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  return (
    <div className="calculator-main-container">
      <div className="calculator-title-container">
        <h2 className="calculator-title">Let us do some math!</h2>
      </div>
      <div className="calculator-grid-container">
        { next ? (
          <div className="output-result">
            { next }
          </div>
        ) : (
          <div className="output-result">
            { total }
          </div>
        )}
        { btnNames.map((btnName) => (
          <button
            onClick={handleClick}
            name={btnName}
            type="button"
            className={`btn ${btnName === '0' ? 'zero-button' : ''}
            ${btnName === '=' ? 'button-operation' : ''}
            ${btnName === '÷' ? 'button-operation' : ''}
            ${btnName === 'x' ? 'button-operation' : ''}
            ${btnName === '-' ? 'button-operation' : ''}
            ${btnName === '+' ? 'button-operation' : ''}`}
            key={btnName}
          >
            { btnName }
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
