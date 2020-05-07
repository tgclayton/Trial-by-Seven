import Phaser from 'phaser'

// document.addEventListener('keydown', keyPressed())
var playerX = 48
var playerY = 48

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
}

function create () {
  this.add.image(480, 480, 'testmap2')
  // this.physics.startSystem(Phaser.Physics.P2JS)
  // this.add.image(480, 480, 'warrior').setOrigin(0, 0)
  // player = this.physics.add.sprite(480, 480, 'warrior')
  // player = this.add.sprite(playerX, playerY, 'warrior')
  cursors = this.input.keyboard.createCursorKeys()
  player = this.physics.add.image(playerX, playerY, 'warrior').setOrigin(0, 0)
  player.setCollideWorldBounds(true)
  player.setData('notMoving', true)
  // this.physics.p2.enable(player)
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
