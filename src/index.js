import Phaser from 'phaser'

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

function preload () {
  this.load.image('warrior', 'src/assets/images/warrior.png')
  this.load.image('sky', 'src/assets/images/sky.png')
  this.load.image('testmap2', 'src/assets/images/testmap2.png')
  this.load.image('testmap2unzoomed', 'src/assets/images/testmap2unzoomed.png')
  this.load.image('ground', 'src/assets/images/platform.png')
  this.load.image('star', 'src/assets/images/star.png')
  this.load.image('bomb', 'src/assets/images/bomb.png')
  this.load.spritesheet('dude', 'src/assets/spritesheets/dude.png',
    { frameWidth: 32, frameHeight: 48 }
  )
  cursor = new Phaser.Cursor()
}

function create () {
  this.add.image(480, 480, 'testmap2')
  cursors = this.input.keyboard.createCursorKeys()

  actors.forEach((actor, idx) => {
    actors[idx] = this.physics.add.image(actor.x, actor.y, 'warrior').setOrigin(0, 0)
  })
  this.cursor.load(48, 48)
  player.setCollideWorldBounds(true)
  player.setData('notMoving', true)
}

function setfixedMovement (val, axis) {
  if (axis === 'x') {
    playerX += val
  } else if (axis === 'y') {
    playerY += val
  }

  player.setPosition(playerX, playerY)
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
