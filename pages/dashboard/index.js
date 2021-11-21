import useUser from '../../lib/useUser'
import Loading from '../../components/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faExclamationTriangle, faFolderOpen, faSignOutAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { deleteTest } from '../../lib/testMutations'
import { useApolloClient } from '@apollo/client'
import Snackbar from '../../components/Snackbar'

function Test({ client, test, index, length, setMessage, setLoading, user }) {
  return (
    <div className={`group hover:bg-gray-50 relative duration-200 rounded-none ${index+1 == length && 'rounded-b-lg'}`}>
      <Link href={`/tests/${test._id}`}>
      <a className='w-full p-5 block'>
        <div className='mb-1'>
          <h1 className={`text-xl w-max bg-clip-text text-transparent bg-gradient-to-r from-${test.themeColor}-700 to-${test.themeColor}-400 font-mono`}>
            {test.title}
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
          deleteTest(client, test._id, user)
          .then(() => {
            setMessage([<>Test <b className='mx-1'>{test.title}</b> has been deleted.</>, 'green'])
          })
          .catch((d) => {
            setMessage([<>Test <b className='mx-1'>{test.title}</b> could not be deleted.</>, 'red'])
            console.log(d)
          })
          .then(() => setLoading(false))
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
        <span className={`text-${color}-500 mr-1 font-mono text-xs`}>(Biology I)</span>
        <b className='text-purple-500'>William</b> has submitted the test.
      </p>
      </a>
    </Link>
  )
}

export default function Dashboard() {
  const client = useApolloClient()
  const { loading, data } = useUser(client)
  const [_loading, setLoading] = React.useState(true)
  const [user, setUser] = React.useState(null)
  const [message, setMessage] = React.useState(null)

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
    <Snackbar open={message?.[0]} message={message?.[0]} color={message?.[1]} onClose={() => setMessage(null)} />
    <div className='grid lg:grid-cols-2 w-full gap-4 px-8 min-h-screen'>
      <div>    
      <Link href='/'>
        <a className='block'>
          <div className='py-8 pb-0'>
            <span className='inline-flex mr-4 font-mono font-medium items-center justify-center rounded-full align-middle w-16 h-16 text-4xl bg-blue-200 text-blue-600'>
              {user.username.charAt(0)}
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
        <div className='pt-6 pb-3 grid grid-cols-3 gap-2 w-full'>
          <button className='group block duration-500 bg-cyan-100 text-cyan-600 border-b-2 rounded-b-none border-cyan-200 hover:border-cyan-500 rounded-xl w-full px-4 py-2'>
            <FontAwesomeIcon icon={faCog} className='sm:mr-2 group-hover:animate-spin' />
            <span className='font-medium tracking-wide hidden sm:inline-flex'>Settings</span>
          </button>
          <button className='group block duration-500 bg-yellow-100 text-yellow-600 border-b-2 rounded-b-none border-yellow-200 hover:border-yellow-500 rounded-xl w-full px-4 py-2'>
            <FontAwesomeIcon icon={faSignOutAlt} className='sm:mr-2 group-hover:mr-3 duration-150' />
            <span className='font-medium tracking-wide hidden sm:inline-flex'>Logout</span>
          </button>
          <button className='group block duration-500 bg-red-100 text-red-600 border-b-2 rounded-b-none border-red-200 hover:border-red-500 rounded-xl w-full px-4 py-2'>
            <FontAwesomeIcon icon={faTrashAlt} className='sm:mr-2 duration-150 group-hover:animate-bounce' />
            <span className='font-medium tracking-wide hidden sm:inline-flex'>Delete</span>
          </button>
        </div>
        <div className='shadow-md rounded-lg'>
          <div className='bg-gray-100 p-2 px-3 text-gray-500 font-mono rounded-t-lg border border-b-0 border-coolgray-200'>
            Tests ({user.tests.length}/5)
          </div>
          <div className='grid grid-flow-row auto-rows-auto gap-4 border border-t-0 rounded-b-lg border-gray-200'>
            {user.tests.length ?
            user.tests.map((test, i) => <Test
            test={test}
            index={i}
            length={user.tests.length}
            key={i}
            client={client}
            setMessage={setMessage}
            setLoading={setLoading}
            user={user}/>):
            <div className='py-16 px-6 text-center'>
            <FontAwesomeIcon icon={faFolderOpen} className='text-gray-300' size='9x' />
            <p className='text-gray-300 text-lg mt-5 font-mono'>You haven't created a test yet.</p>
            </div>}
          </div>
        </div>
      </div>
      <div className='grid justify-center items-center text-center py-32'>
        <div>
        <FontAwesomeIcon icon={faExclamationTriangle} size='9x' className='text-gray-300'/>
        <h2 className='text-lg font-mono text-gray-300 mt-5'>Failed to connect to server.</h2>
        <div>
          <div className='w-2 h-2 bg-red-400 inline-flex rounded-full align-middle'></div>
          <span className='font-mono text-gray-600 text-sm ml-2 align-middle font-bold'>Status</span>
        </div>
        </div>
      </div>
    </div>
    </div>}
    </>
  )
}