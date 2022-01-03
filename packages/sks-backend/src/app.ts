import { ApolloServer, gql } from 'apollo-server-express';
import { PORT } from './constants/global';
import { db } from './config/db';
import { errorHandler } from './middleware/errorHandler.middleware';
// import { merge } from 'lodash';
import { notFoundHandler } from './middleware/notFound.middleware';
import router from './routes';
import { setupAppConfig } from './config/app.config';

import * as express from 'express';
import * as http from 'http';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

import { UserAPI } from './api/user/user.controller';
import { userTypeDefs } from './api/user/user.types';

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

const baseTypeDefs = gql`
   type Query
   type Mutation
`;

const typeDefs = [baseTypeDefs, userTypeDefs, expenseTypeDefs];

// TODO: move resolvers to separate file too
const resolvers = {
   Mutation: {
      createUser: (_, { userData }, { dataSources }) =>
         dataSources.UserAPI.create(userData),
      removeUser: (_, { id }, { dataSources }) =>
         dataSources.UserAPI.remove(id),
      updateUser: (_, { id, userData }, { dataSources }) =>
         dataSources.UserAPI.update(id, userData),
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
   console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer(typeDefs, resolvers);
