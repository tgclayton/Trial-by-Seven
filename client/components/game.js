import Phaser from 'phaser'
import { createMapArray, test } from './mapfunctions'

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

const teamSize = 5
var team1 = 'team1'
var team2 = 'team2'

var actors = [{ name: team1, units: [] }, { name: team2, units: [] }]
var map = null
map = createMapArray()
console.log(map)

createActors()

function createActors () {
  let idx = 140
  for (let i = 0; i < teamSize; i++) {
    let it = i + 1
    actors[0].units.push({
      name: 'warrior' + it,
      sprite: 'warrior',
      idx: idx + (i * 20)
    })
    actors[1].units.push({
      name: 'enemy' + it,
      sprite: 'enemywarrior',
      idx: idx + (i * 20) + 19
    })
  }
}

var player
var cursor
var cursors

function preload () {
  this.load.image('warrior', '/assets/images/warrior.png')
  this.load.image('enemywarrior', '/assets/images/enemywarrior.png')
  this.load.image('gcursor', '/assets/images/green-cursor.png')
  this.load.image('bcursor', '/assets/images/blue-cursor.png')
  this.load.image('rcursor', '/assets/images/red-cursor.png')
  this.load.image('testmap2', '/assets/images/testmap2.png')
}

function create () {
  this.input.keyboard.on('keydown', keyDown, this)
  // this.input.keyboard.on('keydown-Z', checkTile, this)
  // this.input.keyboard.on('keydown-X', changeCursorColor, this)
  this.add.image(480, 480, 'testmap2')
  cursors = this.input.keyboard.createCursorKeys()

  actors.forEach(team => {
    team.units.forEach(actor => {
      let coords = getCoordsFromIndex(actor.idx)
      actor.x = coords[0]
      actor.y = coords[1]
      actor = this.physics.add.image(actor.x, actor.y, actor.sprite).setOrigin(0, 0)
    })
  })

  player = this.physics.add.image(0, 0, 'gcursor').setOrigin(0, 0)
  player.setCollideWorldBounds(true)
  player.setData('notMoving', true)
  player.setData('idx', 0)
  player.setData('sprite', 'gcursor')
}

function update () {
  if (player.getData('notMoving')) {
    if (cursors.left.isDown) {
      setfixedMovement(-48, 'x')
    } else if (cursors.right.isDown) {
      setfixedMovement(48, 'x')
    } else if (cursors.up.isDown) {
      setfixedMovement(-48, 'y')
    } else if (cursors.down.isDown) {
      setfixedMovement(48, 'y')
    }
  }
}

function getCoordsFromIndex (idx) {
  var x = (idx % 20) * 48
  var y = (Math.floor(idx / 20)) * 48
  return [x, y]
}

function setfixedMovement (val, axis) {
  if (axis === 'x') {
    player.x += val
  } else if (axis === 'y') {
    player.y += val
  }

  player.setPosition(player.x, player.y)
  player.setData('notMoving', false)
  setTimeout(() => {
    player.setData('notMoving', true)
  }, 100)
  setCursorIndex()
}

function setCursorIndex () {
  let x = player.x / 48
  let y = (player.y / 48) * 20
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
  // console.log('x: ', player.x, 'y:', player.y)
  player.setData('idx', x + y)
}

function checkTile () {
  let idx = player.getData('idx')
  let coords = getCoordsFromIndex(idx)
  console.log('index:', idx, 'coords:', coords)
  let found = false
  actors.forEach(team => {
    team.units.forEach(actor => {
      let currentIdx = player.getData('idx')
      if (actor.idx === currentIdx) {
        found = true
      }
    })
  })
  if (found) {
    console.log('tile contains a unit')
  } else {
    console.log('tile does not contain a unit')
  }
}

function changeCursorColor (context) {
  let sprite
  if (player.getData('sprite') === 'gcursor') {
    sprite = 'bcursor'
  } else if (player.getData('sprite') === 'bcursor') {
    sprite = 'gcursor'
  }
  let idx = player.getData('idx')
  let coords = getCoordsFromIndex(idx)
  player.destroy()
  player = context.physics.add.image(coords[0], coords[1], sprite).setOrigin(0, 0)
  player.setCollideWorldBounds(true)
  player.setData('notMoving', true)
  player.setData('idx', idx)
  player.setData('sprite', sprite)
  setCursorIndex()
  // cursor = this.physics.add.image(96, 96, 'bcursor').setOrigin(0, 0)
}

function keyDown (e) {
  let key = e.key
  switch (key) {
    case 'x':
      changeCursorColor(this)
  }
}
