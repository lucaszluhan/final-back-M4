import { MigrationInterface, QueryRunner } from 'typeorm';

export class addNoteTableAndUserNotesColumn1640568200897 implements MigrationInterface {
   name = 'addNoteTableAndUserNotesColumn1640568200897';

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
         `CREATE TABLE "trabalho_final_m4"."notes" ("uid" uuid NOT NULL, "note_numb" integer NOT NULL, "description" character varying NOT NULL, "detail" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_uid" uuid, CONSTRAINT "PK_04602e342ac8a8a082686084835" PRIMARY KEY ("uid"))`
      );
      await queryRunner.query(
         `ALTER TABLE "trabalho_final_m4"."notes" ADD CONSTRAINT "user_FK" FOREIGN KEY ("user_uid") REFERENCES "trabalho_final_m4"."users"("uid") ON DELETE NO ACTION ON UPDATE NO ACTION`
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" DROP CONSTRAINT "user_FK"`);
      await queryRunner.query(`DROP TABLE "trabalho_final_m4"."notes"`);
   }
}
