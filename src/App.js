import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()

  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      setNextPageUrl(res.data.next)
      setNextPageUrl(res.data.previous)
      setPokemon( res.data.results.map( p => p.name))  
    })
  }, [currentPageUrl])


  return (
   <PokemonList pokemon={pokemon} />
  );
}

export default App;
