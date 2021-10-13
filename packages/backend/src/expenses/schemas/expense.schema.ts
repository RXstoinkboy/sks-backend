import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../users/schemas/user.schema';

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

   @Prop({ ref: 'User', type: mongoose.Schema.Types.ObjectId })
   user: User;

   @Prop()
   name: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
