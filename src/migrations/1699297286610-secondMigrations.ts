import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigrations1699297286610 implements MigrationInterface {
    name = 'SecondMigrations1699297286610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_d64118a1cb2b2b54747d5851fe9"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_fa507c259ec4989cdfa75dd7c61"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_b2e54237377c6f210dee4d15fb9"`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "realEstatesId" TO "realEstateId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "REL_d64118a1cb2b2b54747d5851fe"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "addressesId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "categoriesId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "UQ_c7a1c763ff260ac28674afa8c60" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "categorieId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "value" numeric(12,2) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_6ee21b37f93e43db0b2433c4e12" FOREIGN KEY ("categorieId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_ac3131bb922483053abebc5e9ff" FOREIGN KEY ("realEstateId") REFERENCES "realEstates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_ac3131bb922483053abebc5e9ff"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_6ee21b37f93e43db0b2433c4e12"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "categorieId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "UQ_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "categoriesId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "addressesId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "REL_d64118a1cb2b2b54747d5851fe" UNIQUE ("addressesId")`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "realEstateId" TO "realEstatesId"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_b2e54237377c6f210dee4d15fb9" FOREIGN KEY ("realEstatesId") REFERENCES "realEstates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_fa507c259ec4989cdfa75dd7c61" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_d64118a1cb2b2b54747d5851fe9" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
