import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense } from './expenses.types';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  getAllExpenses(): Expense[] {
    return this.expensesService.getAllExpenses();
  }

  @Post()
//   TODO: dokończyć tę metodę. Jeszcze jest potrzebne DTO
  createNewExpense(@Body): void {
    this.expensesService.createNewExpense(newExpense);
  }
}
