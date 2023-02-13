import { HashComparer, Result } from "@shared/protocols";
import { AccountModel } from "../domain/models/account-model.struct";
import { IAccountRepository } from "./_ports/repositories/account-repository.struct";
import {
  IAccessAccountUseCase,
  IAccessAccountUseCaseDTO,
} from "./_ports/access-account-usecase.struct";

import { IUserRepository } from "./_ports/repositories/user-repository.struct";
import { UserDoesNotExistException } from "./_ports/errors/user-does-not-exists.exception";
import { AccountDoesNotExistException } from "./_ports/errors/account-does-not-exist.exception";

export class AccessAccountAccountUseCase implements IAccessAccountUseCase {
  constructor(
    private accountRepository: IAccountRepository,
    private userRepository: IUserRepository,
    private crypt: HashComparer,
  ) {}

  async execute({
    email,
    password,
  }: IAccessAccountUseCaseDTO): Promise<
    Result<Pick<AccountModel, "id" | "userId">>
  > {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return Result.fail(new UserDoesNotExistException());
    }

    const account = await this.accountRepository.findOne({
      userId: user.id,
    });

    if (!account) {
      return Result.fail(new AccountDoesNotExistException());
    }

    const isPasswordsEqual = await this.crypt.compare(
      password,
      account.password,
    );

    if (!isPasswordsEqual) {
      return Result.fail(new AccountDoesNotExistException());
    }

    return Result.ok({
      id: account.id,
      userId: account.userId,
      email: user.email
    });
  }
}
