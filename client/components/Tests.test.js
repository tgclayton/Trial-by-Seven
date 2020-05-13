// import Phaser from 'phaser'
// import { getCoordsFromIndex } from './game'

test('Everything is fine', () => {
  expect(true).toBeTruthy()
})

// Just testing idea of pasting functions into Tests.test.js
test('getCoords returns an array of the correct x and y values', () => {
  //arrange
    const idx = 2
  //act
    const coords = getCoordsFromIndex(2)
    // console.log(coords)
  //assert
    // expect(coords[0]).toBe(96)
    // expect(coords[1]).toBe(0)
    expect(coords).toEqual(expect.arrayContaining([96,0]))
})



function getCoordsFromIndex (idx) {
  var x = (idx % 20) * 48
  var y = (Math.floor(idx / 20)) * 48
  return [x, y]
}