// import React from 'react'
// import { mount } from 'enzyme'
import { createActors, createActors2 } from '../client/components/mapfunctions'
// import App from '../client/components/App'

// test.skip('<App />', () => {
//   const expected = 'React development has begun!'
//   const wrapper = mount(<App />)
//   expect(wrapper.text()).toMatch(expected)
// })

test('Create actors functions should produce identical results', () => {
  const team1 = 'testTeam1'
  const team2 = 'testTeam2'
  const expected = createActors(team1, team2)
  const actual = createActors2(team1, team2)
  console.log('Original produces:', expected)
  console.log('New produces:', actual)
  expected(actual).toMatch(expected)
})
