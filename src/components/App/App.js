import React, { Component } from 'react';
import './App.css';
import Card from '../Card'
import Tricks from '../Tricks'
import Form from '../Form'
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
  }

  addTrick = (newTrick) => {
    this.setState({tricks: [...this.state.tricks, newTrick]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;