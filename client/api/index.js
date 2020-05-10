import request from 'superagent'


export function addPlayers (player) {
  // console.log('One: ' + names.championOne + ' Two: ' + names.championTwo);
  console.log(player)
  return request.post('/api/v1/players')
    .send(player)
    .then(res => console.log('res:', res))
    .catch(err => console.log(err))
  }
