import { ExpenseType } from '../types/expense.types';

export class CreateExpenseDto {
   value: number;
   currency?: string;
   type: ExpenseType;
   user: string;
}
