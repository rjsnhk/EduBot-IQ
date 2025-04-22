import React, { useEffect, useState } from 'react'
import Form from './Components/Form'
import HomePage from './Components/HomePage'
import PreLoader from './Components/PreLoader'

const App = () => {
  const [user, setuser] = useState('')
  const [preloading, setpreloading] = useState(false)
  const LoginHandler = name => {
    setuser(name)
    localStorage.setItem('user', name)
    setpreloading(true)
  }
  useEffect(() => {
    const myuser = localStorage.getItem('user')
    if (myuser) {
      setuser(myuser)
    }
  }, [])

  const preloader = () => {
    setTimeout(() => {
      setpreloading(false)
    }, 3500)
  }

  if (preloading) {
    preloader()
    return <PreLoader />
  }

  return (
    <>
      {!user ? <Form LoginHandler={LoginHandler} /> : ''}
      {user ? <HomePage /> : ''}
    </>
  )
}

export default App
