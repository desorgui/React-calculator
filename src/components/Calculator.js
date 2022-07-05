import React from 'react';
import './calculator.css';

const Calculator = () => {
  return (
    <div className="calculatorContainer">
      <div className="gridContainer">
        <ul className="calculatorGrid">
          <li className="gridItem result">0</li>
          <li className="gridItem">AC</li>
          <li className="gridItem">+/-</li>
          <li className="gridItem">%</li>
          <li className="gridItem sign">/</li>
          <li className="gridItem">7</li>
          <li className="gridItem">8</li>
          <li className="gridItem">9</li>
          <li className="gridItem sign">X</li>
          <li className="gridItem">4</li>
          <li className="gridItem">5</li>
          <li className="gridItem">6</li>
          <li className="gridItem sign">-</li>
          <li className="gridItem">1</li>
          <li className="gridItem">2</li>
          <li className="gridItem">3</li>
          <li className="gridItem sign">+</li>
          <li className="gridItem button0">0</li>
          <li className="gridItem">.</li>
          <li className="gridItem sign">=</li>
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
