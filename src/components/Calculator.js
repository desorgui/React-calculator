import React from 'react';
import './calculator.css';
import PropTypes from 'prop-types';

const Calculator = (props) => {
  const data = ['0', 'AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const buttonType = 'button';
  const { showContent, handler } = props;
  return data.map((value, index) => {
    if (index === 0) {
      return <input type={buttonType} role="result-show" readOnly key={`item${index + 1}`} className="gridItem result" value={showContent} />;
    }
    if (value === '÷' || value === '+' || value === 'x' || value === '-' || value === '=') {
      return <button type={buttonType} onClick={handler} key={`button${index + 1}`} className="gridItem sign" >{value}</button>;
    }
    if (value === 0) {
      return <button type={buttonType} onClick={handler} key={`button${index + 1}`} className="gridItem button0" >{value}</button>;
    }
    return <button type={buttonType} onClick={handler} key={`button${index + 1}`} className="gridItem">{value}</button>;
  });
};

Calculator.propTypes = {
  showContent: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Calculator;
