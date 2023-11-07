import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699301316056 implements MigrationInterface {
    name = 'InitialMigration1699301316056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_6ee21b37f93e43db0b2433c4e12"`);
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "categorieId" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "sold" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "sold" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "categoryId" TO "categorieId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_6ee21b37f93e43db0b2433c4e12" FOREIGN KEY ("categorieId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
