// import Phaser from 'phaser'

var actors = [
  {
    name: 'warrior1',
    x: 48,
    y: 48
  },
  {
    name: 'warrior2',
    x: 48,
    y: 92
  },
  {
    name: 'warrior3',
    x: 48,
    y: 144
  },
  {
    name: 'enemy1',
    x: 48,
    y: 192
  },
  {
    name: 'enemy2',
    x: 48,
    y: 240
  },
  {
    name: 'enemy3',
    x: 48,
    y: 288
  }

]
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

// var game = new Phaser.Game(config)
var player
var cursor
var cursors




function preload () {
  this.load.image('warrior', '/assets/images/warrior.png')
  this.load.image('cursor', '/assets/images/green-cursor.png')
  this.load.image('testmap2', '/assets/images/testmap2.png')
}

function create () {
  this.add.image(480, 480, 'testmap2')
  cursors = this.input.keyboard.createCursorKeys()

  actors.forEach((actor, idx) => {
    actors[idx] = this.physics.add.image(actor.x, actor.y, 'warrior').setOrigin(0, 0)
  })
  player = this.physics.add.image(0, 0, 'cursor').setOrigin(0, 0)
  player.setCollideWorldBounds(true)
  player.setData('notMoving', true)
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
