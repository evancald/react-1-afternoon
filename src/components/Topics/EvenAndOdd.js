import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      userInput: [],
      evenArray: [],
      oddArray: []
    }
  }

  updateInput(value) {
    this.setState({userInput: value});
  }

  assignArrays(arr) {
    const evens = arr.split(',').filter(e => e % 2 === 0);
    const odds = arr.split(',').filter(e => e % 2 !== 0);
    this.setState({evenArray: evens, oddArray: odds, userInput: []});
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(e) => this.updateInput(e.target.value)} value={this.state.userInput} />
        <button className="confirmationButton" onClick={() => this.assignArrays(this.state.userInput) }>Submit</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd;