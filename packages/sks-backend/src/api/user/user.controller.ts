import { createUser, removeUser, updateUser } from './user.service';
import { DataSource } from 'apollo-datasource';

export class UserAPI extends DataSource {
   create = createUser;
   update = updateUser;
   remove = removeUser;
}
