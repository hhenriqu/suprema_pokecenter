'use client'
import { CardDiv } from '@/components/ShowPokeList/PokemonCard/style'
import IPokemon from '@/types/pokemon'
import Image from 'next/image'

type Props = {
  pokemon: IPokemon
}

export default function PokemonId({ pokemon }: Props) {
  return (
    <CardDiv>
      <div className="pokeImage">
        <div className="idCard">
          <p>{pokemon.id}</p>
        </div>

        <Image src={pokemon.sprite} alt="PokemonCard" width={96} height={96} />
      </div>

      <div className="pokeStatus">
        <p>nome: {pokemon.name}</p>
        <p>poder: {pokemon.power}</p>
        <p>Tipo:</p>
        {pokemon.type.map((typeObj, index) => (
          <p key={index}>{typeObj.type.name}</p>
        ))}
      </div>
    </CardDiv>
  )
}
