import L from 'next/link'

export default function ButtonLink({ className, href, text, ...props }) {
  return (
    <L href={href}>
      <a className={`block w-max group px-5 py-3 bg-green-400 hover:bg-green-600 duration-500 text-lg font-medium shadow-md ${className}`}>
        {text} <i className='fas fa-chevron-right ml-2 duration-150 group-hover:ml-3'></i>
      </a>
    </L>
  )
}