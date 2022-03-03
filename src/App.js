import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()


    this.state = {
      heartbeat: 10
    }
  }
  render() {
    return (
      <div className="App">
        <h1>the value heartbeat is: {this.state.heartbeat} bpm</h1>
      </div>
    )
  }
}

export default App;
