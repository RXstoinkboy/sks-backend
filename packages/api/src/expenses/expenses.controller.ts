import { CreateNewExpenseDto } from './dto/create-expense.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import {
  CreateNewExpenseReturnType,
  FindAllExpensesReturnType,
} from './types/expense.types';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  findAllExpenses(): FindAllExpensesReturnType {
    return this.expensesService.findAllExpenses();
  }

  @Post()
  createNewExpense(
    @Body() createNewExpenseDTO: CreateNewExpenseDto,
  ): CreateNewExpenseReturnType {
    return this.expensesService.createNewExpense(createNewExpenseDTO);
  }
}
