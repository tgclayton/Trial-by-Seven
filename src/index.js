import Phaser from 'phaser'
import { createMapArray, test } from './mapfunctions'
// const mapFunc = require ('./map')

var map = null
map = createMapArray()
console.log(map)

var actors = [
  {
    name: 'warrior1',
    sprite: 'warrior',
    x: 48,
    y: 48
  },
  {
    name: 'warrior2',
    sprite: 'warrior',
    x: 48,
    y: 92
  },
  {
    name: 'warrior3',
    sprite: 'warrior',
    x: 48,
    y: 144
  },
  {
    name: 'enemy1',
    sprite: 'enemywarrior',
    x: 48,
    y: 192
  },
  {
    name: 'enemy2',
    sprite: 'enemywarrior',
    x: 48,
    y: 240
  },
  {
    name: 'enemy3',
    sprite: 'enemywarrior',
    x: 48,
    y: 288
  }

]
var config = {
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

var game = new Phaser.Game(config)
var player
var cursor
var cursors
var keyZ

function preload () {
  this.load.image('warrior', 'src/assets/images/warrior.png')
  this.load.image('enemywarrior', 'src/assets/images/enemywarrior.png')
  this.load.image('cursor', 'src/assets/images/green-cursor.png')
  this.load.image('testmap2', 'src/assets/images/testmap2.png')
}

function create () {
  this.add.image(480, 480, 'testmap2')
  cursors = this.input.keyboard.createCursorKeys()

  keyZ = this.input.keyboard.addKey('Z')
  actors.forEach((actor, idx) => {
    actors[idx] = this.physics.add.image(actor.x, actor.y, actor.sprite).setOrigin(0, 0)
  })
  player = this.physics.add.image(0, 0, 'cursor').setOrigin(0, 0)
  player.setCollideWorldBounds(true)
  player.setData('notMoving', true)
  player.setData('idx', 0)
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
}

function setCursorIndex() {
  player.setData('idx', ((player.x / 48) + ((player.y / 48) * 20)))
} 

function update () {
  setCursorIndex()
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
  if (keyZ.isDown) {
    console.log(player.getData('idx'))
  }
}
