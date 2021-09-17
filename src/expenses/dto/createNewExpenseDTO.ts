import { ExpenseType } from '../types/expense.types';

export class CreateNewExpenseDTO {
  value: number;
  currency?: string;
  type: ExpenseType;
}
