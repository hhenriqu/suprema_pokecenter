'use client'
import React from 'react'
import { StyledDiv } from './style'
import SearchBar from '@/components/SearchPokemon/SearchBar'
import { useRouter } from 'next/navigation'


export default function Navbar() {
  const router = useRouter()

  const handleSearch = (query: string) => {
    router.push(`/pokemon/${query}`);
  };

  return (
    <StyledDiv>
      <p>Bem vindo ao Suprema Pokecenter!</p>
      <SearchBar onSearch={handleSearch} />
      <a href="/">HOME</a>
      <a href="/contact">Entre em contato!</a>
    </StyledDiv>
  )
}
