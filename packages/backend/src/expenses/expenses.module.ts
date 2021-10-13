import { Expense, ExpenseSchema } from './schemas/expense.schema';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   controllers: [ExpensesController],
   imports: [
      MongooseModule.forFeature([
         { name: Expense.name, schema: ExpenseSchema },
      ]),
   ],
   providers: [ExpensesService],
})
export class ExpensesModule {}
