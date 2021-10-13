import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ExpensesModule } from './expenses/expenses.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
   controllers: [AppController],
   imports: [ExpensesModule, DatabaseModule, ConfigModule, UsersModule],
   providers: [AppService],
})
export class AppModule {}
