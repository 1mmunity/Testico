import L from 'next/link'

export default function Link({ children, href, className, ...props }) {
  return (
    <L href={href}>
      <a
        className={`border-b-2 border-green-400 hover:text-green-400 duration-150 ${className}`}
        {...props}
      >
        {children}
      </a>
    </L>
  )
}