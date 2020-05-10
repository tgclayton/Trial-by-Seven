import React, { Component } from 'react';

//RANDOM PORTRAIT





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
      ' Sadly he bled out soon after.',
      ' Sadly he has stepped through the black gate.',
      ' He left the world alone and screaming.',
      ' Healers have no hope left for him.',
      ' He will recover but is a broken man.',
    ]
        
    function randomPortrait(){
      let randomNumber = Math.floor(Math.random() * Math.floor(3))
      let portraitSrc = 'images/portraits/' + unitType + randomNumber + '.png'
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
          style = 'fought bravely '
          return style
        case hits == 0:
          style = 'also tried to contribute '
          return style
      }
    }
    
    function battleEffectiveness(){
      killTotal = (kills > 0) ? 'and slew ' + kills + ' foes. ': '. '
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
          <div className='idImageRondel'>
           {/* <img src={randomPortrait(unitType)} /> */}
           {randomPortrait()}
          </div>
        </div>
        <div className='udText'>
          <p>
            {name} {battleStyle()}
            {battleEffectiveness()}
            {currentStateGenerator()}
          </p>
        </div>
      </div>
    );
  }
}

export default UnitDisplay;


<img src="images/portraits/"/>