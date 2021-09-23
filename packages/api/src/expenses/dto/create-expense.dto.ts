import { ExpenseType } from '../types/expense.types';

export class CreateNewExpenseDto {
  value: number;
  currency?: string;
  type: ExpenseType;
  userId: string;
}
