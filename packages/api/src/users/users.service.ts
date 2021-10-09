import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserModel } from './schemas/user.schema';
import {
  CreateUserReturnType,
  FindAllUsersReturnType,
  FindUserReturnType,
  RemoveUserReturnType,
} from './types/user.types';

// TODO: serve data validation correctly (probably with pipes)
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: UserModel) {}
  async createUser(createUserDto: CreateUserDto): CreateUserReturnType {
    if (createUserDto.password !== createUserDto.repeatPassword) {
      throw 'Passwords do not match'; // TODO: zmienić na poprawne error handlery, np. new HttpEx
    }

    if (
      !createUserDto.password ||
      !createUserDto.email ||
      !createUserDto.repeatPassword
    ) {
      throw 'Missing required data to create user';
    }

    const user = await this.userModel
      .find({ email: createUserDto.email })
      .exec();

    if (user.length) {
      throw 'User already exists';
    }

    const newUser = new this.userModel({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      password: createUserDto.password,
    });

    return newUser.save();
  }

  findAll(): FindAllUsersReturnType {
    return this.userModel.find().exec();
  }

  findOne(id: string): FindUserReturnType {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, {
      firstName: updateUserDto.firstName,
      lastName: updateUserDto.lastName,
      email: updateUserDto.email,
      password: updateUserDto.password,
    });
  }

  remove(id: string): RemoveUserReturnType {
    return this.userModel.findByIdAndRemove(id).exec();
  }
}
