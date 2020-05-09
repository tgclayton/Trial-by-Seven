import mapData from '../../server/public/assets/maps/map.json'

var team1 = 'team1'
var team2 = 'team2'
const actors = [{ name: team1, units: [] }, { name: team2, units: [] }]
const teamSize = 5

// function findObstacles (mapArr) {
//   var newArr = mapData.layers[0].data.map((tile, idx) => {
//     if (tile === 10) {
//       mapArr[idx].occupied = true
//       mapArr[idx].occupant = 'obstacle'
//     }
//     return tile
//   })
//   return newArr
// }

export function createMapArray () {
  var mapArr = mapData.layers[0].data.map(tile => {
    if (tile === 10) {
      return {
        occupied: true,
        occupant: 'obstacle'
      }
    } else {
      return {
        occupied: false,
        occupant: null,
        occupantTeam: null
      }
    }
  })
  return mapArr
}

export function addActorsToMapArr (actors, mapArr) {
  let map = mapArr
  actors.forEach(team => {
    team.units.forEach(unit => {
      map[unit.idx].occupied = true
      map[unit.idx].occupant = unit.name
      map[unit.idx].occupantTeam = unit.teamName
    })
  })
  return map
}

export function createActors (a) {
  var actorArr = actors
  let idx = 140
  let team1 = actorArr[0].name
  let team2 = actorArr[1].name
  for (let i = 0; i < teamSize; i++) {
    let it = i + 1
    actorArr[0].units.push({
      teamName: team1,
      name: 'warrior' + it,
      sprite: 'warrior',
      idx: idx + (i * 20),
      actions: 5
    })
    actorArr[1].units.push({
      teamName: team2,
      name: 'enemy' + it,
      sprite: 'enemywarrior',
      idx: idx + (i * 20) + 19,
      actions: 5
    })
  }
  return actorArr
}

// var friend = 'warrior'
// var foe = 'enemy'

// function createActors () {

//   actors.forEach(team => {
//     for (let i=0; i < teamSize; i++) {
//       let it = i + 1
//       team.units.push({
//         name: team.team+it,
//         sprite: team.team,
//         idx:
//       })
//     }
//   })
// }
