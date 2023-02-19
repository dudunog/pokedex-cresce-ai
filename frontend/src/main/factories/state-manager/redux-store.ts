import { authenticationPersistConfig, pokemonPersistConfig, ReduxStore } from "@/infra/state-manager"
import { authenticationReducer, pokemonReducer } from "@/infra/state-manager/slices"
import { type AuthenticationState, type PokemonState } from "@/data/protocols/state-manager"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

export interface StateType {
  readonly pokemon: PokemonState
  readonly authentication: AuthenticationState
}

export const makeReduxStateManager = (): ReduxStore<StateType> =>
  new ReduxStore({
    rootReducer: combineReducers({
      pokemon: persistReducer(
        pokemonPersistConfig,
        pokemonReducer
      ),
      authentication: persistReducer(
        authenticationPersistConfig,
        authenticationReducer
      )
    })
  })
