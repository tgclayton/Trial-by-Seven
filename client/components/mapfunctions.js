import mapData from '../../server/public/assets/maps/finalmap.json'
import { melee, spear } from './combatFunctions'
var names = ['Euvrouin', 'Simond', 'Parsival', 'Leofrick', 'Garret', 'Uthbert', 'Ulfrik', 'Gauward', 'Grim', 'Thorvald', 'Roland', 'Nieles', 'Berrick', 'Harlaw', 'Ralf', 'Albrecht', 'Giliam', 'Aethelwulf', 'Brand', 'Bjorn', 'Helmaer', 'Aenfin', 'Lambert', 'Ardulf', 'Lany', 'Elwic', 'Ebehrt', 'Edric', 'Piersym', 'Georguy', 'Peregrine', 'Grewill']

var portraitSelect = {
  swordsman: [1, 2, 3],
  scout: [1, 2, 3],
  spearman: [1, 2, 3],
  heavy: [1, 2, 3]
}

var team1Name = 'hardOne' // equal the name of champion
var team2Name = 'hardTwo' // equal the name of 2nd champion
// var team1Name = 'team1' // equal the name of champion
// var team2Name = 'team2' // equal the name of 2nd champion
var team1Units = ['swordsman', 'heavy', 'swordsman', 'scout', 'spearman']
var team2Units = ['scout', 'scout', 'swordsman', 'spearman', 'heavy']
const actors = [{ name: team1Name, units: [] }, { name: team2Name, units: [] }]

// export function nameFinder1 () {
//   // request.get('/api/v1/players')
//   // .then(res => {
//   //  return team1Name = res.body.player[0].playerOne
//   // })
//   return 'team2'
// }

// export function nameFinder2 () {
//   // request.get('/api/v1/players')
//   // .then(res => {
//   //   team2Name = res.body.player[0].playerTwo
//   //   return team2Name
//   // })
//   return 'team1'
// }

export const classes = {
  scout: {
    damage: 10,
    class: 'scout',
    spriteType: 'scout',
    actions: 8,
    health: 20
  },
  archer: {
    damage: 10,
    class: 'archer',
    spriteType: 'archer',
    actions: 5,
    health: 10,
    ammo: 5
  },
  spearman: {
    damage: 15,
    class: 'spearman',
    spriteType: 'spear',
    actions: 6,
    health: 30
  },
  heavy: {
    damage: 20,
    class: 'heavy',
    spriteType: 'heavy',
    actions: 5,
    health: 50
  },
  swordsman: {
    damage: 25,
    class: 'swordsman',
    spriteType: '2hand',
    actions: 6,
    health: 40
  }
}
var teamSize = 5

export function createMapArray () {
  var mapArr = mapData.layers[0].data.map(tile => {
    if (tile === 10) {
      return {
        occupied: true,
        occupant: 'obstacle',
        occupantTeam: null
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

function getPortrait (type) {
  let workingArr = portraitSelect[type]
  let randomFloat = Math.random() * workingArr.length
  let randomInt = Math.floor(randomFloat)
  let numSelect = workingArr[randomInt]
  portraitSelect[type] = portraitSelect[type].filter(num => num !== numSelect)
  let portraitSrc = 'images/portraits/' + type + numSelect + '.png'
  return portraitSrc
}

function capitalise (name) {
  let first = name.charAt(0)
  first = first.toUpperCase()
  name = name.slice(1, name.length)
  return first + name
}

function createTeam (units, idx, team, letter, names) {
  const unitArr = units.map(unit => {
    const ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    let newUnit = {
      teamName: team,
      sprite: letter + classes[unit].spriteType,
      name: `${ranName} the ${capitalise(unit)}`,
      'range': (classes[unit].class === 'spearman') ? spear : melee,
      idx: idx,
      dead: false,
      kills: [],
      portrait: getPortrait(unit)
    }
    idx += 38
    Object.assign(newUnit, classes[unit])
    return newUnit
  })
  return unitArr
}

export function createActors (team1, team2) {
  let team1Arr = createTeam(team1Units, 57, team1, 'r', names)
  let team2Arr = createTeam(team2Units, 75, team2, 'l', names)
  return [{ name: team1, units: team1Arr }, { name: team2, units: team2Arr }]
}
