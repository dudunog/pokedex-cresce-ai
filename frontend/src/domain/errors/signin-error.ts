export class SigninError extends Error {
  constructor (error: string, type: string) {
    super(error)
    this.name = type
  }
}
