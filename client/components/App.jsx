import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import game from '../components/game' 

export default class App extends Component {

    render() {
    // const { initialize, game } = this.state
    return (
      <div style={{backgroundColor: 'black'}}>
        <h1 style={{color:'blue'}}>IT WORKS</h1>
        <IonPhaser game={game} initialize={true} />
      </div>
    )
  }
}
