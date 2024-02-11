import { CardDiv } from '@/components/ShowPokeList/PokemonCard/style'
import PokemonId from '@/pages/Pokemon'
import getPokemons from '@/services/getPokemons'
import Image from 'next/image'

export default async function PokemonIdPage({ params }: { params: any }) {
  const newPokemons = await getPokemons(Math.floor(params.id / 10) + 2)
  const pokemon = newPokemons[params.id - 1]

  return (
    <>
      <PokemonId pokemon={pokemon} />
    </>
  )
}
