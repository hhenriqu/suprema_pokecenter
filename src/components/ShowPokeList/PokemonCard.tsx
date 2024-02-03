'use client'

import IPokemon from '@/types/pokemon'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CardDiv } from './PokemonCard.style'

type Props = {
  pokemon: IPokemon
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <CardDiv>
      <Image src={pokemon.sprite} alt="PokemonCard" width={32} height={32} />
      <p>{pokemon.id}</p>
      <p>{pokemon.name}</p>
      <p>{pokemon.power}</p>
      {pokemon.type.length > 1 ? (
        pokemon.type.map((typeObj, index) => (
          <p key={index}>{typeObj.type.name}</p>
        ))
      ) : (
        <p>{pokemon.type.name}</p>
      )}
    </CardDiv>
  )
}
