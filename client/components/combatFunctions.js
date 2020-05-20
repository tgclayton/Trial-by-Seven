import { getCoordsFromIndex, getIndexFromCoords } from './game'

export function melee () {
  let neighbours = []
  let attackerCoords = getCoordsFromIndex(this.idx)
  // console.log(attackerCoords)
  for (let i = 0; i < 9; i++) {
    if (i !== 4) {
      let itX = (Math.floor(i / 3) - 1) * 48
      let itY = ((i % 3) - 1) * 48
      let newX = (attackerCoords[0] + itX)
      let newY = (attackerCoords[1] + itY)
      let neighbourIdx = getIndexFromCoords([newX, newY])
      if (newX >= 0 && newX <= 864 && newY >= 0 && newY < 720) { neighbours.push(neighbourIdx) }
    }
  }
  console.log(neighbours)
  return neighbours
}
