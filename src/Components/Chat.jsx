import { useState } from 'react'
import { assets } from '../../public/assets/assets'
import { Context } from '../Context/Context'
import { useContext } from 'react'
import { Bounce, Slide, toast, ToastContainer } from 'react-toastify'

const Chat = () => {
  const ContextData = useContext(Context)
  const [message, setmessage] = useState('')
  const FormHandler = e => {
    e.preventDefault()
    ContextData.setinput(message)
    setmessage('')
    if (ContextData.RecentPromot === '') {
      toast.success('Welcome To EduBotIQ', {
        position: 'top-right',
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Slide
      })
      toast.info('Accepted Terms And Conditions.', {
        position: 'top-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce
      })
    }
  }
  return (
    <div className='absolute w-[100%] sm:w-[80%] md:w-[90%] md:p-2 h-1/3 sm:h-2/4 bottom-0 right-0 sm:right-24 md:right-5 flex flex-col justify-end items-center mb-14 p-2 sm:p-0'>
      <div className='w-full sm:w-5/6 h-1/5 rounded-full bg-[#1C1C1C] flex items-center justify-between'>
        <form
          className='w-full h-full flex items-center justify-between'
          onSubmit={FormHandler}
        >
          <input
            type='text'
            placeholder='Message EndGaming AI'
            className='w-3/4 bg-transparent p-2 m-5 outline-none font-semibold'
            value={message}
            onChange={e => setmessage(e.target.value)}
          />
          <button
            className='w-1/5 flex items-center justify-center mr-5 sm:mr-0'
            onClick={() => {
              ContextData.Onsent(message)
              setmessage('')
            }}
          >
            <img src={assets.send_icon} alt='' />
          </button>
          <button
            className='relative right-5 sm:right-16 w-8 h-8 bg-white rounded-full p-2'
            onClick={() => {
              ContextData.setshowResult(false)
            }}
          >
            <img src={assets.stop_icon} alt='' />
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Chat
