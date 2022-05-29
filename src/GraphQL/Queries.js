import { gql } from "@apollo/client";

export const getUsers = gql`
  query {
    getAllUsers {
      firstName
    }
  }
`;
