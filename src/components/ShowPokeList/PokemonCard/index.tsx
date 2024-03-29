'use client'
import IPokemon from '@/types/pokemon'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CardDiv } from './style'

type Props = {
  pokemon: IPokemon
}

export default function PokemonCard({ pokemon }: Props) {
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
