import {
  type PoketeamModel
} from "@/domain/models"

export interface PoketeamState {
  isLoading: boolean
  poketeams: PoketeamModel[]
  poketeam: PoketeamModel | null
  size: number
  error: object | null
  sortBy: string | null
};
