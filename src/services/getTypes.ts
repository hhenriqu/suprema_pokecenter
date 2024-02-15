export default async function getTypes() { 

  const response = await fetch(`https://pokeapi.co/api/v2/type/`);
  const  { results }  = await response.json();

  return results;

}