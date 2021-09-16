import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ExpensesModule],
})
export class AppModule {}
