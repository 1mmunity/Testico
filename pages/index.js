import ButtonLink from "../components/ButtonLink";
import Link from "../components/Link";
import React from "react";
import Markdown from "../components/Markdown";
import Radio from "../components/Radio";
import TextareaAutosize from "react-textarea-autosize";

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
        <div className='grid lg:grid-cols-3 gap-8 mb-14'>
          <div className='p-5 bg-gray-800 shadow-md overflow-hidden rounded-lg text-justify sm:text-lg w-full relative'>
            <input type='checkbox' className='absolute -top-1.5 right-3 appearance-none cursor-pointer text-gray-700 checked:text-green-400 fas fa-bookmark text-6xl' />
            <div className='py-1 px-2 text-green-400 bg-green-400/5 rounded-lg text-xs w-max'>5 Points</div>
            <Markdown className='mt-2 mb-4 text-white font-light tracking-wide'>
              {markdownExample}
            </Markdown>
            <div>
              <p className='text-gray-600 uppercase font-bold text-sm select-none'>Answer</p>
              <Radio name='q' defaultChecked>{`1, 4, 6 **(By the way, the answers are markdown supported too.)**`}</Radio>
              <Radio name='q'>![Number Example](https://i.postimg.cc/FK90yx5z/num-Example2.png)</Radio>
              <Radio name='q'>1, 5, 6</Radio>
              <Radio name='q'>{`
| Answer 1 | Answer 2 | Answer 3 | Another Cell |
|---|---|---|---|
| 1 | 4 | 8 | Something |
`}</Radio>
            </div>
          </div>
          <div className='bg-gray-800 shadow-md rounded-lg w-full relative'>
            <div className='w-full p-5 rounded-t-lg relative'>
              <p className='text-center text-gray-600 text-lg font-bold'>
                <i className='fas fa-comment-alt mr-1'></i> Chat
              </p>
              <i className='fas fa-times cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-gray-500'></i>
            </div>
            <div className='p-5 pb-44 tracking-wide font-light'>
              <div className='mb-5'>
                <p className='text-gray-500 text-xs font-bold'>{`Williams `}<span className='text-green-400'>(Teacher)</span></p>
                <div className='text-white/75 mt-1 text-sm rounded-lg rounded-tl-none w-full'>
                  Hello all! Everything okay?
                </div>
              </div>
              <div className='mb-5 text-right'>
                <p className='text-gray-500 text-xs font-bold'>{`You `}<span className='text-yellow-400'>(to Williams)</span></p>
                <div className='text-white/75 mt-1 text-sm rounded-lg rounded-tr-none w-full'>
                  Hello Mr. Williams, can you check out Question #4?
                </div>
              </div>
              <div className='mb-5'>
                <p className='text-gray-500 text-xs font-bold'>{`Williams `}<span className='text-green-400'>(Teacher)</span> <span className='text-yellow-400'>(to You)</span></p>
                <div className='text-white/75 mt-1 text-sm rounded-lg rounded-tl-none w-full'>
                  Ah! I see. Thanks for notifying me!
                </div>
              </div>
              <div className='mb-5'>
                <p className='text-gray-500 text-xs font-bold'>{`Williams `}<span className='text-green-400'>(Teacher)</span></p>
                <div className='text-white/75 mt-1 text-sm rounded-lg rounded-tl-none w-full'>
                  There was a spelling mistake in #4. I have already updated the test. If there are any more problems,
                  please let me know.
                </div>
              </div>
            </div>
            <div className='bg-gray-600/10 p-5 rounded-b-lg absolute bottom-0 w-full'>
              <p className='mb-1 text-white font-light tracking-wide text-xs'><span className='text-green-500 font-black'>Student:</span> You can only send chats to teachers.</p>
              <TextareaAutosize 
              className='rounded-xl bg-gray-700 disabled:cursor-not-allowed outline-none resize-none w-full py-2 px-3 text-white text-sm font-light tracking-wide'
              maxRows={4}
              disabled
              />
              <p className='text-center text-xs text-gray-500'>click <span className='font-bold'>enter</span> to send.</p>
            </div>
          </div>
          <div className='p-5 bg-gray-800 rounded-lg shadow-md'>
            <div className='text-center text-gray-600 text-lg font-bold mb-5'>
              <i className='fas fa-clipboard-list mr-1'></i> Logs
            </div>
            {[{
              test: 'Biology I',
              name: 'Jeremy'
            },
            {
              test: 'Mathematics I',
              name: 'John' 
            },
            {
              test: 'Mathematics I',
              name: 'Lilly'
            },
            {
              test: 'Biology I',
              name: 'Bob'
            }].map((v, i) => <div className='p-3 bg-gray-700 mb-2 hover:-translate-y-1 border-2 border-gray-600 duration-150 hover:border-green-400' key={i}>
              <p className='text-xs text-green-400 bg-green-400/10 w-max px-2 py-0.5 rounded'>{v.test}</p>
              <p className='text-light tracking-wide mt-2 text-sm text-gray-300'><span className='font-bold'>{v.name}</span> has submitted the test.</p>
            </div>)}
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