import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import gameFile from '../components/game'
import Home from './Home'
import { Link } from 'react-router-dom'

import ChampionOne from './ChampionOne'
import ChampionTwo from './ChampionTwo'
import EndGame from './EndGame'

class PhaserGame extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      winner: null
      
    }
  }

 winner = React.createRef()

  render() {
    // const { initialize, game } = this.state
    return (
      <div className="home">
        <div className="gameWhole">
        <div className="gameBody">
         <ChampionOne />
        <div className="gameDiv">
          <IonPhaser game={gameFile} initialize={true} />  
          {/* <div className='hide-show' style ={"display: none; position: absolute;"} ></div>   */}
          <div id = 'win' className='endgame-display' ref ={this.winner}>
            {
              this.state.winner
              ?
              <EndGame winner={this.winner.current}/> 
              :
              ''
            }
          </div>
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
