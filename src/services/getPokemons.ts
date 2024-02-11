export default async function getPokemons(page: number) {
  const offset = page === 1 ? 0 : (page - 1) * 10;

 

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${offset}&offset=0`);
  const { results } = await response.json();

  const pokemonsData = await Promise.all(
    results.map(async (pokemon: any) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );

  const PokemonDatailed = pokemonsData.map((pokemon: any) => ({
    id: pokemon.id,
    name: pokemon.name,
    power: pokemon.base_experience,
    type: pokemon.types,
    imageUrl: pokemon.sprites.other['official-artwork'].front_default,
    sprite: pokemon.sprites.front_default
  }));

  return PokemonDatailed;

}