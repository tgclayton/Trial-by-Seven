import Phaser from 'phaser'
// import mapJson from 'assets/map/testmap'

// const config = {
//   type: Phaser.AUTO,
//   parent: 'phaser-example',
//   width: 800,
//   height: 600,
//   scene: {
//     preload: preload,
//     create: create
//   }
// }

var config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  parent: 'phaser-example',
  pixelArt: true,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config)
var controls

function preload () {
  // this.load.image('tiles', logoImg)
  this.load.tilemapTiledJSON('map', 'src/assets/map/testmap.json')
  this.load.image('Desert', 'src/assets/map/tmw_desert_spacing')
  // this.load.image('drawtiles-spaced', 'assets/tiles/drawtiles-spaced.png')

}

function create () {
  var map = this.make.tilemap({ key: 'map' })

  var tiles = map.addTilesetImage('tileset', 'Desert')

  var layer = map.createStaticLayer(0, tiles, 0, 0)

  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

  var cursors = this.input.keyboard.createCursorKeys();
    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        speed: 0.5
    };
    controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);

    var help = this.add.text(16, 16, 'Arrow keys to scroll', {
        fontSize: '18px',
        padding: { x: 10, y: 5 },
        backgroundColor: '#000000',
        fill: '#ffffff'
    });
    help.setScrollFactor(0);
}

function update (time, delta)
{
    controls.update(delta);
}


  // const logo = this.add.image(400, 150, 'logo')

  // this.tweens.add({
  //   targets: logo,
  //   y: 450,
  //   duration: 2000,
  //   ease: 'Power2',
  //   yoyo: true,
  //   loop: -1
  // })

