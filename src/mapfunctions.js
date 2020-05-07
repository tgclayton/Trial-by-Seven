export function createMapArray(){
  let mapArr = []
  for (let i =0; i < 400; i++) {
      mapArr.push({
          occupied: false,
          occupant: null
      })
  }
  return mapArr
}

export function test(){
  return 'this is a test'
}
