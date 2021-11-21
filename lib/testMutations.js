import {
  gql
} from '@apollo/client'

export function deleteTest(client, id, user) {
  const DELETE_TEST = gql`
  mutation deleteTestMutation(
    $test_id: ID!,
    $id: ID!,
    $username: String!,
    $email: String!,
    $password: String!,
    $tests: [ID!]
  ) {
    deleteTest(id: $test_id) {
      title
    }

    updateUser(id: $id, data: {
      username: $username,
      email: $email,
      password: $password,
      tests: $tests
    }) {
      tests {
        _id
        title
        maxParticipant
        participated
        themeColor
        status
      }
    }
  }
  `

  const _ = client.mutate({
    mutation: DELETE_TEST,
    variables: {
      test_id: id,
      id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      tests: user.tests.filter(test => test._id !== id).map(test => `${test._id}`)
    }
  })
  return _
}