import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Home'
import PhaserGame from './PhaserGame'
import BattleReport from './BattleReport'

export default class App extends Component {
  constructor () {
    super()
    this.setTeams = this.setTeams.bind(this)
  }
state = {
  team1: null,
  team2: null
}
setTeams (team1, team2) {
  this.setState({
    team1: team1,
    team2: team2
  })
}

// team1 = {this.state.team1} team2 = {this.state.team2}
render () {
  // const { initialize, game } = this.state
  return (
    <Router>
      <Route exact path='/' render={() => <Home setTeams = {this.setTeams} />} />
      <Route exact path='/game' component={() => <PhaserGame team1 = {this.state.team1} team2 = {this.state.team2}/>} />
      <Route exact path='/report' component={BattleReport} />
    </Router>
  )
}
}
