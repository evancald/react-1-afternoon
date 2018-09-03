import React, { Component } from 'react';

class Sum extends Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      total: null
    }
  }

  updateNum1(val) {
    this.setState({num1: val});
  }

  updateNum2(val) {
    this.setState({num2: val});
  }

  solveProb() {
    const sum = Number(this.state.num1) + Number(this.state.num2);
    this.setState({total: sum})
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={(e) => this.updateNum1(e.target.value)} value={this.state.num1} />
        <input className="inputLine" onChange={(e) => this.updateNum2(e.target.value)} value={this.state.num2} />
        <button className="confirmationButton" onClick={() => this.solveProb()}>Add those bad boys up</button>
        <span className="resultsBox SumRB">{JSON.stringify(this.state.total)}</span>
      </div>
    )
  }
}

export default Sum;