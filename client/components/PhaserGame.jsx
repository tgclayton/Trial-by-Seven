import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import gameFile from '../components/game'  
import Home from './Home'

class PhaserGame extends Component {

    render() {
    // const { initialize, game } = this.state
    return (
      <div className="home">
        <div className="gameBody">

          <div className="gamePanel">
            <h1 >Champion One</h1>
            <h1>Unit Name</h1>
            <h1>Attack</h1>
            <h1>Health</h1>
            <h1>Actions</h1>
            {/* <h1>Ammo</h1> */}
          </div>
 

      <div>
        <IonPhaser game={gameFile} initialize={true} />
      </div>

          <div className="gamePanel">
            <h1 >Champion One</h1>
            <h1>Unit Name</h1>
            <h1>Attack</h1>
            <h1>Health</h1>
            <h1>Actions</h1>
            {/* <h1>Ammo</h1> */}
          </div>

        </div>
      </div>
    )
  }
}

export default PhaserGame