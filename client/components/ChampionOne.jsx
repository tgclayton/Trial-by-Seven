import React from 'react'
import request from 'superagent'


export default class ChampionOne extends React.Component {

  state = {
    championName: 'champName',
    championUnit: 'Active Unit',
    championAttack: '1',
    championHealth: '2',
    championActions: '2',

  }
  

champName = React.createRef()
champUnit = React.createRef()
champAttack = React.createRef()
champHealth = React.createRef()
champAction = React.createRef()

  render() {
    return(
      <div className="gamePanel">
        <h1 className="championName" id="champName" ref={this.champName}>Loading...{this.champName.current}</h1>
        <div className="panelHorizontal"></div>
        <h1 className="championUnit" id="champUnit" ref={this.champUnit}>press "Y" to continue{this.champUnit.current}</h1>
        <div className="panelHorizontal"></div>
        <h1 className="championAction" id="champAttack" ref={this.champAttack}>Attack: {this.champAttack.current}</h1>
        <h1 className="championAction" id="champHealth" ref={this.champHealth}>Health: {this.champHealth.current}</h1>
        <h1 className="championAction" id="champActions" ref={this.champAction}>Actions: {this.champAction.current}</h1>
        <div className="panelHorizontal"></div>
        {/* <h1 className="championAction">Ammo</h1> */}
          <div className="instructionsBox">
              <h1> How to play</h1>
          <h2> Move your units </h2>

          </div>
        <h1 className="endTurn">End Turn</h1>
    </div>
    )
  }
}
