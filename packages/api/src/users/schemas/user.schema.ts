import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export type UserModel = Model<UserDocument>;
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
