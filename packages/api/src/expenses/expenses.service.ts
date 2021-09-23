import { Injectable } from '@nestjs/common';
import { CreateNewExpenseDto as CreateExpenseDto } from './dto/create-expense.dto';
import {
  CreateNewExpenseReturnType as CreateExpenseReturnType,
  ExpenseType,
  FindAllExpensesReturnType,
} from './types/expense.types';
import { InjectModel } from '@nestjs/mongoose';
import { Expense, ExpenseModel } from './schemas/expense.schema';

const DEFAULT_CURRENCY = 'PLN'; // TODO: should be replaced to be based on country selected by user

// TODO: ogarnąć jeszcze temat połączenia Usera z Expense
@Injectable()
export class ExpensesService {
  constructor(@InjectModel(Expense.name) private expenseModel: ExpenseModel) {}

  findAllExpenses(): FindAllExpensesReturnType {
    return this.expenseModel.find().exec();
  }

  createNewExpense(
    createExpenseDTO: CreateExpenseDto,
  ): CreateExpenseReturnType {
    const newExpense = new this.expenseModel({
      ...createExpenseDTO,
      user: createExpenseDTO.userId,
      currency: createExpenseDTO?.currency ?? DEFAULT_CURRENCY,
      type: createExpenseDTO?.type ?? ExpenseType.OUTCOME,
    });

    return newExpense.save();
  }
}
