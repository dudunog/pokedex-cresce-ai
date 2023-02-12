type PokemonTypes = {
  slot: number
  type: {
    name: string
    url: string
  }
}

type PokemonSprites = {
  other: {
    "official-artwork": {
      front_default: string
    }
  }
}

export interface PokemonDetailsModel {
  id: number
  name: string
  types: PokemonTypes[]
  sprites: PokemonSprites
}
