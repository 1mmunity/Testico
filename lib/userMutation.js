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

/**
 * 
 * @param {*} id 
 * @param {import('@apollo/client').ApolloClient} client 
 * @returns 
 */
export function deleteUser(id, client) {
  const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
    }
  }
  `

  const _ = client.mutate({
    mutation: DELETE_USER,
    variables: {
      id
    }
  })

  return _
}