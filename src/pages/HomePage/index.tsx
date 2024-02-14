'use client'
import IPokemon from '@/types/pokemon'
import Image from 'next/image'
import { PokeImageDiv, PokeStatusDiv, PokemonDetailSection } from './style'
import Cover from '@/components/Header/Cover'
import { ShowPokeWrapper } from '@/components/ShowPokeList/ShowPokeList.style'
import Navbar from '@/components/Header/Navbar'
import ShowPokeList from '@/components/ShowPokeList/ShowPokeList'

export default function HomePage() {
  return (
    <>
      <Cover />
      <ShowPokeList />
    </>
  )
}
