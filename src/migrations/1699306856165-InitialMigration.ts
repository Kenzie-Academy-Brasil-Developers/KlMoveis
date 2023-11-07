import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699306856165 implements MigrationInterface {
    name = 'InitialMigration1699306856165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bf513496737d39d54283470c3f9"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "schedulesId" TO "scheduleId"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "realEstateld"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_19c54f24597b318be3892114c75"`);
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_7deb0d9ad35f29df4fc97074250" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_19c54f24597b318be3892114c75" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_19c54f24597b318be3892114c75"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_7deb0d9ad35f29df4fc97074250"`);
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_19c54f24597b318be3892114c75" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "realEstateld" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "scheduleId" TO "schedulesId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bf513496737d39d54283470c3f9" FOREIGN KEY ("schedulesId") REFERENCES "schedules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
