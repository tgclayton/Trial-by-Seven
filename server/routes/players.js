const express = require('express')
const db = require('../db/players')
const router = express.Router()
router.use(express.json())

module.exports = router


//POST /v1/focus
router.post('/players', (req, res) => {
  console.log('players.js')
  db.addPlayers(req.body)
  .then(() => {
    res.status(201).send()
    })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



// server.get('/players', (req, res) => {
//   db.getPlayers()
//     .then(player => {
//       res.json({
//         player
//       })
//     })
// })

