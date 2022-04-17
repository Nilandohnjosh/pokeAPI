import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

const pokeURL = 'https://pokeapi.co/api/v2'

export function getPokemon() {
  return request.get(pokeURL + '/pokemon').then((res) => {
    console.log(res.body)
    // return res.body
  })
}

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***
