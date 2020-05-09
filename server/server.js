const path = require('path')
const express = require('express')
// const db = require('../db')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.get('/players', (req, res) => {
//   db.getPlayers()
//     .then(player => {
//       res.json({
//         player
//       })
//     })
// })

module.exports = server




