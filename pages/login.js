import { useFormik } from "formik"
import Field from "../components/Field"
import Link from '../components/Link'
import * as Yup from 'yup'
import Snackbar from "../components/Snackbar"
import React from "react"

const schema = Yup.object().shape({
  email: Yup
  .string()
  .email('Invalid Email')
  .required('Required'),
  password: Yup
  .string()
  .required('Required')
})

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    onSubmit: (v, { setSubmitting }) => {
      setSubmitting(true)
    }
  })

  const snackbar = React.useState({
    open: true,
    message: 'Failed to connect to the backend.\nPlease try again later.',
    status: 'error'
  })

  return (
    <>
    <Snackbar snackbar={snackbar} />
    <div className='w-screen h-screen bg-black flex justify-center relative'>
      <div className='w-80 mx-auto relative mt-32'>
        <div className='text-green-400 mx-auto tracking-wide w-max px-3 py-1 mb-1.5 font-medium'>
          <i className='fas fa-scroll text-green-400 mr-1.5'></i>
          Login
        </div>
        <form
        className='w-full relative rounded-lg bg-gray-900'
        onSubmit={formik.handleSubmit}
        >
          <div className='p-5 grid gap-2'>
            <Field
            type='email'
            placeholder='Email'
            form={formik}
            name='email'
            />
            <Field
            type='password'
            placeholder='Password'
            form={formik}
            name='password'
            />
          </div>
          <button type='submit' className={`bg-gradient-to-r from-green-600 to-teal-400 text-white hover:opacity-75 duration-150 w-full rounded-b-lg py-2 disabled:cursor-not-allowed disabled:opacity-50`}
          disabled={formik.isSubmitting || formik.errors.email || formik.errors.password}>
            {!formik.isSubmitting?
            <i className='fas fa-sign-in-alt text-center'></i>:
            <><i className='fas fa-circle-notch text-center animate-spin mr-1'></i> Loading...</>}
          </button>
        </form>
      </div>
      <div className='absolute bottom-0 p-5 bottom-to-top a-delay-2'>
        <div className='overflow-hidden relative tracking-wide bg-gradient-to-r from-purple-500 to-indigo-500 shadow-sm px-8 py-3 text-white font-light'>
          <p className='relative z-10'>Don't have an account? <Link href='/register' className='font-bold'>Register</Link></p>
          <i className='absolute very-big fas fa-fingerprint text-white opacity-10 -top-10 left-0'></i>
        </div>
      </div>
    </div>
    </>
  )
}