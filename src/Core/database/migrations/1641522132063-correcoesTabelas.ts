import { MigrationInterface, QueryRunner } from 'typeorm';

export class correcoesTabelas1641522132063 implements MigrationInterface {
   name = 'correcoesTabelas1641522132063';

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."users" ADD "name" character varying NOT NULL`);
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."users" ADD "password" character varying NOT NULL`);
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" DROP COLUMN "description"`);
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" ADD "description" character varying(50) NOT NULL`);
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" DROP COLUMN "detail"`);
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" ADD "detail" character varying(500) NOT NULL`);
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" DROP COLUMN "detail"`);
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" ADD "detail" character varying NOT NULL`);
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" DROP COLUMN "description"`);
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."notes" ADD "description" character varying NOT NULL`);
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."users" DROP COLUMN "password"`);
      await queryRunner.query(`ALTER TABLE "trabalho_final_m4"."users" DROP COLUMN "name"`);
   }
}
