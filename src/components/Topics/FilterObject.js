import React, { Component } from 'react';

class FilterObject extends Component {
  constructor() {
    super()
    this.state = {
      unfilteredArr: [ {name: 'Loras', death: 'By Explosion', age: 24}, {name: 'Jon', revived: 'By Roholor', age: 26}, {name: 'Tyrion', victories: 'Blackwater Bay', age: 30} ],
      userInput: '',
      filteredArr: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  filterArr(arr, input) {
    const newArr = arr.filter(e => e.hasOwnProperty(input));
    this.setState({filteredArr: newArr});
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Filter Object
          <hr/>
          {JSON.stringify(this.state.unfilteredArr)}
        </span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} value={this.state.userInput}/>
        <button className="confirmationButton" onClick={() => this.filterArr(this.state.unfilteredArr, this.state.userInput)}>Submit</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArr)}</span>
      </div>
    )
  }
}

export default FilterObject;