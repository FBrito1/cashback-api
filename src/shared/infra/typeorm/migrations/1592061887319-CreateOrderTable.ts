import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateOrderTable1592061887319
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'order_id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'value',
            type: 'numeric',
          },
          {
            name: 'cashback_percentage',
            type: 'integer',
          },
          {
            name: 'cashback_value',
            type: 'numeric',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'user_id',
            type: 'uuid',
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
        foreignKeys: [
          {
            name: 'UserReference',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
