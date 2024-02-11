interface Type {
  type: {
    name: string;
    url: string;
  };
}

interface IPokemon {
  id: number;
  name: string;
  power: string;
  type: Type[];
  imageUrl: string;
  sprite: string;
}

export default IPokemon;