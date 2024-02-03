interface IPokemon {
  id: number;
  name: string;
  power: string;
  type: string | string[];
  imageUrl: string;
  sprite: string;
}

export default IPokemon;