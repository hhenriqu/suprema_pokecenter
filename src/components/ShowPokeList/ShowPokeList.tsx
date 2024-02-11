'use client'
import React, { useEffect, useState } from 'react';
import IPokemon from '@/types/pokemon';
import getPokemons from '@/server/api/getPokemons';
import PokemonCard from './PokemonCard';

export default function ShowPokeList() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const newPokemons = await getPokemons(page);
        setPokemons(newPokemons); // Adiciona à lista existente
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar pokémons:', error);
        setLoading(false);
      }
    }
    fetchPokemons();
  }, [page]); // Execute sempre que a página mudar

  // Função para lidar com o evento de scroll
  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) { // Se estiver a 20 pixels do fim da página
      setPage(prevPage => prevPage + 1); // Carrega a próxima página
    }
  }

  // Adiciona o listener do evento de scroll quando o componente monta
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h2>Pokemons!</h2>
      {loading ? (
        <p>Loading...</p>
      ) : pokemons.length > 0 ? (
        <ul>
          {pokemons.map((pokemon: IPokemon, index: number) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </ul>
      ) : (
        <p>No pokemons found.</p>
      )}
    </div>
  );
}
