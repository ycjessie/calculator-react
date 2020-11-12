import React, { Component } from "react";
class Calculator extends Component {
  //STEP 2 initial state show 0
  constructor(props) {
    super(props);
    this.state = {
      no1: 0,
      no2: 0,
      mySum: 0,
    };
    //STEP 3 Bind the inputs
    this._changeNo1 = this._changeNo1.bind(this);
    this._changeNo2 = this._changeNo2.bind(this);
  }
  //STEP 4 add two numbers
  _changeNo1(e) {
    let newNo1 = +e.target.value;
    this.setState({
      no1: newNo1,
      mySum: newNo1 + this.state.no2,
    });
  }
  //STEP 4 add two numbers
  _changeNo2(e) {
    let newNo2 = +e.target.value;
    this.setState({
      no2: newNo2,
      mySum: newNo2 + this.state.no1,
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input
            type="text"
            value={this.state.no1}//STEP 2 Show 0
            onChange={this._changeNo1}//line 12 STEP 3 Bind and trigger onChange
          />
          <span>+</span>
          <input
            type="text"
            value={this.state.no2}//STEP 2 Show 0
            onChange={this._changeNo2}//line 12 STEP 3 Bind and trigger onChange
          />
          <span>=</span>
          {/* STEP 2 Show Result */}
          <h3>Result: {this.state.mySum}</h3> 
        </div>
      </div>
    );
  }
  
}

export default Calculator;
