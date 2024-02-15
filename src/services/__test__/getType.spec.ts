import getTypes from "../getTypes"

it('should return all types of pokemons', async () => {
  
  const pokemonTypes = await getTypes()
  expect(pokemonTypes.length).toBeGreaterThan(0);
  
})