'use client'
import IPokemon from '@/types/pokemon'
import getPokemons from '@/server/api/getPokemons'
import PokemonCard from './PokemonCard'
import { useState } from 'react'

export default async function ShowPokeList() { 
  const pokemons = await getPokemons(1)

  return (
    <div>
      <h2>Pokemons!</h2>
      <ul className="m-0">
        {pokemons.map((pokemon: IPokemon, index: number) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  )
}
