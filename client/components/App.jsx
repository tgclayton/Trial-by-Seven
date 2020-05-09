import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import Home from './Home'
import PhaserGame from './PhaserGame'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

export default class App extends Component {

    render() {
    // const { initialize, game } = this.state
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/game' component={PhaserGame} />
      </Router>
      )
    }
  }
  