// import React from 'react'
import SliderBar from './SliderBar'
import Name from './Name'
import ResultData from './ResultData'
import Chat from './Chat'
import Header from './Header'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className='h-screen w-full flex'>
        <SliderBar />
        <Name />
      </div>
      <ResultData />
      <Chat />
      <Footer />
    </>
  )
}

export default HomePage
