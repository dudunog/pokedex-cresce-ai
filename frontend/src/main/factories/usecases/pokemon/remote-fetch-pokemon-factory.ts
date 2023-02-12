import { type FetchPokemon } from "@/domain/usecases"
import { RemoteFetchPokemon } from "@/data/usecases"
import { makeApiUrl } from "@/main/factories/http"
import { makeHttpClientDecorator } from "@/main/factories/decorators"

export const makeRemoteFetchPokemon = (): FetchPokemon =>
  new RemoteFetchPokemon(makeApiUrl("/pokemon/"), makeHttpClientDecorator())
