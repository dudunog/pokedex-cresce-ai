import { type PoketeamModel } from "@/domain/models"

export interface StorePoketeamList {
  startLoading: () => Promise<void>
  store: (payload: any) => Promise<void>
  error: (error: any) => Promise<void>
}

export namespace StorePoketeamList {
  export type Model = PoketeamModel
}
