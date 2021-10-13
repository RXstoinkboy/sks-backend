import {
   CreateNewExpenseReturnType as CreateExpenseReturnType,
   ExpenseType,
   FindAllExpensesReturnType,
   FindExpenseReturnType,
   RemoveExpenseReturnType,
   UpdateExpenseReturnType,
} from './types/expense.types';
import { Expense, ExpenseModel } from './schemas/expense.schema';
import { CreateExpenseDto as CreateExpenseDto } from './dto/create-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { UpdateExpenseDto } from './dto/update-expense.dto';

const DEFAULT_CURRENCY = 'PLN'; // TODO: should be replaced to be based on country selected by user

@Injectable()
export class ExpensesService {
   constructor(@InjectModel(Expense.name) private expenseModel: ExpenseModel) {}

   findAllExpenses(): FindAllExpensesReturnType {
      return this.expenseModel.find().exec();
   }

   findOne(id: string): FindExpenseReturnType {
      // return this.expenseModel.findById(id).populate('user').exec();  <-- to jest wersja jeżeli zwracamy również cały połączony dokument usera
      return this.expenseModel.findById(id).exec();
   }

   update(
      id: string,
      updateExpenseDto: UpdateExpenseDto,
   ): UpdateExpenseReturnType {
      return this.expenseModel
         .findByIdAndUpdate(id, {
            currency: updateExpenseDto.currency,
            type: updateExpenseDto.type,
            value: updateExpenseDto.value,
         })
         .exec();
   }

   remove(id: string): RemoveExpenseReturnType {
      return this.expenseModel.findByIdAndRemove(id).exec();
   }

   createNewExpense(
      createExpenseDTO: CreateExpenseDto,
   ): CreateExpenseReturnType {
      const newExpense = new this.expenseModel({
         ...createExpenseDTO,
         currency: createExpenseDTO?.currency ?? DEFAULT_CURRENCY,
         type: createExpenseDTO?.type ?? ExpenseType.OUTCOME,
         user: createExpenseDTO.user,
      });

      return newExpense.save();
   }
}
