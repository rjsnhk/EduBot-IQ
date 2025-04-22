import { useState } from 'react'

const Form = ({LoginHandler}) => {
    const [Name, setName] = useState("")
    const FormHandler = (e)=>{
        e.preventDefault()
        setName("")
        LoginHandler(Name)
    }
  return (
    <div className='h-screen w-full'>
      <div className='w-full h-full bg-[url("../public/bg2.jpg")] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
        <form className='h-1/2 sm:h-2/3 w-[90%] sm:w-3/4 rounded-3xl flex justify-center items-center flex-col frm' onSubmit={FormHandler}>
          <h1 className='text-4xl sm:text-6xl text-white font-bold mb-5 text-center'>Welcome to EduBotIQ</h1>
          <input
            type='text' required maxLength={10}
            placeholder='Enter your name'
            className='w-4/5 sm:w-2/3 p-4 sm:p-6 m-5 rounded-lg border-none outline-none text-black font-semibold'
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type='submit'
            className='w-2/3 p-4 sm:p-6 m-5 rounded-lg bg-[#E5E5E5] text-black font-semibold active:scale-90 transition-all ease-in-out duration-200'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
