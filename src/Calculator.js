import React, { Component } from "react";
class Calculator extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      no1: '',
      no2: '',
      Result: '',
    };
    this._changeNo1=this._changeNo1.bind(this);
    this._changeNo2=this._changeNo2.bind(this);
    this.calcAdd = this.calcAdd.bind(this);
    this.calcMinus = this.calcMinus.bind(this);
    this.calcMultiply = this.calcMultiply.bind(this);
    this.calcDivide = this.calcDivide.bind(this);

}
  _changeNo1(event) {
   
      //console.log('number1 changed')
    
    let newNo1 = event.target.value;
    if(!isNaN(newNo1)){
        this.setState({
            no1: newNo1,
                //Result: newNo1 + this.state.no2,
            Result:''
        });
        
    }
    
}
  _changeNo2(event) {
   
    //console.log('number2 changed')
    let newNo2 = event.target.value;
    this.setState({
        no2: newNo2,
            //Result: newNo2 + this.state.no1,
        Result:''
    });
    
  }
  calcAdd(event) {
    event.preventDefault();
    this.setState({
      Result: parseInt(this.state.no1) + parseInt(this.state.no2)
    });
  }
  calcMinus(event) {
    event.preventDefault();
    this.setState({
      Result: parseInt(this.state.no1) - parseInt(this.state.no2)
    });
  }
  calcMultiply(event) {
    event.preventDefault();
    this.setState({
      Result: parseInt(this.state.no1) * parseInt(this.state.no2)
    });
  }
  calcDivide(event) {
    event.preventDefault();
    this.setState({
      Result: parseInt(this.state.no1) / parseInt(this.state.no2)
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <form>
            <input
              type="text"
              value={this.state.no1}
              onChange={this._changeNo1}
              placeholder="enter a number"
            />
            <span> </span>
            <input
              type="text"
              value={this.state.no2}
              onChange={this._changeNo2}
              placeholder="enter a number"
            />
            <span>
                <button onClick={this.calcAdd} id="add" className='btn'>+
                </button> <button onClick={this.calcMinus} id="minus" className='btn'> - 
                </button><button onClick={this.calcMultiply} id="multiply" className='btn'> X
                </button>
                <button onClick={this.calcDivide} id="division" className='btn'> /
                </button></span>
                
                
            <h3>Result: {this.state.Result}</h3>
          </form>
        </div>
      </div>
    );
  }
}

export default Calculator;
