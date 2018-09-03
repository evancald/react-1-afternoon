import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      unfilteredArr: ['willow', 'spruce', 'pine', 'chestnut', 'locust', 'cherry'],
      userInput: '',
      filteredArr: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  solveProb() {
    const newArr = this.state.unfilteredArr.filter(e => e.includes(this.state.userInput));
    this.setState({filteredArr: newArr});
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unfilteredArr)}</span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} value={this.state.userInput} />
        <button className="confirmationButton" onClick={() => this.solveProb()}>Submit</button>
        <span className="resultsBox filterStringPB">{JSON.stringify(this.state.filteredArr)}</span>
      </div>
    )
  }
}

export default FilterString;