import { type UserModel, type SigninHttpErrorResponse } from "@/domain/models"

export interface AuthenticationState {
  isLoading: boolean
  isAuthenticated: boolean
  isInitialized: boolean
  user: UserModel | null
  error: SigninHttpErrorResponse | null
};
