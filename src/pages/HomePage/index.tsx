'use client'
import Cover from '@/components/Header/Cover'
import ShowPokeList from '@/components/ShowPokeList/ShowPokeList'
import PokemonTypesButtons from './PokemonTypesButtons'
import { StyledPokeShow } from './style'
import { useState } from 'react'

export default function HomePage() {
  const [showPokemons, setShowPokemons] = useState<boolean>(true)

  return (
    <>
      <Cover />
      <StyledPokeShow>
        <p>Mostrar Pokemons</p>
        <div>
          <button onClick={() => setShowPokemons(!showPokemons)}>Clique aqui para mudar o tipo de visualização: ID ou Typo</button>
        </div>
      </StyledPokeShow>
      {showPokemons ? <ShowPokeList /> : <PokemonTypesButtons />}
    </>
  )
}
