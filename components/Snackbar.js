export default function snackbar({ className, snackbar, ...props }) {
  const [_snackbar, setSnackbar]  = snackbar
  return <div className={`right-to-left overflow-hidden absolute bg-opacity-75 backdrop-blur bottom-3 right-3 py-2 px-4 rounded-l font-light tracking-wide shadow-md bg-gray-900 z-10 border-r-2 border-green-400 ${!_snackbar.open && 'hidden'} ${_snackbar.status == 'error' && 'border-rose-400'} ${className}`} {...props}>
    <div className='flex'>
      <p className='text-white/50 text-justify whitespace-pre-wrap'>
        {_snackbar.message}
      </p>
      <div className='ml-8 block'>
        <i
        onClick={() => setSnackbar(v => ({
          ...v,
          open: false
        }))}
        className='fas fa-times h-full w-4 text-gray-400/50 hover:text-gray-400/75 cursor-pointer duration-150 flex justify-center items-center'></i>
      </div>
    </div>
  </div>
}