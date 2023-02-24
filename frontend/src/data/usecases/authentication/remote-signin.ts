import { HttpStatusCode, type HttpClient } from "@/data/protocols/http"
import { SigninError } from "@/domain/errors/signin-error"
import { type SigninHttpErrorResponse, type SigninHttpSuccessResponse } from "@/domain/models"
import {
  type UpdateSession,
  type Signin,
  type StoreAuthentication,
  type LoadUser
} from "@/domain/usecases"
import { makeSigninErrorMessage } from "@/main/factories/information"

export class RemoteSignin implements Signin {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<Signin.Model>,
    private readonly storeAuthentication: StoreAuthentication,
    private readonly loadUser: LoadUser,
    private readonly updateSession: UpdateSession
  ) { }

  async signin (email: string, password: string): Promise<SigninHttpSuccessResponse | SigninError | undefined> {
    try {
      const httpResponse = await this.httpClient.request({
        url: this.url,
        method: "post",
        body: {
          email,
          password
        }
      })

      const signinResponse = httpResponse.body as SigninHttpSuccessResponse

      this.updateSession.update(String(signinResponse.sessionToken), String(signinResponse.refreshToken), signinResponse)

      switch (httpResponse.statusCode) {
        case HttpStatusCode.ok:
          // eslint-disable-next-line no-case-declarations
          const user = await this.loadUser.load(signinResponse?.userInfo?.userId)

          this.storeAuthentication.login({
            isAuthenticated: true,
            isInitialized: true,
            user
          })

          return signinResponse
        case HttpStatusCode.noContent:
          return
        default:
          // eslint-disable-next-line no-case-declarations
          const signinErrorResponse = signinResponse as unknown as SigninHttpErrorResponse
          signinErrorResponse.error = makeSigninErrorMessage(signinErrorResponse.type)
          await this.storeAuthentication.error(signinErrorResponse)
          return new SigninError(signinErrorResponse.type, signinErrorResponse.type)
      }
    } catch (error) {
    }
  }
}
