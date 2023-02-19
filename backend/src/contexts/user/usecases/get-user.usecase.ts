import { UserModel } from "@contexts/user/domain/models/user-model.struct";
import { Result } from "@shared/protocols";
import { FailedToFetchUserException } from "./_ports/errors/failed-to-fetch-user.exception";
import { IUserRepository } from "./_ports/repositories/user-repository.struct";
import {
  IGetUserUseCase,
  IGetUserUseCaseRequest,
} from "./_ports/get-user-usecase.struct";

export class GetUserUseCase implements IGetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id }: IGetUserUseCaseRequest): Promise<Result<UserModel>> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      return Result.fail(new FailedToFetchUserException());
    }

    return Result.ok(user);
  }
}
