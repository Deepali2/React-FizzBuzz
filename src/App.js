import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: 0,
      stringShown: '',
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.fizzBuzz = this.fizzBuzz.bind(this);
  }
  handleAdd() {
    let num = this.state.currentNum;
    let fizzBuzzNum = this.fizzBuzz(num);
    this.setState({ currentNum: this.state.currentNum + 1, stringShown: `${this.state.stringShown} ${fizzBuzzNum}` });
  }
  handleSubtract() {
    if (this.state.currentNum > 0)
      this.setState({ currentNum: this.state.currentNum - 1, stringShown: this.removeLastEle(this.state.stringShown) });
  }
  removeLastEle(str) {
    if (!this.state.stringShown || !str) return;
    let arr = str.split(' ');
    arr.pop();
    return arr.join(' ');
  }

  fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    else return num;
  }
  render() {
    return (
      <div className='App'>
        <div>The numbers are: {this.state.stringShown}</div>
        <div>
          <button onClick={this.handleAdd}>+</button>
          <button onClick={this.handleSubtract}>-</button>
        </div>
      </div>
    )
  }

}

export default App;
