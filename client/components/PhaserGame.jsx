import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import gameFile from '../components/game'  
import Home from './Home'
import { Link } from 'react-router-dom'

import ChampionOne from './ChampionOne'
import ChampionTwo from './ChampionTwo'

class PhaserGame extends Component {

    render() {
    // const { initialize, game } = this.state
    return (
      <div className="home">
        <div className="gameWhole">
        <div className="gameBody">
         <ChampionOne />
        <div className="gameDiv">
          <IonPhaser game={gameFile} initialize={true} />    
        </div>
        <ChampionTwo />
        </div>
        <div className="endGameDiv">
          <Link to='/report'><div className="endGameButton"><h1 className="endGameText">End Game</h1></div></Link>
        </div>
        </div>
        </div>
    )
  }
}

export default PhaserGame