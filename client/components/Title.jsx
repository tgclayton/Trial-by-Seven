import React from 'react'
import Description from './Description'
import TitleForm from './TitleForm'

class Title extends React.Component {
  render() {
    return(
      <div>
        <Description />
        <TitleForm />
      </div>
    )
  }
}

export default Title