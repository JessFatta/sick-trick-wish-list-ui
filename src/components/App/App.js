import React, { Component } from 'react';
import './App.css';
import Card from '../Card'
import Tricks from '../Tricks'

class App extends Component {
  constructor(){
    super()
    this.state = {
      tricks: [
        {id: 1, name: 'tricksss'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;