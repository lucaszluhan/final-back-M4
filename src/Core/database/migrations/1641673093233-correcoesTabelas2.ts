import {MigrationInterface, QueryRunner} from "typeorm";

export class correcoesTabelas21641673093233 implements MigrationInterface {
    name = 'correcoesTabelas21641673093233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" DROP CONSTRAINT "user_FK"`);
        await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" RENAME COLUMN "user_uid" TO "userUidUid"`);
        await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" ADD CONSTRAINT "FK_016e85791182d7a83efe70b8a33" FOREIGN KEY ("userUidUid") REFERENCES "trabalho_final_m4"."users"("uid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" DROP CONSTRAINT "FK_016e85791182d7a83efe70b8a33"`);
        await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" RENAME COLUMN "userUidUid" TO "user_uid"`);
        await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" ADD CONSTRAINT "user_FK" FOREIGN KEY ("user_uid") REFERENCES "trabalho_final_m4"."users"("uid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
