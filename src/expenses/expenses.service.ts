import { Injectable } from '@nestjs/common';
import { Expense } from './expenses.types';

@Injectable()
export class ExpensesService {
  private expenses: Expense[] = []; // TODO: zmienić to na dane z DB

  getAllExpenses(): Expense[] {
    return this.expenses;
  }

  createNewExpense(newExpense: Expense): void {
    this.expenses = [...this.expenses, newExpense];
  }
}
