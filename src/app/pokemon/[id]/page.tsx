'use client'
import { useEffect, useState } from 'react'
import PokemonId from '@/pages/Pokemon'
import getPokemons from '@/services/getPokemons'
import getPokemonsByName from '@/services/getPokemonsByName'
import Image from 'next/image'
import IPokemon from '@/types/pokemon'

export default function PokemonIdPage({ params }: { params: any }) {
  const [pokemon, setPokemon] = useState<IPokemon>()

  useEffect(() => {
    const fetchPokemon = async () => {
      if (typeof params.id === 'number') {
        const newPokemons = await getPokemons(Math.floor(params.id / 10) + 2)
        setPokemon(newPokemons[params.id - 1])
      } else {
        const newPokemon = await getPokemonsByName(params.id)
        setPokemon(newPokemon)
      }
    }

    fetchPokemon()
  }, [params])

  return <>{pokemon && <PokemonId pokemon={pokemon} />}</>
}
