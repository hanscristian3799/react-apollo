import { gql } from "@apollo/client";

export const getGames = gql`
  query {
    getGames {
      id
      title
      thumbnail_id
      thumbnail_name
      status
      short_description
      genre
      platform
    }
  }
`;
