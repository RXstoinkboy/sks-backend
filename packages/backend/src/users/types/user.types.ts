import { User } from '../schemas/user.schema';

export type CreateUserReturnType = Promise<User>;
export type FindAllUsersReturnType = Promise<User[]>;
export type FindUserReturnType = Promise<User>;
export type RemoveUserReturnType = Promise<User>;
