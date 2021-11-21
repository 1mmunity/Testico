import { faCircleNotch as Spinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
  return (
    <div className='grid justify-center items-center h-screen relative'>
      <div>
        <FontAwesomeIcon icon={Spinner} spin size='7x' className='text-blue-600 m-auto' />
        <div className='font-mono tracking-wider text-center absolute left-0 right-0 mt-8'>
          <h1 className='text-gray-600 text-3xl font-bold'>Loading...</h1>
          <p className='text-base mt-1 font-sans tracking-wider text-gray-400'>Please refresh if you're stuck</p>
        </div>
      </div>
    </div>
  )
}