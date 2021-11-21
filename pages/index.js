import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faArrowRight,
  faTrashAlt,
  faBookmark,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons'
import {
  ExclamationIcon
} from '@heroicons/react/outline'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as CodeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Link from 'next/link'
import Aos from 'aos'
import React from 'react'

// ! How do i fix JIT (tailwindcss) here? (Next 2 functions)
function Line({ py }) {
  return <div className={`border-gray-200 border-r-2 border-dashed w-min m-auto`} style={{ padding: `${py}rem 0` }}></div>
}

function LinePlaceholder({ span1, span2 }) {
  return <div className='grid grid-cols-10 gap-2'>
    <div className={`bg-gray-200 p-2 rounded`} style={{ gridColumn: `span ${span1} / span ${span1}`}}></div>
    <div className={`bg-gray-200 p-2 rounded`} style={{ gridColumn: `span ${span2} / span ${span2}`}}></div>
  </div>
}

function Circle() {
  return <div className='w-2 h-2 rounded-full bg-gray-200 m-auto'></div>
}

function Segment({ title, content, children }) {
  return(
    <>
      <div className='text-center my-5'>
        <h1 className='font-bold text-3xl mb-3'>{title}</h1>
        <p className='text-gray-400 tracking-wide text-justify w-3/4 sm:w-1/2 lg:w-1/3 m-auto'>
          {content}
        </p>
        {children}
      </div>
    </>
  )
}

function ExampleCardsAtTop() {
  return(
    <>
      <Link
      href='/dashboard'
      >
        <a className='duration-150 transitiona-all fixed w-min -top-2 right-2 text-white bg-gray-400 bg-opacity-50 backdrop-blur rounded-lg p-4 pt-6 rounded-t-none z-10 hover:translate-y-1'>
          <FontAwesomeIcon icon={faUserCircle} size='2x' />
        </a>
      </Link>
      <div className='grid place-items-center py-20 bg-gradient-to-r from-blue-600 to-purple-400 shadow-md'>
        <div className='absolute top-20 mr-20 card-spin-1 card-back-1 -rotate-12 w-7/12 sm:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-5 rounded-lg shadow-lg'>
          <div className='w-full pb-8'>
            <div className='float-right bg-yellow-200 px-2 py-0.5 rounded-full'>
              <p className='text-red-400 text-xs'>5 Pts</p>
            </div>
          </div>
          <div className='grid grid-rows-3 gap-2 pb-4'>
            <LinePlaceholder span1={6} span2={4} />
            <LinePlaceholder span1={2} span2={8} />
            <LinePlaceholder span1={5} span2={5} />
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
            <LinePlaceholder span1={6} span2={4} />
            <LinePlaceholder span1={2} span2={8} />
            <LinePlaceholder span1={5} span2={5} />
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
      <form className='block shadow-md bg-gray-50 p-3 m-auto rounded-lg mt-5 w-max' onSubmit={(e) => {
        e.preventDefault()
        window.location.href = `/tests/${e.target[0].value}`
      }}>
        <input type='text' className='col-span-4 w-full bg-gray-200 outline-none px-4 py-2 text-sm rounded-lg' placeholder='123 456' maxLength={6} />
        <p className='text-xs text-center text-gray-300 tracking-wider mt-0.5'>Join a live test (6-digit code)</p>
      </form>
    </div>
  )
}

