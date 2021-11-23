import useUser from '../../lib/useUser'
import Loading from '../../components/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCheck, faCircleNotch, faClipboardList, faCog, faExclamationTriangle, faFolderOpen, faLock, faPlus, faPlusCircle, faSignOutAlt, faTrashAlt, faUnlock } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import Link from 'next/link'
import router from 'next/router'
import React from 'react'
import { createTest, deleteTest } from '../../lib/testMutations'
import { deleteUser } from '../../lib/userMutation'
import { useApolloClient } from '@apollo/client'
import Snackbar from '../../components/Snackbar'
import Modal from '../../components/Modal'
import Cookies from 'universal-cookie'
import FormModal from '../../components/FormModal'
import Input from '../../components/Input'
import { useFormik } from 'formik'

function Test({ client, test, index, length, setMessage, setLoading, user, setUser, setModal }) {
  return (
    <div className={`group hover:bg-gray-50 relative duration-200 rounded-none ${index+1 == length && 'rounded-b-lg'}`}>
      <Link href={`/tests/${test._id}`}>
      <a className='w-full p-5 block border-y'>
        <div className='mb-1'>
          <h1 className={`text-xl font-mono`} style={{ color: test.foreColor }}>
            {test.title.length > 20 ? test.title.slice(0, 20) + '...' : test.title}
          </h1>
          <h4 className='text-xs tracking-wide text-gray-400'>(Click to view)</h4>
        </div>
        <div>
          {test.status == 'private' && <p className='w-max inline-flex bg-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded-full mr-1'>Private</p>}
          {test.status == 'public' && <p className='w-max inline-flex bg-green-200 text-green-600 text-xs px-2 py-0.5 rounded-full mr-1'>Public</p>}
        </div>
      </a>
      </Link>
      <button className='absolute right-8 top-0 bottom-0 align-middle' onClick={() => {
        setModal((m) => ({...m,
          open: true,
          message: <>Are you sure you want to delete
          <span className='text-indigo-500 bg-indigo-200 font-mono tracking-normal text-xs px-1.5 py-0.5 rounded mx-1'>{test.title}</span>?</>,
          noButton: 'Cancel',
          confirmButton: <><FontAwesomeIcon icon={faTrashAlt} /> Delete</>,
          onConfirm: () => {
          setLoading(true)
          deleteTest(client, test._id, user)
          .then(() => {
            setMessage([<>Test <b className='mx-1'>{test.title}</b> has been deleted.</>, 'success'])
            setUser((u) => ({...u, tests: u.tests.filter((t) => t._id != test._id)}))
          })
          .catch((d) => {
            setMessage([<>Test <b className='mx-1'>{test.title}</b> could not be deleted.</>, 'error'])
            console.log(d)
          })
          .then(() => {
            setModal(m => ({ ...m, open: false }))
            setLoading(false)
          })
        }}))
      }}>
        <span className='inline-flex w-10 h-10 items-center justify-center rounded-lg bg-red-100 text-red-400 hover:bg-red-400 hover:text-red-100 duration-150'>
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
      </button>
    </div>
  )
}

function Log({ color }) {
  return(
    <Link href='/'>
      <a className='block group tracking-wide w-full rounded-lg mt-3 duration-150 hover:shadow-md hover:-translate-y-0.5'>
      <p className='px-4 py-3 text-sm text-gray-400 border-2 ring-inset ring-gray-200 hover:border-purple-500 rounded-lg hover:ring-0'>
        <b className='text-purple-500'>{"{{username}}"}</b> has submitted the test.
      </p>
      </a>
    </Link>
  )
}

function logout(cookies, setModal, setMessage) {
  setModal((m) => ({...m,
    open: true,
    message: <>Are you sure you want to logout? All cookies will be deleted so <span className='text-red-500'>make sure you remember your credentials.</span></>,
    confirmButton: 'Confirm',
    onConfirm: () => {
      cookies.remove('email')
      cookies.remove('password')
      cookies.remove('user')
      setMessage([<>You have been logged out.</>, 'success'])
      setTimeout(() => {
        router.push('/')
      }, 2500)
    }
  }))
}

function deleteAccount(cookies, setModal, setMessage, userId, client) {
  setModal((m) => ({...m,
    open: true,
    message: <>Are you sure you want to delete your account? <span className='text-red-500'>You cannot undo this.</span></>,
    confirmButton: <><FontAwesomeIcon icon={faTrashAlt} /> Delete</>,
    onConfirm: () => {
      deleteUser(userId, client)
      .then(() => {
        setMessage([<>Your account has been deleted.</>, 'success'])
        cookies.remove('email')
        cookies.remove('password')
        cookies.remove('user')
        setTimeout(() => {
          router.push('/')
        }, 2500)
      })
      .catch((e) => {
        console.log(e)
        setMessage([<>Your account could not be deleted.</>, 'error'])
      })
    }
  }))
}

