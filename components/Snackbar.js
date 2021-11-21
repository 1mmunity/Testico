import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Snackbar({ open, message, onClose, color }) {
  // states are managed outside of object
  return (
    <div className={`absolute px-4 opacity-0 top-0 ${open && 'opacity-100 top-4'} duration-150 w-full`}>
      <div className={`w-full md:w-5/12 lg:w-3/12 rounded-xl shadow-md left-0 right-0 py-3 px-4 bg-${color}-500 text-${color}-100`}>
        <button onClick={() => onClose()}>
          <FontAwesomeIcon icon={faTimes} className='inline-flex mr-3 opacity-50 hover:opacity-75 duration-150' />
        </button>
        <p className='inline-flex'>{message}</p>
      </div>
    </div>
  )
}