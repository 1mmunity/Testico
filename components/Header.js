import Link from 'next/link'

export default function Header() {
  return (
    <div className='py-4 shadow-md bg-black px-5 bg-opacity-25 backdrop-blur-lg fixed top-0 z-10 w-full'>
      <div className='inline-flex items-center w-full'>
        <div className='flex-grow'>
          <a className='fas fa-scroll text-4xl text-green-400' href='/'></a>
        </div>
        <div className='inline-flex items-center'>
          <Link href='https://github.com/1mmunity/Testico'>
            <a className='w-10 h-10 fa fa-github text-2xl hover:bg-gray-300/5 duration-150 text-gray-400 hover:text-gray-300 inline-flex items-center justify-center mr-4 rounded-lg'></a>
          </Link>
          <Link href='/login'>
            <a className='group py-2 px-4 font-medium tracking-wide rounded-lg bg-opacity-10 border-2 border-green-300 border-opacity-10 hover:border-opacity-25 hover:bg-opacity-20 bg-green-300 text-green-300 shadow-md hover:shadow-lg duration-150'>
              Sign In <i className='fas fa-sign-in-alt ml-1 text-sm group-hover:ml-1.5 duration-150'></i> 
            </a>
          </Link>
          {/* Adriel J. <i className='far fa-user-circle text-2xl'></i> */}
        </div>
      </div>
    </div>
  )
}