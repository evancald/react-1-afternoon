import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  solveProb() {
    const reversed = this.state.userInput.toLowerCase().split('').reverse().join('');
    reversed === this.state.userInput.toLowerCase() ? this.setState({palindrome: 'Wow, a palindrome!'}) : this.setState({palindrome: 'Not a palindrome ;_;'})
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
      <h4>Palindrome</h4>
      <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} value={this.state.userInput} />
      <button className="confirmationButton" onClick={() => this.solveProb()}>Submit</button>
      <span className="resultsBox">{JSON.stringify(this.state.palindrome)}</span>
      </div>
    )
  }
}

export default Palindrome;