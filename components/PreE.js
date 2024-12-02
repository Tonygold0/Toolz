import { useState, useRef } from 'react'

const PreE = (props) => {
  const outputEl = props.ele
  const show = props.showCopy


  const textInput = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)


  const onCopy = () => {
    setCopied(true)
    const text = textInput.current?.textContent || outputEl.current?.value

    navigator.clipboard.writeText(text)
    setTimeout(() => {
      setCopied(false)
    }, 2500)
  }

  return (
    <div ref={textInput} className="relative">
      {show && (
        <button
          aria-label="Copy code"
          type="button"
          className={`absolute right-2 top-2 h-10 w-10 rounded border-2 bg-gray-700 p-1 m-1 dark:bg-gray-800 ${copied
            ? 'border-green-400 focus:border-green-400 focus:outline-none'
            : 'border-gray-300'
            }`}
          onClick={onCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className={copied ? 'text-green-400' : 'text-gray-300'}
          >
            {copied ? (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </>
            ) : (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </>
            )}
          </svg>
        </button>
      )}

      <pre>{props.children}</pre>
    </div>
  )
}

export default PreE
