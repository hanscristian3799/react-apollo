import { gql } from "@apollo/client";

export const insertUser = gql`
  mutation {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;
