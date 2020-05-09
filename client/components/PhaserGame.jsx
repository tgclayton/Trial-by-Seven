import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import gameFile from '../components/game'  
import Home from './Home'

class PhaserGame extends Component {

    render() {
    // const { initialize, game } = this.state
    return (
      <div>
        <h1 style={{color:'blue'}}>IT WORKS</h1>
        <IonPhaser game={gameFile} initialize={true} />
      </div>
    )
  }
}

export default PhaserGame