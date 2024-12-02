
// import siteMetadata from '@/data/siteMetadata' 
import PreE from '@/components/PreE'
import { PageSEO } from '@/components/SEO'
import { useRef, useState } from 'react'


export default function EmailExtractor() {

    const inputEl = useRef(null)
    const outputEl = useRef(null)
    const [error, setError] = useState(false)
    const [showCopy, setShowCopy] = useState(false)
    const [message, setMessage] = useState('')


    const Extract = (e) => {
        e.preventDefault()

        const output = outputEl.current
        const inputText = inputEl.current.value

        output.classList.add("hidden")

        if (inputText != '') {
            let inputTextArr = inputText.match(/\S+@\S+\.\S+/g)
            if (inputTextArr) {
                output.value = inputTextArr.join('\n')
                output.classList.remove("hidden")
                setShowCopy(true)
            } else {
                setShowCopy(false)
                setError(true)
                setMessage("No Emails Were Found In The Provided Text")
            }
        } else {
            setShowCopy(false)
            setError(true)
            setMessage("Enter The Text To Extract")
        }

        setTimeout(() => {
            setError(false)
            setMessage("")
        }, 3000);

    }


    return (
        <>
            <PageSEO title={"Email Address Extractor"} description={"Email address extractor"} />
            <div className="shadow-lg mb-2">
                <div className=" bg-primary-500 mb-2">
                    <div className="p-3 justify">

                        <h3 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-9 md:text-2xl md:leading-9">Email Address Extractor Tool</h3>

                        <p>Ajemark Hub Email Extractor Tool will help you extract emails in files or Text documents. Emails are improtant for online marketing, thus our tool will be useful for you if want to extract emails. </p>
                    </div>
                </div>

                <form className="flex flex-col p-2 mx-auto mt-2 sm:max-w-xl lg:max-w-3xl" >
                    <div>
                        <label className="sr-only" htmlFor="text_input">
                            Text To Count
                        </label>
                        <textarea
                            className="w-full my-4 border-2 rounded-md px-4  focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                            id="text_input"
                            name="text"
                            placeholder={"Enter Text To Count"}
                            ref={inputEl}
                            rows={10}
                            required
                            type="text"
                        />


                    </div>
                    <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
                        <button
                            className={`loader w-40 m-auto rounded-md bg-primary-500 py-3 px-4 mb-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
                            type="submit"
                            onClick={e => Extract(e)}
                        >
                            <span className="btn__text">{'Extract Emails'}</span>
                        </button>
                    </div>
                    <div>
                        <PreE ele={outputEl} showCopy={showCopy}>
                            <textarea
                                className="w-full hidden my-2 border-2 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                                id="text_input"
                                name="text"
                                ref={outputEl}
                                rows={10}
                                type="text"
                            />

                        </PreE>
                    </div>
                </form>
                {error && (
                    <div className="w-72 mx-auto text-center pb-5 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
                )}
            </div>
        </>
    )
}
