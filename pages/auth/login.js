import { faCircleNotch, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Head from 'next/head'
import Cookies from 'universal-cookie'
import { useFormik } from 'formik'
import {
  gql,
  useApolloClient
} from '@apollo/client'
import router from 'next/router'
import Snackbar from '../../components/Snackbar'
import React from 'react'
import Input from '../../components/Input'

export default function Login() {
  const cookies = new Cookies()
  const client = useApolloClient()
  const formik = useFormik({
    initialValues: {
      email: cookies.get('email') || '',
      password: cookies.get('password') || ''
    },
    onSubmit: ({ email, password }, { setSubmitting, setErrors }) => {
      setSubmitting(true)
      const GET_USER = gql`
      query {
        user(email: "${email}", password: "${password}") {
          _id
        }
      }
      `
      client.query({
        query: GET_USER
      })
      .then(({ data, error }) => {
        if (error) return setErrors({
          error: "An error happened."
        })

        if (!data.user) {
          setErrors({
            message: 'Email or password is incorrect.'
          })
        } else {
          cookies.set('email', email, { path: '/', expires: new Date(2147483647 * 1000) })
          cookies.set('password', password, { path: '/', expires: new Date(2147483647 * 1000) })
          cookies.set('user', data.user._id, { path: '/', expires: new Date(2147483647 * 1000) })
          router.push('/dashboard')  
        }
      })
      .then(() => setSubmitting(false))
    }
  })
  const [hasCookies, setHasCookies] = React.useState(false)
  React.useEffect(() => {
    setHasCookies(Boolean(cookies.get('user')))
  }, [])

  return (
    <>
    <Head>
      <title>Login</title>
      <meta property="og:title" content="Login" />
      <meta property="og:description" content="Login to create tests." />
    </Head>
    <div className='grid items-center justify-center h-screen'>
      <Snackbar message={formik.errors.error} open={formik.errors.error}
      color='red'
      onClose={() => formik.setErrors({})} />
      <div>
        <form className='block shadow-md rounded-lg bg-white'
        onSubmit={formik.handleSubmit}>
          <Link href='/'>
          <a className='block bg-gradient-to-r from-blue-600 to-purple-400 rounded-t-lg py-3'>
            <h1 className='text-center text-purple-100 text-xl font-bold'>
              {!hasCookies ? "Login" : "Relogin"}
            </h1>
          </a>
          </Link>
          <div className='p-7 grid gap-4 border-r border-l border-gray-200'>
            <Input
            type='email'
            placeholder='Email'
            id='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            disabled={formik.isSubmitting}
            error={formik.errors.message}
            required
            />
            <Input
            type='password'
            placeholder='Password'
            id='password'
            label='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            disabled={formik.isSubmitting}
            error={formik.errors.message}
            required
            />
          </div>
          <button type='submit' className='w-full disabled:cursor-not-allowed bg-gradient-to-r rounded-t-none text-purple-100 from-blue-600 to-purple-400 rounded-b-lg py-2 hover:brightness-95 duration-150'
          disabled={formik.isSubmitting}>
            {!formik.isSubmitting?
            <FontAwesomeIcon icon={faSignInAlt}/>:
            <FontAwesomeIcon icon={faCircleNotch} spin />}
          </button>
        </form>
        <Link href='/auth/signup'>
        <a className='text-xs tracking-wider text-gray-400'>
          Don't have an account? <span className='underline'>Sign up</span>
        </a>
        </Link>
      </div>
    </div>
    </>
  )
}