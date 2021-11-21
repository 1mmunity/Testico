export default function Input({ className, ...props }) {
  return (
    <div>
    <label className='block text-gray-500 tracking-wide text-sm font-medium mb-0.5' htmlFor={props.id}>
      {props.label}
    </label>
    <input
    className={`duration-150 border-gray-200 ${props.error && 'border-red-400'} disabled:opacity-50 disabled:cursor-not-allowed hover:border-purple-400 focus:border-purple-400 rounded-lg outline-none px-2 py-1 border-2 bg-gray-100 ${className}`}
    {...props}
    />
    <label className={`opacity-100 ${!props.error && 'hidden opacity-0'} duration-150 text-xs text-red-500 tracking-wide block`}
    htmlFor={props.id}>
      {props.error}
    </label>
    </div>
  )
}