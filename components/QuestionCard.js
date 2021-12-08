import Markdown from "./Markdown"
import Radio from "./Radio"

export default function QuestionCard({ children, points, answers, name, radio, ...props }) {
  return <div className='p-5 bg-gray-800 shadow-md overflow-hidden rounded-lg text-justify sm:text-lg w-full relative'>
    <input type='checkbox' className='absolute -top-1.5 right-3 appearance-none cursor-pointer text-gray-700 checked:text-green-400 fas fa-bookmark text-6xl' />
    <div className='py-1 px-2 text-green-400 bg-green-400/5 rounded-lg text-xs w-max'>{points} Points</div>
    <Markdown className='mt-2 mb-4 text-white font-light tracking-wide'>
      {children}
    </Markdown>
    <div>
      <p className='text-gray-600 uppercase font-bold text-sm select-none'>Answer</p>
      <div>
        {answers.map((v, i) => radio(v, i, name))}
      </div>
    </div>
  </div>
}