import React, { Component } from 'react';
import Button from './button';

export default class ButtonGroup extends Component {
  state = {
    result: 0,
    current: 0,
    display: 0,
    operator: ''
  };

  render() {
    return (
      <section className="calculatorSection" >

        <section className="displaySection">{this.state.display}</section>

        <section className="numbersSection">
          {this.makeNumberButtons(9)}
          <Button onNumber={this.handleNumberInput} type="clear" value="c"></Button>
          <Button onNumber={this.handleNumberInput} type="equals" value="="></Button>
          <Button onNumber={this.handleNumberInput} type="number" value={0} key={0}></Button>
        </section>

        <section className="operatorsSection">
          {this.makeOperatorButtons()}
        </section>

      </section >

    );
  }

  makeNumberButtons(count) {
    return Array(count).fill().map(() => {
      return (
        <Button
          onNumber={this.handleNumberInput}
          type="number"
          value={count}
          key={count--}
        />
      )
    });
  }

  makeOperatorButtons() {
    return ['/', '*', '-', '+']
      .map(operator => {
        return <Button onNumber={this.handleNumberInput} type="operator" value={operator}></Button>
      });
  }

  // handleNumberInput(props) {
  handleNumberInput = ({ type, value }) => {
    console.log('number', type, value);
    // console.log('props', props);

    let { result, current, display, operator } = this.state;

    switch (type) {
      case 'number':
        current = current * 10 + value;
        display = current;
        this.setState({ current, display });
        break;

      case 'operator':
        if (!operator) {
          result = current;
          operator = value;
        } else {
          display = result = operate(result, current, operator);

        }
        current = 0;
        this.setState({ result, current, display, operator: value });

        break;

      case 'equals':
        display = result = operate(result, current, this.state.operator);
        operator = '';
        current = 0;
        this.setState({ result, current, display });
        break;

      case 'clear':
        result = current = display = 0;
        this.setState({ result, current, display });
        break;
      default:
        break;
    }

    function operate(a, b, op) {
      if (op === '-') return a - b;
      if (op === '*') return a * b;
      if (op === '/') return a / b;
      // if (op === '+') return a + b;
      return a + b;
    }
    // current result
    // 12

  }


}