export default function Home() {
  React.useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  function Steps() {
    return(
      // *these empty <></> tags are used to make folding easier, which is per section.
      <>
      <>
      <div>
        <Line py={2.5}/>
        <div className='w-max m-auto mb-1'>
          <span className='inline-flex w-10 h-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-400 text-white font-bold'>
            1
          </span>
        </div>
        <p className='w-max m-auto font-bold text-3xl tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400'>Create</p>
      </div>
      <Line py={2.5} />
      <Circle />
      <Segment title='Create an account.' content={<>You can create an account or sign in by <span className='text-pink-400'>clicking 
        the icon on the top right of your screen</span>, or instead,
        you can do the same thing by clicking the button below.</>}
      >
        <div className='my-10'>
          <Link href='/dashboard'>
            <a className='group duration-500 px-4 py-2 m-auto w-max border-b-2 border-pink-200 hover:border-pink-400 block rounded-t-lg bg-pink-100'>
              <span className='pb-1 tracking-wider text-pink-400 font-medium'>Go to Dashboard</span>
              <FontAwesomeIcon icon={faArrowRight} size='sm' className='duration-150 ml-2 group-hover:ml-3 text-pink-400'/>
            </a>
          </Link>
        </div>
      </Segment>
  
      <Line py={2.5} />
      <Circle />
      <Segment title='Create a test.' content={<>After creating or logging into an account,
      you can create a test in the dashboard. You can also view your tests in the
      dashboard. Due to limitations, <span className='text-pink-400'>
      an account can only have up to 5 tests at the same time.</span></>}> 
        <div data-aos='fade-up' className='mt-10 text-left select-none relative'>
          <div className='relative border border-gray-200 m-auto w-11/12 sm:w-96 rounded-lg shadow-md'>
            <div className='bg-gray-100 p-2 px-3 text-gray-500 rounded-t-lg font-medium tracking-wide font-mono'>
              <p>Tests (3/5)</p>
              <div className='bounce-anim duration-150 absolute shadow-md top-6 right-5 bg-green-500 text-green-100 w-8 h-8 rounded-full inline-flex items-center justify-center'>
                <p>+</p>
              </div>
            </div>
            <div className='grid grid-rows-3 divide-y'>
              <div className='p-5 group hover:bg-gray-50 duration-200 grid grid-cols-12'>
                <div className='col-span-10'>
                  <div className='mb-1'>
                    <h1 className='text-xl w-max bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-yellow-400 font-mono'>Physics I</h1>
                    <h4 className='text-xs tracking-wide text-gray-300'>(Click to view)</h4>
                  </div>
                  <div>
                    <p className='w-max inline-flex bg-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded-full mr-1'>Private</p>
                  </div>
                </div>
                <div className='grid items-center col-span-2'>
                  <span className='inline-flex w-10 h-10 items-center justify-center rounded-lg bg-red-100 text-red-400 hover:bg-red-400 hover:text-red-100 duration-150'>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </div>
              </div>
              <div className='p-5 group hover:bg-gray-50 duration-200 grid grid-cols-12'>
                <div className='col-span-10'>
                  <div className='mb-1'>
                    <h1 className='text-xl w-max bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-400 font-mono'>Biology II</h1>
                    <h4 className='text-xs tracking-wide text-gray-300'>(Click to view)</h4>
                  </div>
                  <div>
                    <p className='w-max inline-flex bg-yellow-200 text-yellow-600 text-xs px-2 py-0.5 rounded-full mr-1'>In Progress</p>
                    <p className='w-max inline-flex bg-rose-200 text-rose-600 text-xs px-2 py-0.5 rounded-full'>26/50 Participated</p>
                  </div>
                </div>
                <div className='grid items-center col-span-2'>
                  <span className='inline-flex w-10 h-10 items-center justify-center rounded-lg bg-red-100 text-red-400 hover:bg-red-400 hover:text-red-100 duration-150'>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </div>
              </div>
              <div className='p-5 group hover:bg-gray-50 duration-200 grid grid-cols-12'>
                <div className='col-span-10'>
                  <div className='mb-1'>
                    <h1 className='text-xl w-max bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-400 font-mono'>Mathematics I</h1>
                    <h4 className='text-xs tracking-wide text-gray-300'>(Click to view)</h4>
                  </div>
                  <div>
                    <p className='w-max inline-flex bg-green-200 text-green-600 text-xs px-2 py-0.5 rounded-full mr-1'>Done</p>
                    <p className='w-max inline-flex bg-rose-200 text-rose-600 text-xs px-2 py-0.5 rounded-full'>30/30 Participated</p>
                  </div>
                </div>
                <div className='grid items-center col-span-2'>
                  <span className='inline-flex w-10 h-10 items-center justify-center rounded-lg bg-red-100 text-red-400 hover:bg-red-400 hover:text-red-100 duration-150'>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Segment>
      </>
      <>
      <Line py={4} />
      <div>
        <div className='w-max m-auto mb-1'>
          <span className='inline-flex w-10 h-10 items-center justify-center rounded-full bg-gradient-to-r from-red-400 to-yellow-500 text-white font-bold'>
            2
          </span>
        </div>
        <p className='w-max m-auto font-bold text-3xl tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500'>Preview</p>
      </div>
      <Line py={2.5} />
      <Circle />
      <Segment title='Preview your tests.' 
      content={<>You can preview and test out what your students see and do on your test
      even before you make it public. Although, <span className='text-pink-400'>You cannot submit your own tests/preview
      tests before it is public. Tests are also markdown supported.</span></>}>
        <div className='relative w-11/12 sm:w-96 m-auto mb-24 mt-8'>
          <div className='absolute top-0 -right-4'>
            <p className='text-gray-700 w-28 text-xs tracking-wide text-center font-mono'>Mark and come back later</p>
            <FontAwesomeIcon icon={faArrowDown} className='text-gray-200'/>
          </div>
        </div>
        <div data-aos='fade-up' className='relative overflow-hidden mt-7 bg-white shadow-md text-left rounded-lg border border-gray-200 m-auto w-11/12 sm:w-96'>
          <FontAwesomeIcon icon={faBookmark} size='3x' className='absolute text-gray-400 -top-5 right-5 hover:-top-1 duration-150 hover:text-red-500' />
          <div className='p-2 px-3 grid grid-cols-10 rounded-t-lg bg-gray-100'>
            <p className='col-span-8 inline-flex tracking-wide font-mono font-medium text-gray-500'>Question 4</p>
          </div>
          <div className='p-5'>
            <p className='text-yellow-100 bg-yellow-400 px-1.5 py-0.5 mb-1 rounded w-max text-xs tracking-wide font-medium'>5 Points</p>
            <div className='text-gray-900 font-medium tracking-wide'>
              Which one below returns <span className='text-pink-400 bg-pink-200 px-1 py-0.5 text-xs rounded font-mono tracking-widest mx-0.5'>true</span>?
              <SyntaxHighlighter language='js' style={CodeStyle} className='rounded-lg shadow-md'>
                {`function fn(a, b) {\n   return (a + b)/2;\n}`}
              </SyntaxHighlighter>
            </div>
            {['fn(6, 6) == 6', 'fn(5, 3) == 8', 'fn(10, 0) == 7', 'fn(7, 1) == 8'].map((v, k) => {
              return <div className={`flex items-center my-4 ${k == 3 && 'mb-0'}`} key={k}>
                <input type="radio" className="h-4 w-4 border-gray-300" checked={k == 0} readOnly/>
                <label htmlFor="country-option-1" className="text-sm tracking-wide font-medium text-gray-900 ml-2 block">
                  {v}
                </label>
              </div>
            })}
          </div>
        </div>
      </Segment>
      </>
      <>
      <Line py={4} />
      <div>
        <div className='w-max m-auto mb-1'>
          <span className='inline-flex w-10 h-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-green-400 text-white font-bold'>
            3
          </span>
        </div>
        <p className='w-max m-auto font-bold text-3xl tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-400'>Public</p>
      </div>
      <Line py={2.5} />
      <Circle />
      <Segment title='Updates realtime.' 
      content={<>Forgot to change something and you already made it public?
      Fear not! <span className='text-pink-400'>You can edit tests in real time!</span> students
      will receive notifications when you update tests, so that they won't miss
      anything. <span className='text-pink-400'>Teachers can receive submissions in real time too.</span></>}>
        <div className='relative h-64'>
          <div className='appear-disappear mt-7 left-0 right-0 absolute bg-white shadow-md text-left rounded-lg border border-gray-200 m-auto w-11/12 sm:w-96'>
            <div className='bg-gradient-to-r from-red-400 to-pink-500 p-5 rounded-t-lg'>
            </div>
            <div className='px-6 py-7'>
              <div className='mb-2 uppercase tracking-widest text-xs bg-red-400 text-red-100 rounded-lg px-2 py-0.5 w-max'>
                <ExclamationIcon className='w-3.5 h-3.5 inline-flex align-middle mr-1' />
                <p className='inline-flex align-middle'>Warning</p>
              </div>
              <p className='tracking-wide text-gray-400 text-sm'>
                Your teacher has changed the test,
                some answers have been unsubmitted.
              </p>
              <div className='pt-7 m-auto w-max'>
                <span className='bg-gray-100 inline-block text-gray-500 px-3 py-2 rounded-lg uppercase tracking-wider mr-2'>
                  Ignore
                </span>
                <span className='shadow-md bg-gradient-to-r from-red-400 to-pink-500 text-red-100 px-3 py-2 rounded-lg uppercase tracking-wider duration-150 inline-block hover:-translate-y-1'>
                  Go to top
                </span>
              </div>
            </div>
          </div>
        </div>
      </Segment>
      <Line py={2.5} />
      <Circle />
      <Segment title='Intgegrated chats.' 
      content={<>Need to tell something to your students or your students need to tell you
      something? A realtime chat has been integrated into the
      side of the site. <span className='text-pink-400'>Teachers can broadcast or chat to students and students
      can chat to teachers.</span></>}>
      </Segment>
      </>
      </>
    )
  }

  function Footer() {
    return(
      <div className='w-full py-8 text-center'>
        <h4 className='font-mono text-gray-400'>
          <Link href='https://github.com/1mmunity/Testico' target='_blank'>
            <a className='hover:underline text-pink-400'>Adriel J.</a>
          </Link> &copy; 2021
        </h4>
      </div>
    )
  }

  return(
    <>
    <ExampleCardsAtTop />
    <Headings />
    <Steps />
    <Footer />
    </>
  )
}