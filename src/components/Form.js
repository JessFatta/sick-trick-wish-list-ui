import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      link: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitTrick = (event) => {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addTrick(newTrick)
  }

  clearInputs = () => {
    this.setState({stance: '', trick: '', obstacle: '', link: ''})
  }


  render() {
    return (
      <form>
          <select className='stance' name='stance' onChange={(event) => this.handleChange(event)}>
            <option value='' default value>Choose your Stance</option>
            <option value='regular'>Regular</option>
            <option value='switch'>Switch</option>
          </select>
        <input
          className='name'
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
          <select className='obstacle' name='obstacle' onChange={(event) => this.handleChange(event)}>
            <option value='' default value>Choose your Obstacle</option>
            <option value='Flatground'>Flatground</option>
            <option value='Ledge'>Ledge</option>
            <option value='Rails'>Rails</option>
            <option value='Stairs'>Stairs</option>
            <option value='Pool'>Pool</option>
          </select>
        <input
          className='tutorial'
          type='text'
          placeholder='Link to tutorial'
          name='tutorial'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />
      <button onClick={(event) => this.submitTrick(event)}>send it</button>
      </form>
    )
  }

}

export default Form