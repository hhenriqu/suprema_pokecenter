'use client'
import Cover from '@/components/Header/Cover'
import ShowPokeList from '@/components/ShowPokeList/ShowPokeList'
import PokemonTypesButtons from './PokemonTypesButtons'
import { StyledPokeShow } from './style'

export default function HomePage() {



  
  return (
    <>
      <Cover />
      <StyledPokeShow>
        <p>Mostrar Pokemons</p>
        <div>
          <button>Por ID</button>
          <button>Listar por tipo</button>
        </div>
      </StyledPokeShow>
      <PokemonTypesButtons />
      <ShowPokeList />
    </>
  )
}
