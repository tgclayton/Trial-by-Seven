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
      <div className="formBodyBorder">
      <div className="formBody">
        <Form>
            <h3 className="formTitleText">What should the heralds call you?</h3>
            <div className="formFlex">
              <h2>Champion one</h2>
          <Form.Group className="formGroup">
            <Form.Input
              placeholder='championOne'
              name='championOne'
              onChange={event => this.setState({championOne: event.target.value })}
             />
          </Form.Group>
          </div>
            <div className="formFlex">
              <h2>Champion Two</h2>
          <Form.Group>
            <Form.Input
              placeholder='championTwo'
              name='championTwo'
              onChange={event => this.setState({championTwo: event.target.value })}
                />
          </Form.Group>
            </div>
          <Form.Button onClick={this.submitHandler}>Submit</Form.Button>
          <Link to='/game'>Temporary Link to PhaserGame</Link>
        </Form>
      </div>
      </div>
    )
  }
}

export default TitleForm