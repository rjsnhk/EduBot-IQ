import  { useContext, useEffect, useRef } from 'react'
import { assets } from '../../public/assets/assets'
import { Context } from '../Context/Context'

const ResultData = () => {
  const ContextData = useContext(Context)
  const resultContainerRef = useRef(null) // Ref for the scrollable container

  useEffect(() => {
    if (resultContainerRef.current) {
      // Scroll to the bottom whenever ResultData changes
      resultContainerRef.current.scrollTop =
        resultContainerRef.current.scrollHeight
    }
  }, [ContextData.ResultData]) // Trigger on ResultData update
  return (
    <div className='w-[85%] mx-auto h-1/2 sm:h-1/3 absolute z-10 top-[55%] sm:top-[50%] left-[50%] sm:left-[53%] transform -translate-x-1/2 -translate-y-1/2 mt-10'>
      {!ContextData.showResult ? (
        <div className='w-full h-full flex flex-col sm:flex-row justify-center items-center gap-5'>
          <h1 className='text-2xl sm:hidden sm:text-3xl font-[600] text-white'>
            AI Suggestions
          </h1>
          <div
            onClick={() => {
              ContextData.Onsent(
                'Explain Data Structures and Algorithms with examples'
              )
            }}
            className='sm:w-1/3 w-4/5 h-1/3 sm:h-full bg-teal-100 p-5 relative rounded-2xl hover:bg-teal-200 cursor-pointer transition-all ease-in duration-100'
          >
            <p className='text-lg font-medium text-center text-black'>
              Explain Data Structures and Algorithms with examples
            </p>
            <div className='sm:h-1/4 h-10 w-10 sm:w-1/5 flex justify-center items-center bg-white absolute bottom-2 right-2 rounded-full'>
              <img src={assets.compass_icon} alt='' className='h-3/5 w-3/5' />
            </div>
          </div>
          <div
            onClick={() => {
              ContextData.Onsent('Summarize the key concepts of Operating Systems')
            }}
            className='sm:w-1/3 sm:h-full w-4/5 h-1/3 bg-sky-200 p-5 relative rounded-2xl  sm:block hover:bg-sky-300 cursor-pointer transition-all ease-in duration-100'
          >
            <p className='text-lg font-medium text-center text-black'>
              Summarize the key concepts of Operating Systems
            </p>
            <div className='sm:h-1/4 h-10 w-10 sm:w-1/5 flex justify-center items-center bg-white absolute bottom-2 right-2 rounded-full'>
              <img src={assets.code_icon} alt='' className='h-3/5 w-3/5' />
            </div>
          </div>
          <div
            onClick={() => {
              ContextData.Onsent(
                'What are the most asked coding interview questions in 2025?'
              )
            }}
            className='w-1/3 h-full hidden sm:block bg-amber-50 p-5 relative rounded-2xl hover:bg-amber-100 cursor-pointer transition-all ease-in duration-100'
          >
            <p className='text-lg font-medium text-center text-black'>
              What are the most asked coding interview questions in 2025?
            </p>
            <div className='h-1/4 w-1/5 hidden sm:flex justify-center items-center bg-white absolute bottom-2 right-2 rounded-full'>
              <img src={assets.message_icon} alt='' className='h-3/5 w-3/5' />
            </div>
          </div>
          <div
            onClick={() => {
              ContextData.Onsent(
                'AI Suggestions : Based on your conversation with me'
              )
            }}
            className='w-4/5 sm:w-1/3 hidden sm:h-full bg-rose-100 p-3 sm:p-5 relative rounded-2xl sm:block hover:bg-rose-200 cursor-pointer transition-all ease-in duration-100'
          >
            <p className='text-lg font-medium text-center text-black'>
              AI Suggestions : Based on your conversation with me
            </p>
            <div className='h-1/4 w-1/5 hidden sm:flex justify-center items-center bg-white absolute bottom-2 right-2 rounded-full'>
              <img src={assets.bulb_icon} alt='' className='h-3/5 w-3/5' />
            </div>
          </div>
        </div>
      ) : (
        <div className='w-[100%] sm:w-[80%] h-full p-0 sm:p-5 sm:mx-auto'>
          <div className='w-full flex items-center gap-3 sm:gap-4'>
            <img
              src={assets.user_icon}
              alt=''
              className='h-8 w-8 rounded-full'
            />
            <h1 className='text-xl sm:text-4xl font-bold ml-2 text-center title max-length-10'>
              {ContextData.RecentPromot.slice(0, 20)}...
            </h1>
          </div>
          {!ContextData.Loading ? (
            <div
              ref={resultContainerRef}
              className='w-full h-full mt-8 max-h-[75%] sm:max-h-[90%] overflow-y-scroll result-scrollbar'
            >
              <p
                className='text-base sm:text-lg font-[300] tracking-wider'
                dangerouslySetInnerHTML={{ __html: ContextData.ResultData }}
              ></p>
            </div>
          ) : (
            <div className='w-full h-full mt-8 max-h-[75%] sm:max-h-[90%] flex flex-col gap-7 sm:gap-4 items-center justify-center'>
              <hr className='w-full p-5 sm:p-3 hrs' />
              <hr className='w-full p-5 sm:p-3 hrs' />
              <hr className='w-full p-5 sm:p-3 hrs' />
              <hr className='w-full sm:hidden p-5 sm:p-3 hrs' />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ResultData
