import { MissingParamError } from "@shared/errors";

export const ArrayValidation = (input: unknown, nameField: string) => {
  console.log('input')
  console.log(input)
  if (!Array.isArray(input)) {
    return new MissingParamError(nameField);
  }

  return null;
}
