import ButtonLink from "../components/ButtonLink";
import Link from "../components/Link";
import React from "react";
import Markdown from "../components/Markdown";
import Radio from "../components/Radio";
import QuestionCard from "../components/QuestionCard";

const markdownExample = `
# Heading  
This is **a bolded text**.  
This is *an italic text*.  
This is ***both***.  
This is a ~~striketrough text~~.  
This is \`an inline code\`.  
Below is a code block.
\`\`\`cpp
#include <iostream>
int main() {
  std::cout << "Hello, World!" << std::endl;
  return 0;
}
// Hello, World!
\`\`\`
***
Above is a horizontal line.  
> ...and there are much more! like links, images, tables, and so on.
> Visit the [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) for more information.
> Both basic syntax and extended syntax are supported. You can also bookmark a question
> and return to it later.
`.trim()

const exampleAnswerMarkdown = [
  `1, 4, 6 **(By the way, the answers are markdown supported too.)**`,
  '![Number Example](https://i.postimg.cc/FK90yx5z/num-Example2.png)',
  `
- 1
- 5
- 6`.trim(),
  `| Answer 1 | Answer 2 | Answer 3 | Another Cell |
|---|---|---|---|
| 1 | 4 | 8 | Something |`
]

export default function Home() {
  return (
    <>
    <div className='py-24 pt-36 px-5 sm:px-14 bg-gray-800 text-white text-center overflow-hidden relative'>
      <h1 className='font-black text-green-400 text-6xl tracking-wide'>
        Testico
      </h1>
      <p className='font-light text-2xl mt-3 text-white'>
        Testico is a web application to help you create and manage tests.
      </p>
      <label
      className='group mt-10 inline-flex w-min mx-auto border-2 border-gray-600 hover:border-green-400 duration-150 rounded-full shadow-md px-4 py-2 bg-gray-700'
      htmlFor='enter-code'>
        <input
        className='outline-none bg-transparent'
        type='text'
        placeholder='6-digit code'
        id='enter-code'
        />
        <i className='fas fa-search m-auto ml-2 text-gray-600 group-hover:text-green-400 duration-150'></i>
      </label>
      <p className='text-xs opacity-50 mt-1'>click <b>enter</b> to join</p>
    </div>
    <div className='bg-gray-900 p-5'>
      <div className='py-5 sm:px-5 w-full grid lg:grid-cols-3 gap-y-16 gap-x-8'>
        <div className='opacity-0 fade-in'>
          <i className='shadow-md fas fa-shield-alt rounded-lg text-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white text-opacity-80 w-12 h-12 items-center justify-center flex'></i>
          <div className='mt-2'>
            <h2 className='text-white text-3xl font-light'>Secure.</h2>
            <p className='text-white text-lg justify mt-4 text-opacity-50 tracking-wide text-justify'>
              Unlike any other questioner web application, the answers aren't stored in the frontend
              but the answers are stored in the backend. This means that the answers are not visible to
              anyone except the creator of the test, no script can bypass this unless configured from the
              server.
            </p>
          </div>
        </div>
        <div className='opacity-0 fade-in a-delay-1'>
          <i className='shadow-md fas fa-stopwatch rounded-lg text-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-opacity-80 w-12 h-12 items-center justify-center flex'></i>
          <div className='mt-2'>
            <h2 className='text-white text-3xl font-light'>Real-time.</h2>
            <p className='text-white text-lg justify mt-4 text-opacity-50 tracking-wide text-justify'>
              Testico provides realtime connection the server and back. Questions or tests update realtimes
              when your teacher updates it. You can, as a teacher, chat to students and you also can chat to teachers.
              You can ask or answer questions by chatting. There is also a realtime log for teachers.
            </p>
          </div>
        </div>
        <div className='opacity-0 fade-in a-delay-2'>
          <i className='shadow-md fas fa-pencil-ruler rounded-lg text-2xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white text-opacity-80 w-12 h-12 items-center justify-center flex'></i>
          <div className='mt-2'>
            <h2 className='text-white text-3xl font-light'>Design.</h2>
            <p className='text-white text-lg justify mt-4 text-opacity-50 tracking-wide text-justify'>
              Testico has a dark, easy-on-the-eyes design, for easy management and easy reading. Testico
              also provides markdown (bold, italic, underline, image, list, etc.) to provide variations on the
              questions. You can also provide custom themes for your tests, choose wisely for the color schemes though.
            </p>
          </div>
        </div>
      </div>
      <div className='py-32'>
        <div className='mb-24 w-full relative lg:w-2/3 mx-auto'>
          <h2 className='text-white text-3xl font-light'>
            Free & Open Source.
          </h2>
          <p className='text-xl mt-4 text-white/50 tracking-wide'>
            Services provided here are free, but you can also support me by donating me.
            Web Applications like this should keep no secret. Therefore the frontend codes are public and open source.
            You can view them at my <Link href='https://github.com/1mmunity/Testico'>GitHub Repository</Link>.
            Feel free to open a pull request, or an issue if you find one!
            The backend is a secret though :)
          </p>
          <ButtonLink text='Go to Repository' className='mt-8' href='https://github.com/1mmunity/Testico' />
          <i className='fab fa-react very-big text-gray-400/10 absolute -right-32 top-0'></i>
        </div>
        <div className='w-full relative lg:w-2/3 mx-auto'>
          <h2 className='text-white text-3xl font-light'>
            Realtime Updating.
          </h2>
          <p className='text-xl mt-4 text-white/50 tracking-wide'>
            Testico is a realtime application. This means that when you update or edit a test,
            they are immidiately updated for students too, although it requires constant internet
            connection the server, it is a small price to pay for a huge amount of helpful features
            for both students and teachers. Either way you still need to be connected to the internet
            to submit your tests.
          </p>
          <i className='fas fa-history very-big text-gray-400/10 absolute -left-32 top-0'></i>
        </div>
      </div>
      <div>
        <h1 className='font-bold uppercase text-white/25 mb-2 select-none'>Preview</h1>
        <div className='grid lg:grid-cols-2 gap-x-8 gap-y-2 mb-14'>
          <QuestionCard
          points='5'
          name='q'
          answers={exampleAnswerMarkdown}
          radio={(v, i, n) => <Radio key={i} defaultChecked={i == 0} name={n}>{v}</Radio>}
          >
            {markdownExample}
          </QuestionCard>
          <div className='bg-gray-700/10 shadow border-2 border-gray-500/10 text-gray-400 rounded-lg p-5'>
            <h6 className='tracking-wide font-light text-sm mb-1 text-white/20 select-none'>Raw Markdown</h6>
            <p className='whitespace-pre-wrap'>
              {markdownExample}
            </p>
            <div className='mt-7'>
              <h6 className='tracking-wide font-light text-sm mb-1 text-white/20 select-none'>Answers Markdown</h6>
              <div className='whitespace-pre-wrap grid divide-y divide-gray-700'>
                {exampleAnswerMarkdown.map((v, i) => <p key={i} className={i == 0 ? 'pb-4' : 'py-4'}>{v}</p>)}
              </div>
              <Markdown className='text-justify'>
{'> You don\'t need to always do these by hand. There are a lot of markdown tools out there, such as [tablesgenerator.com](https://www.tablesgenerator.com/markdown_tables) for creating tables in markdown.'}
              </Markdown>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full relative overflow-hidden sm:w-max shadow-lg bg-gradient-to-r font-light tracking-wide from-purple-600 to-indigo-500 text-purple-100 px-8 p-4 m-auto'>
        <p className='relative z-10'>What are you waiting for? <Link className='font-bold' href='/login'>Create a test now!</Link></p>
        <i className='absolute very-big fas fa-fingerprint text-white opacity-10 -top-10'></i>
      </div>
    </div>
    </>
  )
}