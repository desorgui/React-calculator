import React, { useState } from 'react';
import Calculator from '../Calculator';
import calculate from '../calculate';

const CalculatorPage = () => {
  const [data, setData] = useState({ prevData: {}, show: '0' });

  const handler = (event) => {
    const buttonValue = event.target.value;
    const { prevData } = data;
    const newData = calculate(prevData, buttonValue);
    const { total, next, operation } = newData;
    let btnpress = '';
    if (total) {
      btnpress += ' '.concat(total);
    }
    if (operation) {
      btnpress += ' '.concat(operation);
    }
    if (next) {
      btnpress += ' '.concat(next);
    }
    let show = '0';
    show = btnpress;
    setData({ prevData: newData, show });
  };

  const { show } = data;

  return (
    <>
      <div className="calculatorPage">
        <h3>Let&apos;s do Some Math!</h3>
        <div className="calculatorGrid">
          <Calculator handler={handler} showContent={show} />
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;
