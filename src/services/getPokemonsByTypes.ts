export default async function getPokemonsByTypes(url: string) { 

  const response = await fetch(url);
  const  { pokemon }  = await response.json();

  return pokemon;

}