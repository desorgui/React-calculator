import React, { PureComponent } from 'react';
import './calculator.css';
import PropTypes from 'prop-types';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: ['0', 'AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='],
    };
  }

  render() {
    const buttonType = 'button';
    const { data } = this.state;
    const { showContent, handler } = this.props;
    return data.map((value, index) => {
      if (index === 0) {
        return <input type={buttonType} readOnly key={`item${index + 1}`} className="gridItem result" value={showContent} />;
      }
      if (value === '÷' || value === '+' || value === 'x' || value === '-' || value === '=') {
        return <input type={buttonType} onClick={handler} key={`button${index + 1}`} className="gridItem sign" value={value} />;
      }
      if (value === 0) {
        return <input type={buttonType} onClick={handler} key={`button${index + 1}`} className="gridItem button0" value={value} />;
      }
      return <input type={buttonType} onClick={handler} key={`button${index + 1}`} className="gridItem" value={value} />;
    });
  }
}

Calculator.propTypes = {
  showContent: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Calculator;
