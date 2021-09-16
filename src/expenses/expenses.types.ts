enum ExpenseType {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
}

export interface Expense {
  value: number;
  currency: string; // TODO: zmienić string na jakiś lepszy typ
  type: ExpenseType;
}
