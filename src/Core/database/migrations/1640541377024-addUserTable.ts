import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUserTable1640541377024 implements MigrationInterface {
   name = 'addUserTable1640541377024';

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
         `CREATE TABLE "trabalho_final_m4"."users" ("uid" uuid NOT NULL, "notes_numb" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "users_pk" PRIMARY KEY ("uid"))`
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE "trabalho_final_m4"."users"`);
   }
}
