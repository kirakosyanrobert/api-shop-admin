import { gql } from '@apollo/client';

export const GET_LOGGED_IN_CUSTOMER = gql`
  query getUser($id: String = "8a278415-015b-4cfd-97a9-12c2f8e4a721") {
    me(id: $id) {
      id
      name
      email
      addresses {
        id
        type
        title
        location  
      }
      contacts {
        id
        type
        number
      }
      card {
        id
        type
        cardType
        title
        lastFourDigit
      }
    }
  }
`;
   