export default function Dashboard() {
  const client = useApolloClient()
  const cookies = new Cookies()
  const { loading, data } = useUser(client)
  const [_loading, setLoading] = React.useState(true)
  const [user, setUser] = React.useState(null)
  const [message, setMessage] = React.useState(null)

  const [formModal, setFormModal] = React.useState({
    open: false,
    title: '',
    content: () => {},
    noButton: 'Cancel',
    confirmButton: () => {},
    onClose: () => {
      setFormModal(m => ({...m, open: false}))
    },
    onConfirm: (formik) => {}
  })

  const testFormik = useFormik({
    initialValues: {
      title: '',
      description: '',
      status: {
        value: 'private',
        label: <><FontAwesomeIcon icon={faLock} className='text-rose-400 mr-1' /> Private</>
      },
      foreColor: '#000000',
      backColor: '#ffffff',
      maxParticipants: '' 
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      values.status = values.status.value // don't need label
      setSubmitting(true)
      createTest(client, user, values)
      .then(({ data }) => {
        setMessage([<>Test <span className='font-bold mx-1'>{data.updateUser.tests[data.updateUser.tests.length-1].title}</span> has been created.</>, 'success'])
        setUser(u => ({...u, tests: data.updateUser.tests}))
        resetForm()
      })
      .catch((e) => {
        setMessage([<>Test could not be created.</>, 'error'])
        console.log(e)
      })
      .then(() => {
        setSubmitting(false)
        setFormModal(m => ({ ...m, open: false }))
      })
    }
  })

  const [modal, setModal] = React.useState({
    open: false,
    message: '',
    noButton: 'Cancel',
    confirmButton: '',
    onClose: () => {
      setModal((m) => ({...m, open: false}))
    },
    onConfirm: () => {},
    loading: false
  })

  React.useEffect(() => {
    if (data) setUser(data.user)
    if (!loading) setLoading(false)
  }, [data, loading])
  return (
    <>
    <Head>
      <title>Dashboard</title>
      <meta property="og:title" content="Dashboard" />
      <meta property="og:description" content="Dashboard for Testico." />
    </Head>
    {_loading && <Loading />}

    {user && <div>
    <FormModal formik={testFormik} {...formModal} />
    <Modal {...modal} />
    <Snackbar open={message?.[0]} message={message?.[0]} type={message?.[1]} onClose={() => setMessage(null)} />
    <div className='grid lg:grid-cols-2 w-full gap-x-16 mb-3 px-4 sm:px-6'>
      <div>    
      <Link href='/'>
        <a className='block'>
          <div className='py-8 pb-2'>
            <span className='inline-flex mr-4 font-mono font-medium items-center justify-center shadow-md rounded-full align-middle w-16 h-16 text-4xl text-blue-100 bg-gradient-to-br from-cyan-400 to-blue-500'>
              {user.username.charAt(0).toUpperCase()}
            </span>
            <div className='align-middle inline-flex'>
              <div className='block'>
                <h1 className='font-bold text-opacity-90 text-gray-700 tracking-wide text-3xl'>{user.username}</h1>
                <p className='text-gray-400 text-opacity-90 tracking-wide text-sm'>{user.email}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
        <div className='pt-6 pb-3 grid grid-cols-3 gap-1 w-full'>
          <button className='group shadow-md block duration-150 bg-gradient-to-r from-cyan-400 to-blue-500 text-blue-100 hover:-translate-y-0.5 rounded-xl w-full px-4 py-2'>
            <FontAwesomeIcon icon={faCog} className='sm:mr-2 group-hover:animate-spin' />
            <span className='font-medium tracking-wide hidden sm:inline-flex'>Settings</span>
          </button>
          <button className='group shadow-md block duration-150 text-orange-100 bg-gradient-to-r from-yellow-400 to-orange-500 hover:-translate-y-0.5 rounded-xl w-full px-4 py-2'
          onClick={() => logout(cookies, setModal, setMessage)}>
            <FontAwesomeIcon icon={faSignOutAlt} className='sm:mr-2 group-hover:mr-3 duration-150' />
            <span className='font-medium tracking-wide hidden sm:inline-flex'>Logout</span>
          </button>
          <button className='group shadow-md block duration-150 hover:-translate-y-0.5 bg-gradient-to-r from-pink-400 to-rose-500 text-pink-100 rounded-xl w-full px-4 py-2'
          onClick={() => deleteAccount(cookies, setModal, setMessage, user._id, client)}>
            <FontAwesomeIcon icon={faTrashAlt} className='sm:mr-2 duration-150 group-hover:animate-bounce' />
            <span className='font-medium tracking-wide hidden sm:inline-flex'>Delete</span>
          </button>
        </div>
        <div className='shadow-md rounded-lg relative'>
          <div className='bg-gray-100 p-2 px-3 text-gray-500 rounded-t-lg font-mono border border-b-0 border-gray-300'>
            Tests ({user.tests.length}/5)
            <button className='duration-150 z-30 group font-mono hover:-translate-y-0.5 hover:shadow-lg text-lg absolute shadow-md top-6 right-5 bg-green-400 text-green-100 w-8 h-8 rounded-full grid items-center justify-center'
            onClick={() => setFormModal(m => ({
              ...m,
              open: true,
              title: 'Create Test',
              content: (formik) => {
                return <div className='grid row-auto gap-2'>
                <Input
                type='text'
                placeholder='Title'
                value={formik.values.title}
                onChange={formik.handleChange}
                name='title'
                id='title'
                required
                />
                <Input
                autosize='true'
                placeholder='Description'
                value={formik.values.description}
                onChange={formik.handleChange}
                name='description'
                id='description'
                required
                />
                <Input
                type='number'
                placeholder='Max Participants'
                value={formik.values.maxParticipants}
                onChange={formik.handleChange}
                name='maxParticipants'
                id='max-participants'
                required
                />
                <Input
                select='true'
                placeholder='Status'
                id='status'
                value={formik.values.status}
                onChange={v => formik.setFieldValue('status', v)}
                name='status'
                placeholder='Status'
                required
                options={[{
                  value: 'private',
                  label: <><FontAwesomeIcon icon={faLock} className='text-rose-400 mr-1' /> Private</>
                }, {
                  value: 'public',
                  label: <><FontAwesomeIcon icon={faUnlock} className='text-green-400 mr-1' /> Public</>
                }]}
                defaultValue={{
                  value: 'private',
                  label: <><FontAwesomeIcon icon={faLock} className='text-rose-400 mr-1' /> Private</>
                }}
                />
                <Input
                type='color'
                label='Foreground Color'
                value={formik.values.foreColor}
                onChange={formik.handleChange}
                name='foreColor'
                id='fore-color'
                required
                />
                <Input
                type='color'
                label='Background Color'
                value={formik.values.backColor}
                onChange={formik.handleChange}
                name='backColor'
                id='fore-color'
                required
                />
                </div>
              },
              confirmButton: (formik) => <>
              {!formik.isSubmitting?
              <><FontAwesomeIcon icon={faCheck} /> Create</>:
              <><FontAwesomeIcon icon={faCircleNotch} spin /> Creating</>}
              </>,
            }))}>
              <p>+</p>
              <div className='top-to-down hidden shadow-md group-hover:block w-max bg-indigo-500 -right-11 top-11 text-sm font-sans tracking-wide backdrop-filter backdrop-blur absolute text-indigo-100 px-3 py-1 rounded-md'>
                <FontAwesomeIcon icon={faCaretUp} className='text-indigo-500 absolute -top-2 right-14' />
                Create new test
              </div>
            </button>
          </div>
          <div className='grid grid-flow-row auto-rows-auto divide-y divide-gray-200 border border-t-0 rounded-b-lg border-gray-300'>
            {user.tests.length ?
            user.tests.map((test, i) => <Test
            test={test}
            index={i}
            length={user.tests.length}
            key={i}
            client={client}
            setMessage={setMessage}
            setLoading={v => setModal(m => ({...m, loading: v}) )}
            setModal={setModal}
            setUser={setUser}
            user={user}/>):
            <div className='px-6 py-28 text-center'>
            <FontAwesomeIcon icon={faFolderOpen} className='text-gray-300' size='9x' />
            </div>}
          </div>
        </div>
      </div>
      <div className='py-4'>
        <div className='border border-gray-300 rounded-lg shadow-md p-4'>
          <div>
            <span className='text-purple-100 bg-gradient-to-r from-indigo-500 to-purple-600 text-xs uppercase py-1 px-5 rounded-full shadow tracking-widest'>
            <FontAwesomeIcon icon={faClipboardList} className='mr-0.5'/> Logs
            </span>
            <span className='border border-gray-200 mx-4'></span>
            <span className='inline-flex rounded-full w-2 h-2 align-middle bg-green-400 mr-2.5'></span>
            <p className='text-gray-400 inline-flex align-middle tracking-wide font-mono group'>
              <span className='relative w-max'>
                Connected
                <div className='top-to-down hidden shadow-md group-hover:block w-max bg-indigo-500 -left-9 m-auto top-8 text-sm font-sans tracking-wide backdrop-filter backdrop-blur absolute text-indigo-100 px-3 py-1 rounded-md'>
                  <FontAwesomeIcon icon={faCaretUp} className='text-indigo-500 absolute -top-2 left-0 right-0 m-auto' />
                  Connected to server
                </div>
              </span>
            </p>
          </div>
          <div className='grid grid-flow-row auto-rows-auto gap-y-4'>
            <Log />
          </div>
        </div>
      </div>
    </div>
    </div>}
    </>
  )
}