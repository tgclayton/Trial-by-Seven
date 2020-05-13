import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UnitDisplay from './UnitDisplay'

// Unit array drilled to object
const units = [{
  class: 'warrior',
  name: 'Uno',
  survived: false,
  woundsTaken: 3,
  woundsGiven: 2,
  kills: 1
},
{
  class: 'warrior',
  name: 'Secundus',
  survived: true,
  woundsTaken: 0,
  woundsGiven: 5,
  kills: 1
},
{
  class: 'rogue',
  name: 'Tertius',
  survived: true,
  woundsTaken: 1,
  woundsGiven: 3,
  kills: 1
},
{
  class: 'rogue',
  name: 'Quartus',
  survived: false,
  woundsTaken: 2,
  woundsGiven: 6,
  kills: 2
},
{
  class: 'archer',
  name: 'Quintus',
  survived: true,
  woundsTaken: 2,
  woundsGiven: 8,
  kills: 2
},
{
  class: 'spear',
  name: 'Sextus',
  survived: false,
  woundsTaken: 4,
  woundsGiven: 3,
  kills: 1
},
{
  class: 'sentinel',
  name: 'Septimus',
  survived: true,
  woundsTaken: 0,
  woundsGiven: 0,
  kills: 0
}
]

// DYNAMIC TEXT
var resultsFlavour = ''

// FLAVOUR TEXT COMPILERS
const titleText = 'Silence descends upon the blood soaked field, the gods have spoken.'

class BattleReport extends Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: this.props.winners,
      teamOne: this.props.team1,
      teamTwo: this.props.team2,
      unitsVictorious: this.props.actors[0].units,
      unitsDefeated: this.props.actors[1].units
    }

    this.winnerAssignment = this.winnerAssignment.bind(this)
  }

  winnerAssignment (playerNumber) {
    resultsFlavour = (playerNumber === this.winner) ? ' emerged victorious.' : ' tastes bitter defeat.'
    return resultsFlavour
  }

  render () {
    console.log(this.state.unitsVictorious)
    console.log(this.state.unitsDefeated)

    let resultCallout = {
      playerOne: this.state.teamOne + this.winnerAssignment(1),
      playerTwo: this.state.teamTwo + this.winnerAssignment(2)
    }

    return (
      <div className='home brMainContainer'>
        <div className='brPanel'>
          <div className='brPanelStroke'>
            <div className='brTitle'>
              {titleText}
            </div>
            <div className='brContentContainer'>
              <div className='brPlayerBlock'>
                <div className='brBlockPlayerName'>
                  {resultCallout.playerOne}
                </div>
                <div className='brUnitContainer'>
                  {this.state.unitsVictorious.map((unit, index) => {
                    return (
                      <div key={index}>
                        <UnitDisplay portrait = {unit.portrait} type={unit.class} name={unit.name} survived={unit.dead} hits={unit.woundsGiven} kills={unit.kills}/>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='brPlayerBlock'>
                <div className='brBlockPlayerName'>
                  {resultCallout.playerTwo}
                </div>
                <div className='brUnitContainer'>
                  {this.state.unitsDefeated.map((unit, index) => {
                    return (
                      <div key={index}>
                        <UnitDisplay portrait = {unit.portrait} type={unit.class} name={unit.name} survived={unit.dead} hits={unit.woundsGiven} kills={unit.kills}/>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='brButtonBlock'>
              <Link to='/' >
                <button className='brButton'>New Game</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default BattleReport
