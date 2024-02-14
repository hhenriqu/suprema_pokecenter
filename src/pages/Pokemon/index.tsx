'use client'
import IPokemon from '@/types/pokemon'
import Image from 'next/image'
import { PokeImageDiv, PokeStatusDiv, PokemonDetailSection } from './style'

type Props = {
  pokemon: IPokemon
}

export default function PokemonId({ pokemon }: Props) {
  return (
    <PokemonDetailSection>
      <div className="pokeWrapper">
        <div className="TitleCard">
          <div className="idTitle">
            <p>{pokemon.id}</p>
          </div>
          <div className="pokeName">
            <p>{pokemon.name}</p>
          </div>
        </div>

        <div className="DetailCard">
          <PokeImageDiv>
            <Image
              src="/assets/paisagem_pokemon.png"
              alt=""
              width={300}
              height={300}
            />

            <Image
              src={pokemon.imageUrl}
              alt="PokemonCard"
              width={300}
              height={300}
            />
          </PokeImageDiv>

          <PokeStatusDiv>
            <p>Power: {pokemon.power}</p>
            <div className="pokeTypes">
              <p>Type:</p>
              {pokemon.type.map((typeObj, index) => (
                <p key={index}>
                  {typeObj.type.name}
                  {index !== pokemon.type.length - 1 && ' /'}
                </p>
              ))}
            </div>
          </PokeStatusDiv>
        </div>
      </div>
    </PokemonDetailSection>
  )
}
