import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { addPlayers } from '../api'

class TitleForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playerOne: null,
      playerTwo: null
    }

    this.submitHandler = this.submitHandler.bind(this)
  }

  championOneHandler = event => {
    this.setState({
      playerOne: event.target.value
    })
  }

  championTwoHandler = event => {
    this.setState({
      playerTwo: event.target.value
    })
  }

  submitHandler = event => {
    let team1 = this.state.playerOne
    let team2 = this.state.playerTwo
    event.preventDefault()
    let setTeams = this.props.setTeams
    setTeams(team1, team2)
  }

  render () {
    if (this.state.playerOne && this.state.playerTwo) {
      let box = document.getElementById('fight-button-block')
      box.classList.toggle('hidden')
    }
    return (
      <div className="formContainerDiv alagard-text">
        <div className="formBodyBorder alagard-text">
          <div className="formBody alagard-text">
            <Form>
              <h3 className="formTitleText alagard-text">What should the heralds call you?</h3>
              <div className="formFlex alagard-text">
                <h2 className="formlabel alagard-text">Champion One</h2>

                <Form.Group className="formGroup">
                  <Form.Input
                    placeholder='Champion One'
                    name='championOne'
                    onChange={this.championOneHandler}
                  />
                </Form.Group>
              </div>
              <div className="formFlex">
                <h2 className="formlabel alagard-text">Champion Two</h2>
                <Form.Group>
                  <Form.Input
                    placeholder='Champion Two'
                    name='championTwo'
                    onChange={this.championTwoHandler}
                  />
                </Form.Group>
              </div>
              <div onClick={this.submitHandler}>
                <Link to='/game'>
                  <button className='brButton alagard-text'>Fight!</button>
                </ Link>
              </div>
            </Form>
          </div>
          <div id = 'fight-button-block' className = "blocking-box"></div>
        </div>
      </div>
    )
  }
}

export default TitleForm
