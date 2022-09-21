import React from 'react';
import '../App.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      total: '0',
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    const { next, total, operation } = calculate(this.state, e.target.name);

    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  };

  render() {
    const { total, next } = this.state;
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
            onClick={(e) => this.handleClick(e)}
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
    );
  }
}

export default Calculator;
