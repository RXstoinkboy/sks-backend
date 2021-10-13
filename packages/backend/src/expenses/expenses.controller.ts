import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ExpensesService } from './expenses.service';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Controller('expenses')
export class ExpensesController {
   constructor(private readonly expensesService: ExpensesService) {}

   @Get()
   findAllExpenses() {
      return this.expensesService.findAllExpenses();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.expensesService.findOne(id);
   }

   @Patch(':id')
   updateExpense(
      @Param('id') id: string,
      @Body() updateExpenseDto: UpdateExpenseDto,
   ) {
      return this.expensesService.update(id, updateExpenseDto);
   }

   @Post()
   createNewExpense(@Body() createNewExpenseDTO: CreateExpenseDto) {
      return this.expensesService.createNewExpense(createNewExpenseDTO);
   }
}
