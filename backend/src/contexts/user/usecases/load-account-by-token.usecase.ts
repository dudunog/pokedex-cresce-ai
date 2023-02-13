import { Decrypter, Result } from "@shared/protocols";
import { AccountModel } from "../domain/models/account-model.struct";
import { FailedToFetchAccountException } from "./_ports/errors/failed-to-fetch-account.exception";
import { InvalidAccessException } from "./_ports/errors/invalid-access.exception";
import {
  ILoadAccountByTokenRequest,
  ILoadAccountByTokenUseCase,
} from "./_ports/load-account-by-token-struct";
import { IAccountRepository } from "./_ports/repositories/account-repository.struct";

export class LoadAccountByTokenUsecase implements ILoadAccountByTokenUseCase {
  constructor(
    private accountRepository: IAccountRepository,
    private decrypter: Decrypter,
  ) {}

  async execute({
    accessToken,
  }: ILoadAccountByTokenRequest): Promise<Result<AccountModel>> {
    let token;

    try {
      token = await this.decrypter.decrypt(accessToken);
    } catch (error) {
      return Result.fail(new InvalidAccessException());
    }

    const accountId = typeof token === "string" ? token : token?.id;
    if (!accountId) {
      return Result.fail(new FailedToFetchAccountException());
    }
    const account = await this.accountRepository.findOne({ id: accountId });

    if (!account) {
      return Result.fail(new FailedToFetchAccountException());
    }
    return Result.ok(account);
  }
}
