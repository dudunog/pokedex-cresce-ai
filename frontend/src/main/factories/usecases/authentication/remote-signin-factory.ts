import { type Signin } from "@/domain/usecases"
import { RemoteAuthentication } from "@/data/usecases/authentication/signin"
import { makeApiUrl } from "@/main/factories/http"
import { makeHttpClientDecorator } from "@/main/factories/decorators"
import { makeRemoteStoreAuthentication } from "./remote-store-authentication-factory"
import { makeRemoteUpdateSession } from "./remote-update-session-factory"

export const makeRemoteAuthentication = (): Signin =>
  new RemoteAuthentication(
    makeApiUrl("/signin"),
    makeHttpClientDecorator(),
    makeRemoteStoreAuthentication(),
    makeRemoteUpdateSession()
  )
