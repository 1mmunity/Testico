import { ExclamationIcon } from "@heroicons/react/outline"

export default function Modal({ open, onClose, onConfirm, confirmButton, noButton, message }) {
  return (
    <div className={`appear-opacity z-40 fixed grid duration-200 ${!open && 'opacity-0 hidden'} h-screen w-screen justify-center items-center bg-black/50`}>
      <button className='h-screen w-screen cursor-default fixed' onClick={onClose}></button>
      <div className='z-50 m-auto w-11/12 sm:w-96 bg-white top-to-down rounded-lg shadow-md overflow-hidden'>
        {/* <div className='py-1 bg-gradient-to-r from-red-400 to-pink-500'></div> */}
        <div className='tracking-wide text-gray-400 text-sm p-7 pt-6'>
          <div className='mb-2 uppercase tracking-widest text-xs bg-red-400 text-red-100 rounded-lg px-2 py-0.5 w-max'>
            <ExclamationIcon className='w-3.5 h-3.5 inline-flex align-middle mr-1' />
            <p className='inline-flex align-middle'>Warning</p>
          </div>
          {message}
        </div>
        <div className='pb-5 px-6'>
          <div className='w-max m-auto'>
          <a
          className='bg-gray-100 inline-block cursor-pointer text-gray-500 px-3 py-2 rounded-lg uppercase tracking-wider mr-2.5' onClick={onClose}>
            {noButton}
          </a>
          <button
          onClick={() => {
            onConfirm(onClose)
          }}
          className='shadow-md bg-gradient-to-r from-red-400 to-pink-500 text-red-100 px-3 py-2 rounded-lg uppercase tracking-wider duration-150 inline-block hover:-translate-y-1'>
            {confirmButton}
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}