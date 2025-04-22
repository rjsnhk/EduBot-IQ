import React from 'react'

const Name = () => {
  const user = localStorage.getItem('user')
  return (
    <div className='h-1/4 w-fit-content absolute top-[25%] left-[50%] sm:left-[50%] z-10 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
      <h1 className='text-4xl sm:text-5xl font-bold text-white'>
        Hello <span className='wave'>👋</span>
      </h1>
      <div className='flex items-center gap-2 mt-5'>
        <h1 className='text-4xl sm:text-5xl font-bold name'>{user}</h1>
        <h1 className='text-4xl sm:text-5xl font-bold text-white bn'>💕</h1>
      </div>
    </div>
  )
}

export default Name
