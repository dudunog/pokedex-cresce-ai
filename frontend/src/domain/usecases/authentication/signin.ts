import { type SigninError } from "@/domain/errors/signin-error"
import {
  type SigninHttpErrorResponse,
  type SigninHttpSuccessResponse
} from "@/domain/models"

export interface Signin {
  signin: (email: string, password: string) => Promise<SigninHttpSuccessResponse | SigninError | undefined>
}

export namespace Signin {
  export type Model = SigninHttpSuccessResponse | SigninHttpErrorResponse
}
