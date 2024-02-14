'use client'
import React, { useEffect, useState } from 'react'
import IPokemon from '@/types/pokemon'
import getPokemons from '@/services/getPokemons'
import PokemonCard from './PokemonCard'
import { ShowPokeWrapper } from './ShowPokeList.style'
import Link from 'next/link'

export default function ShowPokeList() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const newPokemons = await getPokemons(page)
        setPokemons(newPokemons)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar pokémons:', error)
        setLoading(false)
      }
    }
    fetchPokemons()
  }, [page]) 

   function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setPage(prevPage => prevPage + 1) 
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ShowPokeWrapper>
      {loading ? (
        <p>Loading...</p>
      ) : pokemons.length > 0 ? (
        <div className="pokeGrid">
          {pokemons.map((pokemon: IPokemon, index: number) => (
            <Link key={index} href={`/pokemon/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No pokemons found.</p>
      )}
    </ShowPokeWrapper>
  )
}
