'use client'
import IPokemon from '@/types/pokemon'
import Image from 'next/image'
import { PokeImageDiv, PokemonDetailSection } from './style'

type Props = {
  pokemon: IPokemon
}

export default function PokemonId({ pokemon }: Props) {
  return (
    <PokemonDetailSection>
      <div className="pokeWrapper">
        <div className="TitleCard">
          <div className="idTitle">
            <p>
              <span>ID:</span> {pokemon.id}
            </p>
          </div>
          <div className="idCard">
            <p>{pokemon.name}</p>
          </div>
        </div>

        <div className="DetailCard">
          <PokeImageDiv>
            <Image
              src="/assets/paisagem_pokemon.png"
              alt=""
              width={400}
              height={400}
            />

            <Image
              src={pokemon.imageUrl}
              alt="PokemonCard"
              width={400}
              height={400}
            />
          </PokeImageDiv>

          <div className="pokeStatus">
            <p>poder: {pokemon.power}</p>
            <p>Tipo:</p>
            {pokemon.type.map((typeObj, index) => (
              <p key={index}>{typeObj.type.name}</p>
            ))}
          </div>
        </div>
      </div>
    </PokemonDetailSection>
  )
}
