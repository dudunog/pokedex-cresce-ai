import { pokemonPersistConfig, ReduxStore } from "@/infra/state-manager"
import { pokemonReducer } from "@/infra/state-manager/slices"
import { type PokemonState } from "@/data/protocols/state-manager"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

export interface StateType {
  readonly pokemon: PokemonState
}

export const makeReduxStateManager = (): ReduxStore<StateType> =>
  new ReduxStore({
    rootReducer: combineReducers({
      pokemon: persistReducer(
        pokemonPersistConfig,
        pokemonReducer
      )
    })
  })
