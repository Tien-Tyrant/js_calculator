import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formula: '',
      result: 0,
    }

    this.addToFormula = this.addToFormula.bind(this);
  }

  buttons = [
    { id: 'clear', value: 'AC', display: 'AC', styleClass: 'jumbo' },
    { id: 'divide', value: '/', display: '/', styleClass: 'operator' },
    { id: 'multiply', value: '*', display: 'x', styleClass: 'operator' },
    { id: 'seven', value: '7', display: '7' },
    { id: 'eight', value: '8', display: '8' },
    { id: 'nine', value: '9', display: '9' },
    { id: 'subtract', value: '-', display: '-', styleClass: 'operator' },
    { id: 'four', value: '4', display: '4' },
    { id: 'five', value: '5', display: '5' },
    { id: 'six', value: '6', display: '6' },
    { id: 'add', value: '+', display: '+' , styleClass: 'operator'},
    { id: 'one', value: '1', display: '1' },
    { id: 'two', value: '2', display: '2' },
    { id: 'three', value: '3', display: '3' },
    { id: 'zero', value: '0', display: '0', styleClass: 'jumbo' },
    { id: 'decimal', value: '.', display: '.' },
    { id: 'equals', value: '=', display: '=' },
  ]

  addToFormula(value) {
    if (value === "AC") {
      this.setState({
        formula: '',
        result: 0
      })
      return;
    }

    if (value === '=') {
      if (this.state.formula !== '' && this.state.formula.indexOf('=') < 0) {
        this.setState(state => ({
          formula: state.formula + '=' + eval(state.formula)
        }))

      }
      return;
    }

    this.setState(state => ({
      formula: state.formula + value,
      result: value
    }))
  }

  render() {
    return (
      <div id='app'>
        <div className='calculator'>
          <div className='formula'>{this.state.formula}</div>

          <div id="display" className='result'>{this.state.result}</div>
          <div>
            {this.buttons.map(button => <button className={button.styleClass} id={button.id} value={button.value} onClick={(e) => this.addToFormula(button.value)}>{button.display}</button>)}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
