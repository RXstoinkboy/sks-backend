import { Injectable } from '@nestjs/common';
import { CreateNewExpenseDTO } from './dto/createNewExpenseDTO';
import {
  CreateNewExpenseReturnType,
  ExpenseType,
  FindAllExpensesReturnType,
} from './types/expense.types';
import { InjectModel } from '@nestjs/mongoose';
import { Expense, ExpenseModel } from './schemas/expense.schema';

const DEFAULT_CURRENCY = 'PLN'; // TODO: should be replaced to be based on country selected by user

@Injectable()
export class ExpensesService {
  constructor(@InjectModel(Expense.name) private expenseModel: ExpenseModel) {}

  findAllExpenses(): FindAllExpensesReturnType {
    return this.expenseModel.find().exec();
  }

  createNewExpense(
    createNewExpenseDTO: CreateNewExpenseDTO,
  ): CreateNewExpenseReturnType {
    const newExpense = new this.expenseModel({
      ...createNewExpenseDTO,
      userId: 'abc',
      currency: createNewExpenseDTO?.currency ?? DEFAULT_CURRENCY,
      type: createNewExpenseDTO?.type ?? ExpenseType.OUTCOME,
      // TODO: dodać również name
    });

    return newExpense.save();
  }
}
