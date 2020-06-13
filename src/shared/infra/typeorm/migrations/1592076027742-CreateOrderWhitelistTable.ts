import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateOrderWhitelistTable1592076027742
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders_whitelist',
        columns: [
          {
            name: 'cpf',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'active',
            type: 'integer',
            default: 1,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders_whitelist');
  }
}
