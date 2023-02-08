import { Result } from "@shared/protocols";
import { PoketeamModel } from "../domain/models/poketeam-model.struct";
import { ICreatePoketeamUseCase, ICreatePoketeamUseCaseDTO } from "./_ports/list-poketeam-usecase.struct";
import { IPoketeamRepository } from "./_ports/repositories/poketeam-repository.struct";

export class CreatePoketeamUseCase implements ICreatePoketeamUseCase {
  constructor(private readonly poketeamRepository: IPoketeamRepository) {}

  async execute({
    name,
    pokemons
  }: ICreatePoketeamUseCaseDTO): Promise<Result<PoketeamModel>> {
    const poketeam = await this.poketeamRepository.create({
      name,
      pokemons
    });

    return Result.ok(poketeam);
  }
}
