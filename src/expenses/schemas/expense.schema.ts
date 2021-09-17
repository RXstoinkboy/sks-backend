import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export type ExpenseModel = Model<ExpenseDocument>;
export type ExpenseDocument = Expense & Document;

@Schema()
export class Expense {
  @Prop()
  value: number;

  @Prop()
  currency: string;

  @Prop()
  type: string;

  @Prop()
  userId: string;

  @Prop()
  name: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
