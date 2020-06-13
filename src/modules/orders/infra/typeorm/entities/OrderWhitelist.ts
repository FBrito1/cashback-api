import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('orders_whitelist')
class OrdersWhitelist {
  @PrimaryColumn()
  cpf: string;

  @Column()
  active: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OrdersWhitelist;
