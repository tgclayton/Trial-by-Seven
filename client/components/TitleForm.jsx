import React from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { addPlayers } from '../api'

class TitleForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      championOne: '',
      championTwo: ''
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler = event => {
    event.preventDefault()
    addPlayers(this.state)
    // addPlayers(this.state.championOne)
    // addPlayers(this.state.championTwo)
  }
    // button leads you to phaser game page
  


  render() {
    return(
      <div className='form'>
        <Form>
        <h3>What should the heralds call you?</h3>
          <Form.Group>
            <Form.Input
              label='championOne'
              placeholder='championOne'
              name='championOne'
              onChange={event => this.setState({championOne: event.target.value })}
             />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label='championTwo'
              placeholder='championTwo'
              name='championTwo'
              onChange={event => this.setState({championTwo: event.target.value })}
             />
          </Form.Group>
          <Form.Button onClick={this.submitHandler}><Link to='/game'>Fight</Link></Form.Button>
          
        </Form>
      </div>
    )
  }
}

export default TitleForm


{/* <Link to='/Session' >
<button className='mainButton' >PROCEED</button>
</Link> */}