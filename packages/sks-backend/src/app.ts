import { ApolloServer, gql } from 'apollo-server-express';
import { DataSource } from 'apollo-datasource';
import { PORT } from './constants/global';
import { db } from './config/db';
import { errorHandler } from './middleware/errorHandler.middleware';
// import { merge } from 'lodash';
import { notFoundHandler } from './middleware/notFound.middleware';
import router from './routes';
import { setupAppConfig } from './config/app.config';

import * as express from 'express';
import * as http from 'http';
import * as mongoose from 'mongoose';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

const baseTypeDefs = gql`
   type Query
   type Mutation
`;

const userTypeDefs = gql`
   type User {
      id: ID!
      email: String!
      password: String!
      expenses: [Expense]!
   }

   input CreateUserDTO {
      email: String!
      password: String!
   }

   input UpdateUserDTO {
      email: String
      password: String
   }

   extend type Query {
      user(id: ID!): User
      users: [User]!
   }

   extend type Mutation {
      createUser(newUser: UpdateUserDTO): User
      updateUser(userData: UpdateUserDTO): User
      removeUser(userId: ID!): String
   }
`;

// TODO: 'expenses' Query pewnie jeszcze będzie do wywalenia, bo raczej nie ma sensu pobierać wszystkie wydatki
// TODO: trzeba to będzie jeszcze porządnie zmodularyzować
const expenseTypeDefs = gql`
   type Expense {
      id: ID!
      value: Int!
      user: User!
   }

   input CreateExpenseDTO {
      value: Int!
   }

   input UpdateExpenseDTO {
      value: Int!
   }

   extend type Query {
      expense(id: ID!): Expense
      expenses: [Expense]!
   }

   extend type Mutation {
      createExpense(newExpense: CreateExpenseDTO): Expense
      updateExpense(expenseData: UpdateExpenseDTO): Expense
      removeExpense(expenseId: ID!): Boolean
   }
`;

const typeDefs = [baseTypeDefs, userTypeDefs, expenseTypeDefs];

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

const UserModel = mongoose.model<User>('User', UserSchema);
class UserAPI extends DataSource {
   createUser = async ({ newUser }) => {
      const newUserEntity = new UserModel(newUser);
      // TODO: poprawić jeszcze to żeby zwracało wynik, bo aktualnie user się tworzy ale nie da się zwrócić stworzonego usera
      const createdUser = await newUserEntity.save();
      return createdUser;
   };
}

const resolvers = {
   Mutation: {
      createUser: (_, args, { dataSources }) => {
         dataSources.UserAPI.createUser(args);
      },
   },
   Query: {},
};

const startServer = async (typeDefs, resolvers) => {
   const app = express();
   const httpServer = http.createServer(app);

   const server = new ApolloServer({
      dataSources: () => ({
         UserAPI: new UserAPI(),
      }),
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      resolvers,
      typeDefs,
   });

   await server.start();
   server.applyMiddleware({ app });

   setupAppConfig(app);
   db();

   app.use(router);

   // middleware
   app.use(notFoundHandler);
   app.use(errorHandler);

   await new Promise<void>((resolve) =>
      httpServer.listen({ port: PORT }, resolve),
   );

   // eslint-disable-next-line no-console
   console.log(`Server read as http://localhost:${PORT}${server.graphqlPath}`);
};

startServer(typeDefs, resolvers);
