import React from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class TitleForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      championOne: '',
      championTwo: ''
    }

  }

  submitHandler(){
    // console.log(this.state.championOne)
  }
    // button leads you to phaser game page
  


  render() {
    return(
      <div>
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
          <Form.Button onClick={this.submitHandler}>Submit</Form.Button>
          <Link to='/game'>Temporary Link to PhaserGame</Link>
        </Form>
      </div>
    )
  }
}

export default TitleForm