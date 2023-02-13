import { PoketeamModel } from "@contexts/poketeam/domain/models/poketeam-model.struct"
import { UserEntity } from "../../../user/external/entities/user-entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("poketeam")
export class PoketeamEntity implements PoketeamModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column("text", {array: true })
  pokemons: string[];

  @OneToOne(() => UserEntity, (entity: UserEntity) => entity.id)
  @JoinColumn()
  user: UserEntity;

  @Column()
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
