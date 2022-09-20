import React from 'react';
import '../App.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-grid-container">
        <div className="output-result">0</div>
        <button type="button" className="btn">AC</button>
        <button type="button" className="btn">+/-</button>
        <button type="button" className="btn">%</button>
        <button type="button" className="operation">÷</button>
        <button type="button" className="btn">7</button>
        <button type="button" className="btn">8</button>
        <button type="button" className="btn">9</button>
        <button type="button" className="operation">×</button>
        <button type="button" className="btn">4</button>
        <button type="button" className="btn">5</button>
        <button type="button" className="btn">6</button>
        <button type="button" className="operation">-</button>
        <button type="button" className="btn">1</button>
        <button type="button" className="btn">2</button>
        <button type="button" className="btn">3</button>
        <button type="button" className="operation">+</button>
        <button type="button" className="btn-to-span-two">0</button>
        <button type="button" className="btn">.</button>
        <button type="button" className="operation">=</button>
      </div>
    );
  }
}

export default Calculator;
