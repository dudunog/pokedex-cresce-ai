import { MigrationInterface, QueryRunner } from "typeorm";

export class default1676251923223 implements MigrationInterface {
    name = 'default1676251923223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "poketeam" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "poketeam" ADD CONSTRAINT "UQ_f48284660b5e9177c5f35482331" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "poketeam" ADD CONSTRAINT "FK_f48284660b5e9177c5f35482331" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "poketeam" DROP CONSTRAINT "FK_f48284660b5e9177c5f35482331"`);
        await queryRunner.query(`ALTER TABLE "poketeam" DROP CONSTRAINT "UQ_f48284660b5e9177c5f35482331"`);
        await queryRunner.query(`ALTER TABLE "poketeam" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
