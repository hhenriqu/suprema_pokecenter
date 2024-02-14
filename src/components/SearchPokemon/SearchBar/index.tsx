'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { SearchButton, SearchContainer, SearchInput } from './style'

interface Props {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Pokemon Name or ID"
          value={query}
          onChange={handleChange}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchContainer>
    </form>
  )
}
