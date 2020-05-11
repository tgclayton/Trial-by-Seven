import React from 'react'

export default class ChampionOne extends React.Component {
  state = {
    championName: 'champName',
    championUnit: 'Active Unit',
    championAttack: '1',
    championHealth: '2',
    championActions: '2',
    info: ''
  }

champName = React.createRef()
champUnit = React.createRef()
champAttack = React.createRef()
champHealth = React.createRef()
champAction = React.createRef()
info = React.createRef()

render () {
  return (
    <div className="gamePanel">
      <h1 className="championName" id="champName" ref={this.champName}>{this.champName.current}</h1>
      <div className="panelHorizontal"></div>
      <h1 className="championUnit" id="champUnit" ref={this.champUnit}>None Selected{this.champUnit.current}</h1>
      <div className="panelHorizontal"></div>
      <h1 className="championAction" id="champAttack" ref={this.champAttack}>Attack: ...{this.champAttack.current}</h1>
      <h1 className="championAction" id="champHealth" ref={this.champHealth}>Health: ...{this.champHealth.current}</h1>
      <h1 className="championAction" id="champAction" ref={this.champAction}>Actions: ... {this.champAction.current}</h1>
      <div className="panelHorizontal"></div>
      {/* <h1 className="championAction">Ammo</h1> */}
      <div className="infoBox" id = "infoWindow" ref = {this.info}>{this.info.current}</div>
      <h1 className="endTurn">End Turn</h1>
    </div>
  )
}
}
