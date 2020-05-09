import Phaser from 'phaser'
import { createMapArray, addActorsToMapArr, createActors } from './mapfunctions'

// document.addEventListener('keydown', e => detectKeyStroke())

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

var actors = createActors()
var team1 = actors[0].name
var team2 = actors[1].name
var activeTeam = 0

map = addActorsToMapArr(actors, map)

var cursor
var targets = []

// console.log(map)
function preload() {
  this.load.image('warrior', '/assets/images/warrior.png')
  this.load.image('enemywarrior', '/assets/images/enemywarrior.png')
  this.load.image('gcursor', '/assets/images/green-cursor.png')
  this.load.image('bcursor', '/assets/images/blue-cursor.png')
  this.load.image('rcursor', '/assets/images/red-cursor.png')
  this.load.image('testmap2', '/assets/images/testmap2.png')
}

function create() {
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

function update() {
}

function getCoordsFromIndex(idx) {
  var x = (idx % 20) * 48
  var y = (Math.floor(idx / 20)) * 48
  return [x, y]
}

function setfixedMovement(val, axis) {
  // console.log('targets for movement is:', targets)
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
    }, 100)
    // console.log('target is:', target)
    setIndex(target)
  })
}

function setIndex(target) {
  let x
  let y
  if (target !== cursor) {
    x = target.physObj.x / 48
    y = (target.physObj.y / 48) * 20
  } else {
    x = cursor.x / 48
    y = (cursor.y / 48) * 20
  }
  // console.log('got to set index')
  // console.log('target in set index is:', target)

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
  // console.log('x: ', cursor.x, 'y:', cursor.y)
  if (target === cursor) {
    cursor.setData('idx', x + y)
  } else {
    map[target.idx].occupied = false
    map[target.idx].occupant = null
    target.idx = x + y
    map[target.idx].occupied = true
    map[target.idx].occupant = target.name
  }
}

function checkTile() {
  let idx = cursor.getData('idx')
  let coords = getCoordsFromIndex(idx)
  let tile = map[idx]
  console.log('index:', idx, 'coords:', coords)
  if (tile.occupied) {
    console.log('Tile contains:', tile.occupant)
  } else {
    console.log('Tile is empty')
  }
}

// targets = [cursor, select]
// targets = [cursor]
function selectUnit(con) {
  let idx = cursor.getData('idx')
  let tile = map[idx]
  let select = actors[activeTeam].units.find(unit => unit.idx === idx)
  if (targets.length > 1) {
    changeCursorColor(con)
    targets.splice(1, 1)
    // console.log(targets)
  } else if (select) {
    changeCursorColor(con)
    targets.push(select)
    console.log('targets in select is:', targets)
  } else {
    console.log('No unit of your team here')
  }
}

function changeCursorColor(context) {
  let sprite
  if (cursor.getData('sprite') === 'gcursor') {
    sprite = 'bcursor'
  } else if (cursor.getData('sprite') === 'bcursor') {
    sprite = 'gcursor'
  }
  let idx = cursor.getData('idx')
  let coords = getCoordsFromIndex(idx)
  cursor.destroy()
  cursor = context.physics.add.image(coords[0], coords[1], sprite).setOrigin(0, 0)
  cursor.setCollideWorldBounds(true)
  cursor.setData('notMoving', true)
  cursor.setData('idx', idx)
  cursor.setData('sprite', sprite)
  targets[0] = cursor
  setIndex(cursor)
  // cursor = this.physics.add.image(96, 96, 'bcursor').setOrigin(0, 0)
}

function keyDown(e) {
  let key = e.key
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
        if (activeTeam === 0 ){
          activeTeam = 1
        } else {
          activeTeam = 0
        }
    // default: console.log(key)
  }
}
