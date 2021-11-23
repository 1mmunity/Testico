import { faScroll } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function FormModal({
  open,
  content,
  title,
  formik,
  noButton,
  confirmButton, 
  onClose,
  onConfirm,
  ...props
}) {
  return(
    <div className={`appear-opacity overflow-y-scroll z-40 fixed grid duration-200 ${!open && 'opacity-0 hidden'} py-5 h-screen w-screen justify-center items-center bg-black/50`}>
      <button className='h-screen w-screen cursor-default fixed' onClick={props.onClose}></button>
      <form onSubmit={formik.handleSubmit} className='block z-50 m-auto w-max bg-white top-to-down rounded-lg shadow-md overflow-hidden'>
        <div className='tracking-wide text-gray-400 text-sm p-7 pt-6'>
          <div className='mb-2 uppercase tracking-widest text-xs bg-indigo-500 text-indigo-100 rounded-lg px-2 py-0.5 w-max'>
            <FontAwesomeIcon icon={faScroll} className='inline-flex align-middle mr-2' />
            <p className='inline-flex align-middle'>form</p>
          </div>
          <div className='relative mb-12'>
            <hr className='absolute border-t-2 w-full top-3.5' />
            <h1 className='bg-white text-gray-400 tracking-wider absolute px-3 text-lg w-max m-auto left-0 right-0 text-center'>
              Create Test
            </h1>
          </div>
          {content(formik)}
        </div>
        <div className='pb-5 px-6'>
          <div className='w-max m-auto'>
          <a className='bg-gray-100 cursor-pointer inline-block text-gray-500 px-3 py-2 rounded-lg uppercase tracking-wider mr-2.5'
          onClick={onClose}>
            {noButton}
          </a>
          <button
          onClick={() => {
            onConfirm(formik, onClose)
          }}
          type='submit'
          className='shadow-md bg-gradient-to-r from-indigo-400 to-blue-500 text-indigo-100 px-3 py-2 rounded-lg uppercase tracking-wider duration-150 inline-block hover:-translate-y-1'>
            {confirmButton(formik)}
          </button>
          </div>
        </div>
      </form>
    </div>
  )
}