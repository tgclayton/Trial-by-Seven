import React from 'react'

class EndGame extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: this.props.winner
    }
  }
  render () {
    return (
      <div id = 'winBox'className='endgame-container hidden'>
        <h1 id = 'endRes'>{this.state.winner} wins</h1>
      </div>
    )
  }
}

export default EndGame
