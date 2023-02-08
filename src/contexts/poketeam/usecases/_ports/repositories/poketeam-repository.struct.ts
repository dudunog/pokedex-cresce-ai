import { PoketeamModel } from "@contexts/poketeam/domain/models/poketeam-model.struct";
import { CreationModel } from "@shared/protocols/creation-model";

export interface IPoketeamRepository {
  create(data: CreationModel<PoketeamModel>): Promise<PoketeamModel>;
  update(data: PoketeamModel): Promise<PoketeamModel>;
  delete(data: PoketeamModel): Promise<void>;
}
