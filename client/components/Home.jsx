import React from 'react'
import Description from './Description'
import TitleForm from './TitleForm'

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        {console.log(this.props.setTeams)}
        <Description />
        <TitleForm setTeams = {this.props.setTeams}/>
      </div>
    )
  }
}

export default Home
