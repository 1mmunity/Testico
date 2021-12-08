import Markdown from "./Markdown";

export default function Radio({ children, ...props }) {
  return <label className='text-white flex font-light py-1'>
  <div className='mr-4 block'>
    <input type='radio' ordered='false' className='appearance-none w-1 h-full duration-150 rounded-full bg-blue-600/20 checked:bg-green-400 checked:shadow-md checked:border-none' {...props} />
  </div>
  <Markdown className='my-1'>{children}</Markdown>
  </label>
}