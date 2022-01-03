import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
   type User {
      id: ID!
      email: String!
      password: String!
      expenses: [Expense]!
   }

   type CreateOrUpdateResponseType {
      success: Boolean!
      message: String
      user: User!
   }

   type RemoveUserResponseType {
      success: Boolean!
      message: String!
   }

   input CreateOrUpdateUserDTO {
      email: String!
      password: String!
   }

   input UpdateUserDTO {
      id: ID!
      email: String
      password: String
   }

   extend type Query {
      user(id: ID!): User
      allUsers: [User!]!
      usersByIds(ids: [ID!]!): [User!]!
   }

   extend type Mutation {
      createUser(userData: CreateOrUpdateUserDTO): CreateOrUpdateResponseType
      updateUser(
         id: ID!
         userData: CreateOrUpdateUserDTO
      ): CreateOrUpdateResponseType
      removeUser(id: ID!): RemoveUserResponseType
   }
`;
