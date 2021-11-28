import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import Link from "./Link";

const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <div className='py-2 relative'>
        <p className='uppercase text-gray-800 absolute text-xs z-10 top-5 right-2 select-none font-bold font-sans'>{match[1]}</p>
        <SyntaxHighlighter
          style={CodeStyle}
          language={match[1]}
          PreTag='div'
          className='rounded-lg relative'
          showLineNumbers={true}
          wrapLines={true}
          lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }}}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    ) : (
      <span className='py-0.5 px-2 text-sm bg-pink-500/10 rounded text-pink-500 font-medium font-mono' {...props}>
        {children}
      </span>
    )
  },
  strong({ node, ...props }) {
    return <span className='font-bold' {...props}/>
  },
  hr({ node, ...props }) {
    return <div className='border-t-2 border-gray-700 my-4' {...props}/>
  },
  table({ node, ...props }) {
    return <table className='bg-gray-700 block text-xs sm:text-sm break-all' {...props}/>
  },
  th({ node, children, ...props }) {
    return <th className='border border-gray-500'>
      <div className='px-1'>
        {children}
      </div>
    </th>
  },
  td({ node, children, ...props }) {
    return <td className='border border-gray-500'>
      <div className='px-1'>
        {children}
      </div>
    </td>
  },
  a({ node, ...props }) {
    return <Link {...props}/>
  },
  h1({ node, ...props }) {
    return <div className='font-bold text-4xl my-3' {...props} />
  },
  h2({ node, ...props }) {
    return <div className='font-bold text-3xl my-3' {...props} />
  },
  h3({ node, ...props }) {
    return <div className='font-bold text-2xl my-2' {...props} />
  },
  h4({ node, ...props }) {
    return <div className='font-bold text-xl' {...props} />
  },
  h5({ node, ...props }) {
    return <div className='font-bold text-base' {...props} />
  },
  h6({ node, ...props }) {
    return <div className='font-bold text-sm' {...props} />
  },
  blockquote({ node, ...props }) {
    return <blockquote className='border-l-2 border-green-400 bg-green-400/5 p-2 px-4 my-3 rounded-r' {...props}/>
  },
  img({ node, ...props }) {
    return <img className='rounded-lg block shadow-md' {...props}/>
  }
}

export default function Markdown({ className, children }) {
  return <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={components}
  className={className}
  >
    {children}
  </ReactMarkdown>
}