import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Head from 'next/head'
import Cookies from 'universal-cookie'
import Input from '../../components/Input'
import { createUser } from '../../lib/userMutation'
import { useFormik } from 'formik'
import { useApolloClient } from '@apollo/client'
import router from 'next/router'

export default function Login() {
  const cookies = new Cookies()
  const client = useApolloClient()
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: ''
    },
    onSubmit: (values, { setErrors, setSubmitting }) => {
      setSubmitting(true)
      if (values.password != values.confirm_password) return setErrors({
        confirm_password: "Passwords do not match."
      })
      createUser(values, client)
      .then(({ data }) => {
        cookies.set('username', values.username, { path: '/', expires: new Date(2147483647 * 1000) })
        cookies.set('password', values.password, { path: '/', expires: new Date(2147483647 * 1000) })
        cookies.set('email', values.email, { path: '/', expires: new Date(2147483647 * 1000) })
        cookies.set('user', data.createUser._id, { path: '/', expires: new Date(2147483647 * 1000) })
        router.push('/dashboard')
      })
      .catch(e => {
        if (e.graphQLErrors[0].extensions.code == 'instance not unique') {
          setErrors({
            email: "Email already exists."
          })
        }
      })
      .then(() => setSubmitting(false))
    }
  })

  return (
    <>
    <Head>
      <title>Sign Up</title>
    </Head>
    <div className='grid items-center justify-center h-screen'>
      <div>
        <form className='block shadow-md rounded-lg bg-white'
        onSubmit={formik.handleSubmit}>
          <Link href='/'>
          <a className='block bg-gradient-to-r from-red-600 to-pink-400 rounded-t-lg py-3'>
            <h1 className='text-center text-pink-100 text-xl font-bold'>
              Sign Up
            </h1>
          </a>
          </Link>
          <div className='p-7 grid gap-4 border-r border-l border-gray-200'>
            <Input
            className='hover:border-red-400 focus:border-red-400'
            type='text'
            placeholder='Username'
            id='username'
            label='Username'
            value={formik.values.username}
            onChange={formik.handleChange}
            required
            />
            <Input
            className='hover:border-red-400 focus:border-red-400'
            type='email'
            placeholder='Email'
            id='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            required
            />
            <Input
            className='hover:border-red-400 focus:border-red-400'
            type='password'
            placeholder='Password'
            id='password'
            label='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.confirm_password}
            required
            />
            <Input
            className='hover:border-red-400 focus:border-red-400'
            type='password'
            placeholder='Confirm Password'
            id='confirm_password'
            label='Confirm Password'
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            error={formik.errors.confirm_password}
            required
            />
          </div>
          <button type='submit' className='rounded-t-none w-full bg-gradient-to-r from-red-600 to-pink-400 rounded-b-lg py-2 hover:brightness-95 duration-150'>
            <FontAwesomeIcon icon={faSignInAlt} className='text-pink-100'/>
          </button>
        </form>
        <Link href='/auth/login'>
        <a className='text-xs tracking-wider text-gray-400'>
          Already have an account? <span className='underline'>Login</span>
        </a>
        </Link>
      </div>
    </div>
    </>
  )
}