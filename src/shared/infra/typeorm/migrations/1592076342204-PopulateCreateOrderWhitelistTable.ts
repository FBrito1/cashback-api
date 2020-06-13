import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { OrderWhitelistSeed } from '../seeds/OrderWhitelistSeed.seed';

export default class PopulateCreateOrderWhitelistTable1592076342204
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await getRepository('orders_whitelist').save(OrderWhitelistSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
