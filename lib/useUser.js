import React from 'react'
import Cookies from 'universal-cookie'
import router from 'next/router'
import { gql } from '@apollo/client'

/**
 * 
 * @param {import('@apollo/client').ApolloClient} client 
 * @returns 
 */
export default function useUser(client) {
  const cookies = new Cookies()
  const GET_USER = gql`
  query getUser($email: String!, $password: String!) {
    user(email: $email, password: $password) {
      _id
      username
      email
      password
      tests {
        _id
        title
        maxParticipants
        participated
        themeColor
        status
      }
    }
  }
  `
  const [loading, setLoading] = React.useState(true)
  const [res, setRes] = React.useState(null)
  React.useEffect(() => {
    const email = cookies.get('email')
    const password = cookies.get('password')
    if (!email || !password) return router.push('/auth/login')

    client.query({
      query: GET_USER,
      variables: {
        email,
        password
      }
    })
    .then(({ data, error }) => {
      if (error) console.error(error)
      if (!data.user) return router.push('/auth/login')
      setLoading(false)
      setRes(data)
    })
    
  }, [])
  return {
    loading,
    data: res
  }
}