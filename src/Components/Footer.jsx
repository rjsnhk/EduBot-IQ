// import React from 'react'

const Footer = () => {
  return (
    <div className='h-fit-content w-full absolute bottom-2'>
      <p className='text-center text-xs font-medium mt-4 sm:text-sm'>
        Copyright © {new Date().getFullYear()} EduBotIQ This is a Made by{' '}
        <a href='https://www.linkedin.com/in/rjsnhk/' target='_blank' className='font-bold text-sky-500'>
          rjsnhk
        </a>
      </p>
    </div>
  )
}

export default Footer
