import React, { useState, useEffect } from 'react'

import { getWelcome , getPokemon } from '../api'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [pokeData, setPokeData] = useState(null) 

  const getPoke = () => {
    getPokemon()
      .then(str => {
        setPokeData(str)
      })
      .catch
  }

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      <h1>{welcomeStatement}</h1>
      <ul>
        {pokeData.map((poke, i) => <li key ={i}>{poke.name}</li>)}
      </ul>
      <button onClick={getPoke}></button>
    </>

  )
}

export default App
