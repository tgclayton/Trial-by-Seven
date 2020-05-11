import React from 'react'

class EndGame extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winner: this.props.winner
    }
  }
  render() {
    return(
      <div className='endgame-conatiner'>
        <h1>{this.state.winner} wins</h1>
      </div>
    )
  }
}

export default EndGame