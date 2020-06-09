// import { createActors, createActors2 } from '../client/components/mapfunctions'

// import { getCoordsFromIndex, getIndexFromCoords, width } from '../client/components/game'

function melee (idx) {
  let neighbours = 'hello'
  return neighbours
}

function spear () {
  let neighbours = 'there'
  return neighbours
}

const actors = [{ name: null, units: [] }, { name: null, units: [] }]
var teamSize = 5

var portraitSelect = {
  swordsman: [1, 2, 3],
  scout: [1, 2, 3],
  spearman: [1, 2, 3],
  heavy: [1, 2, 3]
}

var names = ['Euvrouin', 'Simond', 'Parsival', 'Leofrick', 'Garret', 'Uthbert', 'Ulfrik', 'Gauward', 'Grim', 'Thorvald', 'Roland', 'Nieles', 'Berrick', 'Harlaw', 'Ralf', 'Albrecht', 'Giliam', 'Aethelwulf', 'Brand', 'Bjorn', 'Helmaer', 'Aenfin', 'Lambert', 'Ardulf', 'Lany', 'Elwic', 'Ebehrt', 'Edric', 'Piersym', 'Georguy', 'Peregrine', 'Grewill']

var team1Units = ['swordsman', 'heavy', 'swordsman', 'scout', 'spearman']
var team2Units = ['scout', 'scout', 'swordsman', 'spearman', 'heavy']

function getPortrait (type) {
  let workingArr = portraitSelect[type]
  let randomFloat = Math.random() * workingArr.length
  let randomInt = Math.floor(randomFloat)
  let numSelect = workingArr[randomInt]
  portraitSelect[type] = portraitSelect[type].filter(num => num !== numSelect)
  let portraitSrc = 'images/portraits/' + type + numSelect + '.png'
  return portraitSrc
}

export const classes = {
  scout: {
    damage: 10,
    class: 'scout',
    name: 'Scout',
    sprite: 'scout',
    actions: 8,
    health: 20
  },
  archer: {
    damage: 10,
    class: 'archer',
    name: 'Archer',
    sprite: 'archer',
    actions: 5,
    health: 10,
    ammo: 5
  },
  spearman: {
    damage: 15,
    class: 'spearman',
    name: 'Lancer',
    sprite: 'spear',
    actions: 6,
    health: 30
  },
  heavy: {
    damage: 20,
    class: 'heavy',
    name: 'Sentinel',
    sprite: 'heavy',
    actions: 5,
    health: 50
  },
  swordsman: {
    damage: 25,
    class: 'swordsman',
    name: 'Swordsman',
    sprite: '2hand',
    actions: 6,
    health: 40
  }
}

function createActors2 (team1, team2) {
  let idx1 = 19
  let idx2 = 38
  const team1Arr = team1Units.map(unit => {
    idx1 += 38
    const ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    let newUnit = {
      teamName: team1,
      sprite: 'r' + unit.sprite,
      name: `${ranName} the ${unit.name}`,
      'range': (unit.class === 'spearman') ? spear : melee,
      idx: idx1,
      dead: false,
      kills: [],
      portrait: getPortrait(unit)
    }
    Object.assign(newUnit, classes[unit])
    return newUnit
  })
  const team2Arr = team2Units.map(unit => {
    idx2 += 38
    const ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    let newUnit = {
      teamName: team1,
      sprite: 'r' + unit.sprite,
      name: `${ranName} the ${unit.name}`,
      'range': (unit.class === 'spearman') ? spear : melee,
      idx: idx2,
      dead: false,
      kills: [],
      portrait: getPortrait(unit.class)
    }
    Object.assign(newUnit, classes[unit])
    return newUnit
  })
  return [{ name: team1, units: team1Arr }, { name: team2, units: team2Arr }]
}

function createActors (team1, team2) {
  var actorArr = actors
  let idx = 19
  // let team1 = actorArr[0].name
  // let team2 = actorArr[1].name
  actorArr[0].name = team1
  actorArr[1].name = team2
  let unit = []
  let current
  let ranName

  for (let i = 0; i < teamSize; i++) {
    current = team1Units[i]
    unit = JSON.parse(JSON.stringify(classes[current]))
    ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    unit.teamName = team1
    unit.sprite = 'r' + unit.sprite
    unit.name = `${ranName} the ${unit.name}`
    unit.range = melee
    if (unit.class === 'spearman') {
      unit.range = spear
    }
    idx = idx + 38
    unit.idx = idx
    unit.dead = false
    unit.kills = []
    unit.portrait = getPortrait(unit.class)
    actorArr[0].units.push(unit)

    current = team2Units[i]
    unit = JSON.parse(JSON.stringify(classes[current]))
    ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    unit.range = melee
    unit.teamName = team2
    unit.name = `${ranName} the ${unit.name}`
    unit.sprite = 'l' + unit.sprite
    unit.idx = idx + 18
    unit.portrait = getPortrait(unit.class)
    unit.dead = false
    unit.kills = []
    actorArr[1].units.push(unit)
  }
  return actorArr
}

test('Create actors functions should produce identical results', () => {
  const team1 = 'testTeam1'
  const team2 = 'testTeam2'
  const expected = createActors(team1, team2)
  const actual = createActors2(team1, team2)
  // console.log('Original produces:', expected)
  // console.log('New produces:', actual)
  expect(actual).toBe(expected)
})
