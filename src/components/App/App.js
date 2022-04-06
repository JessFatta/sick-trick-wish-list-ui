import React, { Component } from 'react';
import './App.css';
import Card from '../Card'

class App extends Component {
  constructor(){
    super()
    this.state = {
      tricks: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Card />
      </div>
    );
  }
}

export default App;