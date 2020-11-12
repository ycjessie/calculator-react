import React, { Component } from "react";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no1: 0,
      no2: 0,
      mySum: 0,
    };
    this._changeNo1 = this._changeNo1.bind(this);
    this._changeNo2 = this._changeNo2.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input
            type="text"
            value={this.state.no1}
            onChange={this._changeNo1}
          />
          <span>+</span>
          <input
            type="text"
            value={this.state.no2}
            onChange={this._changeNo2}
          />
          <span>=</span>
          <h3>Result: {this.state.mySum}</h3>
        </div>
      </div>
    );
  }
  _changeNo1(e) {
    let newNo1 = +e.target.value;
    this.setState({
      no1: newNo1,
      mySum: newNo1 + this.state.no2,
    });
  }
  _changeNo2(e) {
    let newNo2 = +e.target.value;
    this.setState({
      no2: newNo2,
      mySum: newNo2 + this.state.no1,
    });
  }
}

export default Calculator;
