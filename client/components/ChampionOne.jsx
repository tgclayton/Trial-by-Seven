import React from 'react'
export var C1context
export class ChampionOne extends React.Component {
  state = {
    championName: 'Champion Name',
    championUnit: 'Active Unit',
    championAttack: '1',
    championHealth: '2',
    championActions: '2',

  }
  C1context = this

  render() {
    return(
      <div className="gamePanel">
        <h1 className="championName">{this.state.championName}</h1>
        <div className="panelHorizontal"></div>
    <h1 className="championUnit">{this.state.championUnit}</h1>
        <div className="panelHorizontal"></div>
        <h1 className="championAction">Attack: {this.state.championAttack}</h1>
        <h1 className="championAction">Health: {this.state.championHealth}</h1>
        <h1 className="championAction">Actions: {this.state.championActions}</h1>
        <div className="panelHorizontal"></div>
        {/* <h1 className="championAction">Ammo</h1> */}
        <h1 className="endTurn">End Turn</h1>
    </div>
    )
  }
}
