import React from 'react'

class ChampionOne extends React.Component {
  render() {
    return(
      <div className="gamePanel">
        <h1 className="championName">Champion One</h1>
        <div className="panelHorizontal"></div>
        <h1 className="championUnit">Unit Name</h1>
        <div className="panelHorizontal"></div>
        <h1 className="championAction">Attack:</h1>
        <h1 className="championAction">Health:</h1>
        <h1 className="championAction">Actions:</h1>
        <div className="panelHorizontal"></div>
        {/* <h1 className="championAction">Ammo</h1> */}
        <h1 className="endTurn">End Turn</h1>
    </div>
    )
  }
}

export default ChampionOne