import { assets } from '../../public/assets/assets'

const Header = () => {
  const LogoutHandler = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className='sm:h-32 h-24 w-[93%] absolute sm:left-24 left-7 sm:right-0 sm:w-[93%] md:w-[94%] p-4 sm:p-2'>
      <div className='w-full h-full flex items-center justify-between gap-10 sm:gap-0 p-8 sm:p-6'>
        <h1
          className='text-xl sm:text-3xl md:text-2xl font-bold text-white cursor-pointer'
        >
          EduBotIQ
        </h1>
        <div className='flex items-center gap-7'>
          <img
            src={assets.user_icon}
            alt=''
            className='sm:block hidden w-8 h-8 object-cover rounded-full cursor-pointer'
          />
          <button
            type='button'
            onClick={LogoutHandler}
            className='px-3 sm:px-8 py-3 sm:py-4 rounded-md bg-red-500 font-semibold scale-100 active:scale-90 transition-all ease-in-out duration-300'
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
