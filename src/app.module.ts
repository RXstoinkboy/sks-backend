import { ConfigModule } from './config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ExpensesModule, DatabaseModule, ConfigModule],
})
export class AppModule {}
