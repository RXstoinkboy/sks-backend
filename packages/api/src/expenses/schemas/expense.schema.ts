import { User } from './../../users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ExpenseModel = mongoose.Model<ExpenseDocument>;
export type ExpenseDocument = Expense & Document;

@Schema()
export class Expense {
  @Prop()
  value: number;

  @Prop()
  currency: string;

  @Prop()
  type: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  name: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
