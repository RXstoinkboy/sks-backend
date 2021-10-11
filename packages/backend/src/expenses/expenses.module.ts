import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { Expense, ExpenseSchema } from './schemas/expense.schema';

@Module({
   imports: [
      MongooseModule.forFeature([
         { schema: ExpenseSchema, name: Expense.name },
      ]),
   ],
   controllers: [ExpensesController],
   providers: [ExpensesService],
})
export class ExpensesModule {}