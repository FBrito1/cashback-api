import { OrderStatusEnum } from '../enums/OrderStatusEnum';

export default interface ICreateOrderDTO {
  order_id: string;
  value: number;
  user_id: string;
  cashback_percentage: number;
  cashback_value: number;
  status: OrderStatusEnum;
  date: Date;
}
