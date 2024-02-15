import getTypes from '@/services/getTypes'
import React, { useEffect, useState } from 'react'
import { StyledButton, StyledList, StyledListPokemons, StyledWrapper } from './style'
import getPokemonsByTypes from '@/services/getPokemonsByTypes'
import { IPokemonListTypes, IPokemonTypes } from '@/types/pokemonTypes'

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
      <StyledList>
        <p>Escolha um pokemon abaixo para ver mais informações</p>
        {pokemonsList.map((poke: IPokemonListTypes, index: number) => (
          <StyledListPokemons key={index}>{poke.pokemon.name}</StyledListPokemons>
        ))}
      </StyledList>
    </StyledWrapper>
  )
}
