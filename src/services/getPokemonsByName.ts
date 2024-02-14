export default async function getPokemonsByName(name: string) { 

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const  results  = await response.json();

  const pokemonData = {
    id: results.id,
    name: results.name,
    power: results.base_experience,
    type: results.types,
    imageUrl: results.sprites.other['official-artwork'].front_default,
    sprite: results.sprites.front_default
  };

  return pokemonData;

}