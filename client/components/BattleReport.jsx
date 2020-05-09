import React, { Component } from 'react';

class BattleReport extends Component {

  render() {
    return (
      <div className='brMainContainer'>
        <div className='brPanel'>
          <div className='brPanelStroke'>
            <div classname='brTitle'>
              'Title'
            </div>
            <div className='brPlayerOneBlock'>
              'Player one'
            </div>
            <div className='brPlayerTwoBlock'>
              'Player two'
            </div>
            <div className='brButtonBlock'>
              'Buttons'
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BattleReport;