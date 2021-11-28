import Markdown from "./Markdown";

export default function Radio({ children, ...props }) {
  return <label className='text-white flex font-light cursor-pointer py-1'>
  <div className='mr-2 block'>
    <input type='radio' className='appearance-none w-3 h-3 bg-blue-600 checked:bg-green-400 checked:border-none rounded-full' {...props} />
  </div>
  <Markdown>{children}</Markdown>
  </label>
}