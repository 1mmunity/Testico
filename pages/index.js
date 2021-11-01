import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

function ExampleCardsAtTop() {
  return(
    <>
      <a className='duration-150 transitiona-all fixed w-min -top-2 right-2 text-white bg-gray-400 bg-opacity-50 backdrop-blur rounded-lg p-4 pt-6 rounded-t-none z-10 hover:translate-y-1' href='/'>
        <FontAwesomeIcon icon={faGithub} size='2x'/>
      </a>
      <div className='grid place-items-center py-20 bg-gradient-to-r from-blue-600 to-purple-400 shadow-md'>
        <div className='absolute top-20 mr-20 card-spin-1 card-back-1 -rotate-12 w-7/12 sm:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-5 rounded-lg shadow-lg'>
          <div className='w-full pb-8'>
            <div className='float-right bg-yellow-200 px-2 py-0.5 rounded-full'>
              <p className='text-red-400 text-xs'>5 Pts</p>
            </div>
          </div>
          <div className='grid grid-rows-3 gap-2 pb-4'>
            <div className='grid grid-cols-10 gap-2'>
              <div className='bg-gray-200 p-2 col-span-6 rounded'></div>
              <div className='bg-gray-200 p-2 col-span-4 rounded'></div>
            </div>
            <div className='grid grid-cols-10 gap-2'>
              <div className='bg-gray-200 p-2 col-span-2 rounded'></div>
              <div className='bg-gray-200 p-2 col-span-8 rounded'></div>
            </div>
            <div className='grid grid-cols-10 gap-2'>
              <div className='bg-gray-200 p-2 col-span-5 rounded'></div>
              <div className='bg-gray-200 p-2 col-span-5 rounded'></div>
            </div>
          </div>
          <div className='grid grid-rows-4 gap-2'>
            <div className='grid grid-cols-10 gap-4'>
              <div className='bg-red-100 p-2 col-span-1 rounded-full'></div>
              <div className='bg-red-100 p-2 col-span-9 rounded'></div>
            </div>
            <div className='grid grid-cols-10 gap-4'>
              <div className='bg-red-100 p-2 col-span-1 rounded-full to-be-fullred2'></div>
              <div className='bg-red-100 p-2 col-span-9 rounded to-be-fullred2'></div>
            </div>
            <div className='grid grid-cols-10 gap-4'>
              <div className='bg-green-100 p-2 col-span-1 rounded-full to-be-lgreen2'></div>
              <div className='bg-green-100 p-2 col-span-9 rounded to-be-lgreen2'></div>
            </div>
            <div className='grid grid-cols-10 gap-4'>
              <div className='bg-red-100 p-2 col-span-1 rounded-full'></div>
              <div className='bg-red-100 p-2 col-span-9 rounded'></div>
            </div>
          </div>
        </div>
        <div className='ml-20 absolute top-20 card-spin-2 rotate-12 w-7/12 sm:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-5 rounded-lg shadow-lg'>
          <div className='w-full pb-8'>
            <div className='float-right bg-yellow-200 px-2 py-0.5 rounded-full'>
              <p className='text-yellow-400 text-xs'>5 Pts</p>
            </div>
          </div>
          <div className='grid grid-rows-3 gap-2 pb-4'>
            <div className='grid grid-cols-10 gap-2'>
              <div className='bg-gray-200 p-2 col-span-6 rounded'></div>
              <div className='bg-gray-200 p-2 col-span-4 rounded'></div>
            </div>
            <div className='grid grid-cols-10 gap-2'>
              <div className='bg-gray-200 p-2 col-span-2 rounded'></div>
              <div className='bg-gray-200 p-2 col-span-8 rounded'></div>
            </div>
            <div className='grid grid-cols-10 gap-2'>
              <div className='bg-gray-200 p-2 col-span-5 rounded'></div>
              <div className='bg-gray-200 p-2 col-span-5 rounded'></div>
            </div>
          </div>
          <div className='grid grid-rows-4 gap-2'>
            <div className='grid grid-cols-10 gap-4'>
              <div className='bg-red-100 p-2 col-span-1 rounded-full to-be-fullred'></div>
              <div className='bg-red-100 p-2 col-span-9 rounded to-be-fullred'></div>
            </div>
            <div className='grid grid-cols-10 gap-4'>
              <div className='bg-red-100 p-2 col-span-1 rounded-full'></div>
              <div className='bg-red-100 p-2 col-span-9 rounded'></div>
            </div>
            <div className='grid grid-cols-10 gap-4'>
              <div className='bg-green-100 p-2 col-span-1 rounded-full to-be-lgreen'></div>
              <div className='bg-green-100 p-2 col-span-9 rounded to-be-lgreen'></div>
            </div>
            <div className='grid grid-cols-10 gap-4'>
              <div className='bg-red-100 p-2 col-span-1 rounded-full'></div>
              <div className='bg-red-100 p-2 col-span-9 rounded'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Headings() {
  return(
    <div>
      <h1 className='text-center text-gradient-change w-min m-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-400 to-blue-600 text-4xl font-bold pt-48 uppercase tracking-widest inset'>Testico</h1>
      <p className='opacity-40 text-center text-lg tracking-wide'>Got a test? We got you.</p>
      <div className='flex opacity-75 bg-gradient-to-r from-blue-600 to-cyan-400 w-min m-auto mt-5 rounded-lg'>
        <a href='/join' className='duration-150 shadow-md bg-transparent px-6 py-2 rounded-none rounded-l-lg inline-flex border-r border-white filter'>
          <h3 className='text-white uppercase tracking-widest'>Join</h3>
        </a>
        <a href='/new' className='duration-150 bg-transparent shadow-md px-6 py-2 rounded-none rounded-r-lg inline-flex border-l border-white filter'>
          <h3 className='text-white uppercase tracking-widest'>New</h3>
        </a>
      </div>
    </div>
  )
}

export default function Home() {
  const m = [
    ['Jeremy', 'text-yellow-500', 50],
    ['John', 'text-green-500', 70],
    ['Aaron', 'text-cyan-400', 100],
    ['Adriel', 'text-red-400', 86],
    ['James', 'text-purple-300', 99],
    ['Caroline', 'text-pink-400', 80]
  ]
  const [realtime, setRealtime] = React.useState(0)

  React.useEffect(() => {
    setInterval(() => {
      setRealtime((prev) => prev != m.length-1 ? prev + 1 : 0)
    }, 5000)
  }, [])

  function RealtimeUpdating() {
    function Score({ score }) {
      return(
        <span className={`${score < 75 ? 'bg-red-200 text-red-500' : (score < 99 ? 'bg-yellow-200 text-yellow-500' :  'bg-green-200 text-green-500')} py-1 text-xs px-1 rounded ml-2`}>
          {score}/100
        </span>
      )
    }

    return(
      <div>
        <div className='p-12 text-center bg-gradient-to-r from-red-500 to-pink-400 shadow-md py-16 relative shadow-lg'>
          <div className='bg-gradient-to-r from-blue-600 to-cyan-400 p-5 shadow-lg rounded-lg w-max pulsing absolute -top-8 left-0 right-0 m-auto'>
            <div className='inline-flex align-middle mr-1'>{m[realtime][2] > 75 ? <CheckIcon className='text-green-400 w-5 h-5 ' /> : <XIcon className='text-red-400 w-5 h-5'/>}</div>
            <p className='text-gray-300 inline-flex align-middle'><span className={`${m[realtime][1]} mr-1 font-bold`}>{m[realtime][0]}</span> has submitted the
            test. <Score score={m[realtime][2]} />
            </p>
          </div>
          <h2 className='font-bold text-red-100 uppercase tracking-widest text-white text-xl'>Realtime Updating</h2>
          <p className='text-white opacity-50 tracking-wide m-auto mt-2 w-11/12 sm:w-3/4 lg:w-1/2'>
            Testico has a realtime updating system, this means that there are chats,
            notifications when questions are changed by the teacher, and teachers will be notified when students have submitted.
            Although, students have to be connected to the internet at all times to access these features, don't worry though,
            internet during answering is optional.
          </p>
        </div>
      </div>
    )
  }

  function EasyToUse() {
    return(
      <div>

      </div>
    )
  }

  return(
    <>
    <ExampleCardsAtTop />
    <Headings />
    <div className='pt-44'>
      <RealtimeUpdating />
    </div>
    </>
  )
}