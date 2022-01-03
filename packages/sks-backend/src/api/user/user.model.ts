import * as mongoose from 'mongoose';

interface User extends mongoose.Document {
   email: string;
   password: string;
   expenses: any[]; // TODO: replace with Expense model
}

const UserSchema = new mongoose.Schema<User>({
   email: {
      required: true,
      type: String,
   },
   expenses: {
      required: true,
      type: [],
   },
   password: {
      required: true,
      type: String,
   },
});

export const UserModel = mongoose.model<User>('User', UserSchema);
