import { AccountModel } from "@contexts/user/domain/models/account-model.struct";
import { CreationModel } from "@shared/protocols/creation-model";
import { UseCase } from "@shared/protocols/usecase";

export type ICreateAccountUseCaseDTO = CreationModel<AccountModel>;

export type ICreateAccountUseCase = UseCase<
  ICreateAccountUseCaseDTO,
  Omit<AccountModel, "password">
>;
