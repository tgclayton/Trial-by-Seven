import React from 'react'
import { Form } from 'semantic-ui-react'

class TitleForm extends React.Component {
  render() {
    return(
      <div>
        <Form>
          <Form.Group>
            <Form.Input
              label='championOne'
              placeholder='championOne'
              name='championOne'
             />
          </Form.Group>
        </Form>

        {/* <h3>What should the heralds call you?</h3>
        <form className='form' name='champions' method='post'>
          <label>Champion One
            <input type='text' name='championOne'/>
          </label>
          <label>Champion Two
            <input type='text' name='championTwo'/>
          </label>
          <input type='submit' value='submit'/>
        </form> */}
      </div>
    )
  }
}

export default TitleForm