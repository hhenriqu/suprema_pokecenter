import getTypes from '@/services/getTypes'
import React, { useEffect, useState } from 'react'
import {
  StyledButton,
  StyledList,
  StyledListPokemons,
  StyledWrapper
} from './style'
import getPokemonsByTypes from '@/services/getPokemonsByTypes'
import { IPokemonListTypes, IPokemonTypes } from '@/types/pokemonTypes'
import { URL_TYPE } from '@/utils/constants'
import Link from 'next/link'

export default function PokemonTypesButtons() {
  const [pokeTypes, setPokeTypes] = useState<IPokemonTypes[]>([])
  const [pokemonsList, setPokemonsList] = useState<IPokemonListTypes[]>([])

  useEffect(() => {
    async function fetchPokemonsTypes() {
      try {
        const pokemonsTypes = await getTypes()
        setPokeTypes(pokemonsTypes)
      } catch (error) {
        console.error('Erro ao buscar pokémons:', error)
      }
    }
    fetchPokemonsTypes()
  }, [])

  useEffect(() => {
    getPokemonsList(URL_TYPE)
  }, [pokeTypes])

  async function getPokemonsList(url: string) {
    const pokemons = await getPokemonsByTypes(url)
    setPokemonsList(pokemons)
  }

  return (
    <StyledWrapper>
      <StyledList>
        {pokeTypes.map((type: IPokemonTypes, index: number) => (
          <li key={index}>
            <StyledButton onClick={() => getPokemonsList(type.url)}>
              {type.name}
            </StyledButton>
          </li>
        ))}
      </StyledList>
      <p>Escolha um pokemon abaixo para ver mais informações</p>
      <StyledList>
        {pokemonsList.map((poke: IPokemonListTypes, index: number) => (
          <StyledListPokemons key={index}>
            <Link  className='classLink' key={index} href={`/pokemon/${poke.pokemon.name}`}>
              {poke.pokemon.name}
            </Link>
          </StyledListPokemons>
        ))}
      </StyledList>
    </StyledWrapper>
  )
}
