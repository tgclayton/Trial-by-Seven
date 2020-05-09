import Phaser from 'phaser'
import { createMapArray, addActorsToMapArr, createActors, classes } from './mapfunctions'

console.log('Press "m" to see map array')
console.log('Press "c" to flip cursor colour blue/green')
console.log('Press "t" to change active team')
console.log('Active team is: team1(guys on the left)')

export default {
  type: Phaser.AUTO,
  width: 960,
  height: 960,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

var map = createMapArray()
var keyPressed = false
var actors = createActors()
var team1 = actors[0].name
var team2 = actors[1].name

map = addActorsToMapArr(actors, map)

var activeTeam = team1
var cursor
var targets = []
var selectedUnit

function preload () {
  this.load.image('warrior', '/assets/images/warrior.png')
  this.load.image('enemywarrior', '/assets/images/enemywarrior.png')
  this.load.image('gcursor', '/assets/images/green-cursor.png')
  this.load.image('bcursor', '/assets/images/blue-cursor.png')
  this.load.image('rcursor', '/assets/images/red-cursor.png')
  this.load.image('l2hand', '/assets/images/soldiers/L2hand.png')
  this.load.image('r2hand', '/assets/images/soldiers/R2hand.png')
  this.load.image('lspear', '/assets/images/soldiers/Lspear.png')
  this.load.image('rspear', '/assets/images/soldiers/Rspear.png')
  this.load.image('lscout', '/assets/images/soldiers/Lscout.png')
  this.load.image('rscout', '/assets/images/soldiers/Rscout.png')
  this.load.image('lheavy', '/assets/images/soldiers/Lheavy.png')
  this.load.image('rheavy', '/assets/images/soldiers/Rheavy.png')
  this.load.image('larcher', '/assets/images/soldiers/Larcher.png')
  this.load.image('rarcher', '/assets/images/soldiers/Rarcher.png')
  this.load.image('testmap2', '/assets/images/testmap2.png')
}

function create () {
  this.input.keyboard.on('keydown', keyDown, this)
  this.add.image(480, 480, 'testmap2')
  actors.forEach(team => {
    team.units.forEach(actor => {
      let coords = getCoordsFromIndex(actor.idx)
      actor.x = coords[0]
      actor.y = coords[1]
      actor.physObj = this.physics.add.image(actor.x, actor.y, actor.sprite).setOrigin(0, 0)
      actor.physObj.setCollideWorldBounds(true)
    })
  })

  cursor = this.physics.add.image(0, 0, 'gcursor').setOrigin(0, 0)
  cursor.setCollideWorldBounds(true)
  cursor.setData('notMoving', true)
  cursor.setData('idx', 0)
  cursor.setData('sprite', 'gcursor')
  targets.push(cursor)
  // console.log(actors)
}

function update () {
}

function getCoordsFromIndex (idx) {
  var x = (idx % 20) * 48
  var y = (Math.floor(idx / 20)) * 48
  return [x, y]
}

function findDest (idx, val, axis) {
  let dest
  if (axis === 'x') {
    if (val === 48) {
      dest = idx + 1
    } else {
      dest = idx - 1
    }
  }
  if (axis === 'y') {
    if (val === 48) {
      dest = idx + 20
    } else {
      dest = idx - 20
    }
  }
  // console.log('dest is:', dest)
  return dest
}

function checkDestIsFree (dest) {
  if (map[dest].occupied) {
    return false
  } else {
    return true
  }
}

// function checkDestOccupantTeam (dest) {

//   if (map[dest].occupant.teamName === activeTeam) {
//     return false
//   } else {
//     return true
//   }
// }

function checkDestOccupant (dest) {
  if (map[dest].occupant === 'obstacle') {
    console.log('You cannot move through this obstacle')
    return false
  } else {
    attack(dest)
  }
}

function attack (dest) {
  // console.log('dest is:', dest)
  // console.log('active tema is:', activeTeam, 'target team is:', map[dest].occupant.teamName)
  // console.log('')
  if (map[dest].occupantTeam === activeTeam) {
    console.log('Probably shouldnt try to mutilate this poor chap')
  } else {
    console.log('This is a villainous cur, destroy him!')
  }
}

function setfixedMovement (val, axis) {
  let unit = targets[1]
  console.log(unit)
  let valid = true
  // console.log('targets for movement is:', targets)
  if (targets.length > 1) {
    let dest = findDest(cursor.getData('idx'), val, axis)
    valid = checkDestIsFree(dest)
    // console.log('valid is:', valid)
    if (!valid) {
      checkDestOccupant(dest)
    }
  }
  if (valid) {
    targets.forEach(target => {
      var newTarget
      if (target !== cursor) {
        newTarget = target.physObj
      } else {
        newTarget = target
      }
      // console.log(target)
      if (axis === 'x') {
        newTarget.x += val
      } else if (axis === 'y') {
        newTarget.y += val
      }
      newTarget.setPosition(newTarget.x, newTarget.y)
      newTarget.setData('notMoving', false)
      setTimeout(() => {
        newTarget.setData('notMoving', true)
      }, 300)
      // console.log('target is:', target)
      setIndex(target)
    })
  }
}

function setIndex (target) {
  let x
  let y
  if (target !== cursor) {
    x = target.physObj.x / 48
    y = (target.physObj.y / 48) * 20
  } else {
    x = cursor.x / 48
    y = (cursor.y / 48) * 20
  }
  if (x > 19) {
    x = 19
  } else if (x < 0) {
    x = 0
  }
  if (y > 380) {
    y = 380
  } else if (y < 0) {
    y = 0
  }
  if (target === cursor) {
    cursor.setData('idx', x + y)
  } else {
    map[target.idx].occupied = false
    map[target.idx].occupant = null
    map[target.idx].occupantTeam = null
    target.idx = x + y
    // target.x = x
    // target.y = y
    map[target.idx].occupied = true
    map[target.idx].occupant = target.name
    map[target.idx].occupantTeam = activeTeam
  }
}

function checkTile () {
  let idx = cursor.getData('idx')
  let coords = getCoordsFromIndex(idx)
  let tile = map[idx]
  let team
  if (activeTeam === team1) {
    team = 0
  } else {
    team = 1
  }
  console.log('index:', idx, 'coords:', coords)
  if (tile.occupied) {
    let occupant = actors[team].units.filter(unit => unit.name === tile.occupant)
    console.log('Tile contains:', tile.occupant)
    console.log('His info is:', occupant)
  } else {
    console.log('Tile is empty')
  }
}

function selectUnit (con) {
  let idx = cursor.getData('idx')
  let team = actors.filter(team => team.name === activeTeam)
  let select = team[0].units.find(unit => unit.idx === idx)
  if (targets.length > 1) {
    console.log(selectedUnit.name, 'unselected')
    selectedUnit = null
    changeCursorColor(con)
    targets.splice(1, 1)
  } else if (select) {
    selectedUnit = select
    changeCursorColor(con)
    targets.push(select)
    console.log('Selected unit is', select.name)
  } else {
    console.log('No unit of your team here')
  }
}

function changeCursorColor (context) {
  let sprite
  if (cursor.getData('sprite') === 'gcursor') {
    sprite = 'bcursor'
  } else if (cursor.getData('sprite') === 'bcursor') {
    sprite = 'gcursor'
  }
  cursor.setData('sprite', sprite)
  cursor.setTexture(sprite)
}

function keyDown (e) {
  let key = e.key
  if (!keyPressed) {
    switch (key) {
      case 'x':
        selectUnit(this)
        break
      case 'z':
        checkTile()
        break
      case 'ArrowUp':
        setfixedMovement(-48, 'y')
        break
      case 'ArrowDown':
        setfixedMovement(48, 'y')
        break
      case 'ArrowLeft':
        setfixedMovement(-48, 'x')
        break
      case 'ArrowRight':
        setfixedMovement(48, 'x')
        break
      case 't':
        if (activeTeam === team1) {
          activeTeam = team2
        } else {
          activeTeam = team1
        }
        console.log('Active team is:', activeTeam)
        break
      case 'c':
        changeCursorColor()
        break
      case 'm':
        console.log(map)
        break
    // default: console.log(key)
    }
  }
  keyPressed = true
  setTimeout(() => {
    keyPressed = false
  }, 20)
}
