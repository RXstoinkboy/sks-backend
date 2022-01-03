import { UserModel } from './user.model';

export const createUser = async (newUser) => {
   // TODO: check if there is such email in use already
   // TODO: check if password is correct etc
   const createdUser = await new UserModel(newUser).save();

   return {
      message: 'User created',
      success: true,
      user: createdUser,
   };
};

export const updateUser = async (id, userData) => {
   const updatedUser = await UserModel.findByIdAndUpdate(id, userData, {
      new: true,
   });

   return {
      message: 'User data updated',
      success: true,
      user: updatedUser,
   };
};

export const removeUser = async (id) => {
   await UserModel.findByIdAndDelete(id);

   return {
      message: 'User removed from database',
      success: true,
   };
};
