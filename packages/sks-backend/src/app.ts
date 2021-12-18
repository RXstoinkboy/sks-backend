import { ApolloServer, gql } from 'apollo-server-express';
import { PORT } from './constants/global';
import { db } from './config/db';
import { errorHandler } from './middleware/errorHandler.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';
import router from './routes';
import { setupAppConfig } from './config/app.config';

import * as express from 'express';
import * as http from 'http';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

const typeDefs = gql`
   type Query {
      hello: String!
   }
`;
const resolvers = {
   Query: {
      hello: () => 'hello',
   },
};

const startServer = async (typeDefs, resolvers) => {
   const app = express();
   const httpServer = http.createServer(app);

   const server = new ApolloServer({
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
