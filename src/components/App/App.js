import React, { Component } from 'react';
import './App.css';
import Card from '../Card'
import Tricks from '../Tricks'
import getData from '/Users/jessicafatta/turing/3module/midmod/sick-trick-wish-list-ui/src/apiCalls.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    getData()
    .then(data => this.setState({tricks: data}))
    
    //this.setState({tricks: })

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