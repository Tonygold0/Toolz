
import { PageSEO } from '@/components/SEO'
import { useRef, useState } from 'react'


export default function EmailExtractor() {

    const inputEl = useRef(null)
    const outputEl = useRef(null)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    const [chars, setChars] = useState(0)
    const [charsWS, setCharsWS] = useState(0)
    const [words, setWords] = useState(0)
    const [pCnt, setPCnt] = useState(0)



    const Count = (e) => {
        e.preventDefault()


        const input = inputEl.current.value


        if (input == "") {
            return (0)
        }
        console.log(input == '')

        e.target.classList.add("btn_loading")

        setTimeout(() => {
            e.target.classList.remove("btn_loading")
            setCharsWS(input.length)

            let charsCnt = 0
            for (let i = 0; i < input.length; i++) {
                if (input[i] != ' ' && input[i] != '\n') charsCnt++
            }
            setChars(charsCnt)

            setWords(input.match(/\w\S*/g).length)

            let pCnts = 0
            input.split('\n').forEach((p) => {
                if (p != '') pCnts++
            })
            setPCnt(pCnts)
        }, 2000);

    }




    return (
        <>
            <PageSEO title={"Words Counter Online Tool ~ AH-Toolz.com"} description={"Words Counter Online Tool ~ AH-Toolz.com"} />

            <div className="shadow-lg mb-2">
                <div className=" bg-primary-500 mb-2">
                    <div className="p-3 justify">

                        <h3 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-9 md:text-2xl md:leading-9">Words Counter Tool</h3>

                        <p>Ajemark Hub Word Counter Tool is at your service. Today, posting in the social media has specific limits that you can go beyond. Also in writing a article, if theres is a minimun of words required, you need to kmow how many words you have gotten, thus the need to use a word counter tool, We are indeed in the age of word counting! Use our Word Counter Tool to assist you all the way.</p>
                    </div>
                </div>

                <form className="flex flex-col p-2 mx-auto mt-2 sm:max-w-xl lg:max-w-3xl" >
                    <div className="flex flex-wrap">
                        <div className="bg-body cnt card card-text p-2 font-weight-bold text-muted">
                            Words <span className="p-1 bg-primary-200">{words}</span>
                        </div>
                        <div className="bg-body cnt card card-text p-2 font-weight-bold text-muted">
                            Paragraphs <span className="p-1 bg-primary-200">{pCnt}</span>
                        </div>
                        <div className="bg-body cnt card card-text p-2 font-weight-bold text-muted">
                            Characters <span className="p-1 bg-primary-200">{chars}</span>
                        </div>
                        <div className="bg-body lcnt cnt card card-text p-2 font-weight-bold text-muted">
                            Characters (with spaces) <span className="p-1 bg-primary-200">{charsWS}</span>
                        </div>
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="text_input">
                            Text To Count
                        </label>
                        <textarea
                            autoComplete="text"
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
                            onClick={e => Count(e)}
                        >
                            <span className="btn__text">{'Count'}</span>
                        </button>
                    </div>
                </form>
                {error && (
                    <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
                )}


            </div>


        </>
    )
}
