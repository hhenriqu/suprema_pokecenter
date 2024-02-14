import getPokemonsByName from "../getPokemonsByName";

it('should return pokemon data', async () => {
  const name = 'pikachu';
  const pokemonData = await getPokemonsByName(name);
  expect(pokemonData.name).toEqual('pikachu');
})