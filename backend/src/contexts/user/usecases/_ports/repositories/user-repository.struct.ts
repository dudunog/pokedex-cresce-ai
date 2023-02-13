import { UserModel } from "@contexts/user/domain/models/user-model.struct";

export interface IUserRepository {
  create(data: Omit<UserModel, "id">): Promise<UserModel>;
  findById(id: string): Promise<UserModel>;
  findByEmail(email: string): Promise<UserModel>;
}
