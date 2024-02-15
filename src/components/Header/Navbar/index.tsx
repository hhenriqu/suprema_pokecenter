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
      <a href="/">Página Inicial</a>
      <SearchBar onSearch={handleSearch} />
      <a href="/contact">Entre em contato!</a>
    </StyledDiv>
  )
}
