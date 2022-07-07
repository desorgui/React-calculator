import React, { PureComponent } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import calculate from './components/calculate';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      prevData: {},
      show: '0',
    };
  }

  handler = (event) => {
    const buttonValue = event.target.value;
    const { prevData } = this.state;
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
    this.setState({ prevData: newData, show: btnpress });
  }

  render() {
    const { show } = this.state;
    return (
      <div className="calculatorGrid">
      <Calculator handler={this.handler} showContent={show ? show : '0'} />
      </div>
    );
  }
}

export default App;
