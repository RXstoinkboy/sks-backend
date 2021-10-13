import { User, UserSchema } from './schemas/user.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
   controllers: [UsersController],
   imports: [
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
   ],
   providers: [UsersService],
})
export class UsersModule {}
