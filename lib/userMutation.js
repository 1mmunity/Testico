import {
  gql
} from '@apollo/client'

/**
 * 
 * @param {*} data 
 * @param {import('@apollo/client').ApolloClient} client 
 */
export function createUser(data, client) {
  const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(data: {
      username: $username,
      email: $email,
      password: $password,
      tests: []
    }) {
      _id
    }
  }
  `
  const _ = client.mutate({
    mutation: CREATE_USER,
    variables: data
  })
  return _
}