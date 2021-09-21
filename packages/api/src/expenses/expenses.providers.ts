import { Connection } from 'mongoose';
import {
  EXPENSE,
  EXPENSE_MODEL,
  EXPENSES_DATABASE_CONNECTION,
} from './expenses.constants';
import { ExpenseSchema } from './schemas/expense.schema';

export const expensesProviders = [
  {
    provide: EXPENSE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(EXPENSE, ExpenseSchema),
    inject: [EXPENSES_DATABASE_CONNECTION],
  },
];
