const connection = require('./connections')

module.exports = {
  getPlayers,
  addPlayer
}

function getPlayers (db = connection) {
  return db('player_data')
}
function addPlayer (player, db = connection) {
  return db('player_data')
    .insert({
      player_one: player.playerOne,
      player_two: player.playerTwo
    })
}