import { useState, useContext } from 'react'
import { assets } from '../../public/assets/assets'
import { Context } from '../Context/Context'

const SliderBar = () => {
  const [extended, setExtended] = useState(false)
  const ContextData = useContext(Context)

  const toggleExtended = () => {
    setExtended(!extended)
  }

  const loadPromot = async promot => {
    ContextData.setRecentPromot(promot)
    await ContextData.Onsent(promot)
  }

  return (
    <>
      <div className='sm:hidden fixed top-8 left-5 z-50'>
        <img
          src={assets.menu_icon}
          alt='menu icon'
          className='w-7 h-7 cursor-pointer'
          onClick={toggleExtended}
        />
      </div>
      <div
        className={`${
          extended
            ? 'sm:w-[300px] flex sm:flex w-[350px] items-start justify-start'
            : 'sm:w-[100px] hidden sm:flex w-[0px] items-center '
        } h-screen flex flex-col justify-between bg-[#1C1C1C] p-4 sidebar transition-all duration-300 ease-in-out absolute z-50 `}
      >
        {/* Top Section */}
        <div className='h-1/4 w-full flex flex-col gap-8 mt-5'>
          {/* Menu Icon */}
          <div
            className={`flex items-center ${
              extended ? 'justify-start' : 'justify-center'
            }`}
          >
            <img
              src={extended ? assets.cross_icon : assets.menu_icon}
              alt='menu icon'
              className={`${
                extended ? 'w-7 h-7' : 'w-6 h-6 cursor-pointer'
              } cursor-pointer`}
              onClick={toggleExtended}
            />
          </div>

          {/* Create New Chat */}
          <div onClick={toggleExtended}
            className={`flex gap-5 items-center bg-[#2c2b2bd3]  hover:bg-[#414141] cursor-pointer rounded-full p-4 w-full ${
              extended ? 'justify-start' : 'justify-center'
            }`}
          >
            <img
              src={assets.plus_icon}
              alt='plus icon'
              className='w-6 h-6'
              onClick={ContextData.NewChat}
            />
            {extended && (
              <h3
                onClick={() => {
                  ContextData.NewChat()
                }}
                className='text-white'
              >
                Create a new chat
              </h3>
            )}
          </div>
          {/* "Recent" and "Chat History" Section */}
        </div>
        {extended && (
  <>
    <h1 className='text-xl font-bold text-white p-2'>Recent</h1>
    <div className='w-full flex flex-col gap-4 overflow-y-scroll h-1/2 result-scrollbar'>
      {ContextData.prevPromot.map((item, index) => (
        <div
          onClick={() => {
            toggleExtended();
            loadPromot(item);
          }}
          className='p-4 bg-[#414141] rounded-full w-[90%] hover:bg-[#535353] cursor-pointer'
          key={index}
        >
          <h5 className='text-white text-base'>{item.slice(0, 15)}...</h5>
        </div>
      ))}
    </div>
  </>
)}

        {/* Middle Section */}
        <div className='w-full flex flex-col relative bottom-0'>
          {/* History */}
          <div onClick={toggleExtended}
            className={`hover:bg-[#535353] cursor-pointer rounded-full p-4 w-full flex gap-5 items-center ${
              extended ? 'justify-start' : 'justify-center'
            }`}
          >
            <img
              src={assets.history_icon}
              alt='history icon'
              className='w-6 h-6'
            />
            {extended && <h3 className='text-white'>History</h3>}
          </div>

          {/* Support */}
          <div onClick={toggleExtended}
            className={`hover:bg-[#535353] cursor-pointer rounded-full p-4 w-full flex gap-5 items-center ${
              extended ? 'justify-start' : 'justify-center'
            }`}
          >
            <img
              src={assets.question_icon}
              alt='support icon'
              className='w-6 h-6'
            />
            {extended && <h3 className='text-white'>Support</h3>}
          </div>

          {/* Settings */}
          <div onClick={toggleExtended}
            className={`hover:bg-[#535353] cursor-pointer rounded-full p-4 w-full flex gap-5 items-center ${
              extended ? 'justify-start' : 'justify-center'
            }`}
          >
            <img
              src={assets.setting_icon}
              alt='settings icon'
              className='w-6 h-6'
            />
            {extended && <h3 className='text-white'>Setting</h3>}
          </div>
        </div>
      </div>
    </>
  )
}

export default SliderBar
