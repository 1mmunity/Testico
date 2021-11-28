export default function NotFound() {
  return <div className='w-screen h-screen bg-gray-900 flex items-center justify-center'>
    <div className='block p-10 rounded-lg shadow-md bg-gradient-to-br from-gray-800 cursor-pointer hover:-translate-y-1 duration-150' onClick={() => window.history.back()}>
      <h1 className='text-white text-6xl font-bold'>404</h1>
      <p className='text-gray-600 text-2xl'>Page not found.</p>
    </div>
  </div>
}