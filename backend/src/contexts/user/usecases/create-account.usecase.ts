import { Hasher, Result } from "@shared/protocols";
import { AccountAlreadyExistException } from "./_ports/errors/account-already-exists.exception";
import { AccountModel } from "../domain/models/account-model.struct";
import {
  ICreateAccountUseCase,
  ICreateAccountUseCaseDTO,
} from "./_ports/create-account-usecase.struct";
import { IAccountRepository } from "./_ports/repositories/account-repository.struct";

export class CreateAccountUseCase implements ICreateAccountUseCase {
  constructor(
    private accountRepository: IAccountRepository,
    private hasher: Hasher,
  ) {}

  async execute({
    userId,
    password,
  }: ICreateAccountUseCaseDTO): Promise<
    Result<Omit<AccountModel, "password">>
  > {
    const existingAccount = await this.accountRepository.findOne({ userId });

    if (existingAccount) {
      return Result.fail(new AccountAlreadyExistException());
    }

    const encryptedPassword = await this.hasher.hash(password);

    const { password: _, ...createdAccount } =
      await this.accountRepository.create({
        userId,
        password: encryptedPassword
      });

    return Result.ok(createdAccount);
  }
}
