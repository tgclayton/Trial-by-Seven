import React, { Component } from 'react';

class UnitDisplay extends Component {
  render() {
    
    const unitType = this.props.type
    const name = this.props.name
    const survived = this.props.survived
    const hits = this.props.hits
    const kills = this.props.kills

    var style = ''
    var killTotal = ''

    const currentState = [
      ' He lives to fight again.',
      ' He will see another sunrise.',
      ' He lives to tell the tale.',
      ' He is also still drunk.',
      ' Will have nightmares for years.',
      ' Sadly he took a wound and bled out soon after.',
      ' He was struck and has stepped through the black gate.',
      ' He was mortally wounded and left the world alone and screaming.',
      ' He took a cruel cut and healers have no hope left for him.',
      ' He cracked under the strain and is now a broken man.',
    ]

    function nameCompiler(){
      let compiledName = name + ' the ' + unitType
      return compiledName
    }
        
    function randomPortrait(){
      // let randomNumber = Math.floor(Math.random() * Math.floor(3))
      let randomFloat = Math.random() * (3 - 1) + 1
      let randomInt = Math.round(randomFloat)

      let portraitSrc = 'images/portraits/' + unitType + randomInt + '.png'
      return portraitSrc
    }

    function battleStyle(){
      switch (true) {
        case hits >= 8:
          style = ' bathed in blood ';
          return style
        case hits >= 4:
          style = ' struck terror ';
          return style
        case hits >= 1:
          style = ' fought bravely '
          return style
        case hits == 0:
          style = ' also tried to contribute. '
          return style
      }
    }
    
    function battleEffectiveness(){
      killTotal = (kills > 0) ? 'and slew ' + kills + ' foes. ': ' '
      return killTotal
    }

    function currentStateGenerator(){
      //assign random array key based on result
      let min = (survived) ? 0 : 5
      let max = (survived) ? 4 : 9

      let stateIndexFloat = Math.random() * (max - min) + min
      let stateIndexInt = Math.round(stateIndexFloat)

      let currentStateText = currentState[stateIndexInt]
      return currentStateText
    }
    
    return (
      <div className='udUnitContainer'>
        <div className='udImageContainer'>
          <div className='udImageRondel'>
           <img className = 'udPortrait'src={randomPortrait()} />
          </div>
        </div>
        <div className='udText'>
          <p>
            {nameCompiler()}
            {battleStyle()}
            {battleEffectiveness()}
            {currentStateGenerator()}
          </p>
        </div>
      </div>
    );
  }
}

export default UnitDisplay;