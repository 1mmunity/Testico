import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Snackbar({ open, message, onClose, type }) {
  // states are managed outside of object
  return (
    <div className={`top-to-down fixed z-50 px-4 top-4 duration-200 ${!open && 'hidden'} w-full`}>
      <div className={`w-full md:w-5/12 lg:w-3/12 rounded-xl shadow-md left-0 right-0 py-3 px-4
      ${type == 'error' && 'bg-red-500 text-red-100'}
      ${type == 'success' && 'bg-green-500 text-green-100'}`}>
        <button onClick={() => onClose()}>
          <FontAwesomeIcon icon={faTimes} className='inline-flex mr-3 opacity-50 hover:opacity-75 duration-150' />
        </button>
        <p className='inline-flex'>{message}</p>
      </div>
    </div>
  )
}