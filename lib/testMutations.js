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
        maxParticipants
        participated
        foreColor
        backColor
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

export async function createTest(client, user, data) {
  const date = new Date()
  const CREATE_TEST = gql`
  mutation createTestMutation($data: TestInput!) {
    createTest(data: $data) {
      _id
      title
      maxParticipants
      participated
      foreColor
      backColor
      status
    }
  }
  `

  const UPDATE_USER = gql`
  mutation updateUserMutation($id: ID!, $data: UserInput!) {
    updateUser(id: $id, data: $data) {
      tests {
        _id
        title
        maxParticipants
        participated
        foreColor
        backColor
        status
      }
    }
  }
  `

  const res = await client.mutate({
    mutation: CREATE_TEST,
    variables: {
      data: {
        ...data,
        participated: 0,
        createdAt: date,
        lastUpdatedAt: date
      }
    } 
  })
  .catch(console.log)

  const res_user = await client.mutate({
    mutation: UPDATE_USER,
    variables: {
      id: user._id,
      data: {
        email: user.email,
        password: user.password,
        username: user.username,
        tests: [...user.tests.map(t => t._id), res.data.createTest._id]
      }
    }
  })
  .catch(console.log)

  return res_user
}