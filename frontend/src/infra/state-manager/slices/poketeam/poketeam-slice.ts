import { type PoketeamState, type ISlice } from "@/data/protocols/state-manager"
import { type CaseReducerActions, createSlice, type Slice } from "@reduxjs/toolkit"
import { poketeamReducers } from "@/infra/state-manager/reducers"

const initialState: PoketeamState = {
  isLoading: false,
  poketeams: [],
  poketeam: null,
  size: 0,
  error: null,
  sortBy: null
}

export class PoketeamSlice implements ISlice<PoketeamState, typeof poketeamReducers, "poketeam"> {
  private readonly poketeamSlice: Slice

  constructor () {
    const poketeamSlice = createSlice({
      name: "poketeam",
      initialState,
      reducers: poketeamReducers
    })

    this.poketeamSlice = poketeamSlice
  }

  getSlice (): Slice {
    return this.poketeamSlice
  }

  getActions (): CaseReducerActions<typeof poketeamReducers, "poketeam"> {
    return this.poketeamSlice.actions as
      CaseReducerActions<typeof poketeamReducers, "poketeam">
  }
}

const poketeamSlice = new PoketeamSlice()

// Reducer
export default poketeamSlice.getSlice().reducer

// Actions
export const poketeamSlices = poketeamSlice.getActions()
export type PoketeamSlicesType = typeof poketeamSlices
