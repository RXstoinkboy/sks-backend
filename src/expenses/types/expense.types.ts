import { Expense } from '../schemas/expense.schema';

export enum ExpenseType {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
}

export type FindAllExpensesReturnType = Promise<Expense[]>;
export type CreateNewExpenseReturnType = Promise<Expense>;
