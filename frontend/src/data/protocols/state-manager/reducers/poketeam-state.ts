import {
  type PoketeamDetailsModel,
  type PoketeamModel
} from "@/domain/models"

export interface PoketeamState {
  isLoading: boolean
  poketeams: PoketeamModel[]
  poketeam: PoketeamDetailsModel | null
  size: number
  error: object | null
  sortBy: string | null
};
