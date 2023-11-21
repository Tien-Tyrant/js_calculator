import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formula: '',
      result: '0',
    }

    this.addToFormula = this.addToFormula.bind(this);
  }

  buttons = [
    { id: 'clear', value: 'AC', display: 'AC', styleClass: 'jumbo', isOperator: false },
    { id: 'divide', value: '/', display: '/', styleClass: 'operator', isOperator: true },
    { id: 'multiply', value: '*', display: 'X', styleClass: 'operator', isOperator: true },
    { id: 'seven', value: '7', display: '7', isOperator: false },
    { id: 'eight', value: '8', display: '8', isOperator: false },
    { id: 'nine', value: '9', display: '9', isOperator: false },
    { id: 'subtract', value: '-', display: '-', styleClass: 'operator', isOperator: true },
    { id: 'four', value: '4', display: '4', isOperator: false },
    { id: 'five', value: '5', display: '5', isOperator: false },
    { id: 'six', value: '6', display: '6', isOperator: false },
    { id: 'add', value: '+', display: '+', styleClass: 'operator', isOperator: true },
    { id: 'one', value: '1', display: '1', isOperator: false },
    { id: 'two', value: '2', display: '2', isOperator: false },
    { id: 'three', value: '3', display: '3', isOperator: false },
    { id: 'zero', value: '0', display: '0', styleClass: 'jumbo', isOperator: false },
    { id: 'decimal', value: '.', display: '.', isOperator: false },
    { id: 'equals', value: '=', display: '=', isOperator: false },
  ]


  addToFormula(id) {
    const button = this.buttons.find(b => b.id === id);

    if (id === "clear") {
      this.setState({
        formula: '',
        result: '0'
      })
      return;
    }

    if (id === 'equals') {
      if (this.state.formula !== '' && !this.hasEqualOperator()) {
        this.setState(state => {
          const formulaResult = eval(state.formula);
          return {
            formula: `${state.formula}=${formulaResult}`,
            result: `${formulaResult}`
          }
        })
      }
      return;
    }

    if (this.hasEqualOperator()) {
      if (button.isOperator) {
        this.setState(state => ({
          formula: `${state.result}${button.value}`,
          result: button.display
        }));
      }
      else {
        if (id === 'decimal') {
          this.setState({
            formula: `0.`,
            result: button.display
          })
        } else {
          this.setState({
            formula: `${button.value}`,
            result: button.display
          });
        }
      }
      return;
    }

    this.setState(state => ({
      formula: `${state.formula}${button.value}`,
      result: button.display
    }))
  }

  hasEqualOperator() {
    return !(this.state.formula.indexOf('=') < 0)
  }

  render() {
    return (
      <div id='app'>
        <div className='calculator'>
          <div className='formula'>{this.state.formula}</div>

          <div id="display" className='result'>{this.state.result.trim()}</div>
          <div>
            {this.buttons.map(button => <button className={button.styleClass} id={button.id} value={button.value} onClick={(e) => this.addToFormula(button.id)}>{button.display}</button>)}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
