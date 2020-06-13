import { MigrationInterface, QueryRunner } from 'typeorm';

export default class PopulateCreateOrderWhitelistTable1592076342204
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `INSERT INTO orders_whitelist (cpf, active) VALUES (15350946056, 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
