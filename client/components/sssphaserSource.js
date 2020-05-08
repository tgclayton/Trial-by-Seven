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
{
  "name": "phaser3-project-template",
  "version": "1.1.0",
  "description": "A Phaser 3 Project Template",
  "main": "server/index.js",
  "scripts": {
    "client": "webpack-dev-server --hot --inline",
    "dev": "run-p dev:client dev:server",
    "dev:client": "webpack --watch",
    "dev:server": "nodemon server",
    "start": "run-s build server",
    "build": "webpack",
    "server": "node server",
    "test": "jest --watchAll"
  },
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread"
    ]
  },
  "jest": {
    "setupFiles": [
      "./tests/setup.js"
    ]
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/photonstorm/phaser3-project-template.git"
  },
  "devDependencies": {
    "@babel/core": "^7.9.6",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-proposal-object-rest-spread": "^7.9.0",
    "@babel/preset-env": "^7.9.6",
    "@babel/preset-react": "^7.9.4",
    "babel-core": "^7.0.0-bridge.0",
    "babel-jest": "^25.2.6",
    "babel-loader": "^8.1.0",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.2",
    "jest": "^25.2.7",
    "nodemon": "^2.0.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "clean-webpack-plugin": "^3.0.0",
    "file-loader": "^4.3.0",
    "html-webpack-plugin": "^3.2.0",
    "raw-loader": "^3.1.0",
    "terser-webpack-plugin": "^2.3.6",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3",
    "webpack-merge": "^4.2.2"
  },
  "dependencies": {
    "@ion-phaser/core": "^1.2.3",
    "@ion-phaser/react": "^1.2.2",
    "express": "^4.17.1",
    "npm-run-all": "^4.1.5",
    "nodemon": "^2.0.3",
    "phaser": "^3.23.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "superagent": "^5.2.2"
  }
}
