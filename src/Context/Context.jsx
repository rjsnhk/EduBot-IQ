import { createContext, useState } from 'react'
import run from '../Config/Api'

export const Context = createContext()

const ContextProvider = props => {
  const [input, setinput] = useState('')
  const [RecentPromot, setRecentPromot] = useState('')
  const [prevPromot, setprevPromot] = useState([])
  const [showResult, setshowResult] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [ResultData, setResultData] = useState('')

  const delaypara = (idx, nextText) => {
    setTimeout(() => {
      setResultData(prev => prev + nextText)
    }, 25 * idx)
  }

  const NewChat = () => {
    setLoading(false)
    setshowResult(false)
  }

  const Onsent = async promot => {
    setResultData('')
    setLoading(true)
    setshowResult(true)
    let response
    if (promot !== undefined) {
      response = await run(promot)
      setprevPromot(prev => (prev.includes(promot) ? prev : [...prev, promot]))
      setRecentPromot(promot)
    } else {
      setprevPromot(prev => [...prev, input])
      setRecentPromot(input)
      response = await run(input)
    }

    let ResponseArray = response.split('**')
    let NewResponse = ''
    for (let i = 0; i < ResponseArray.length; i++) {
      if (i == 0 || i % 2 !== 1) {
        NewResponse += ResponseArray[i]
      } else {
        NewResponse += '<b>' + ResponseArray[i] + '</b>'
      }
    }
    let NewResponse2 = NewResponse.split('*').join('<br>')
    let NewResponseArray = NewResponse2.split(' ')
    for (let i = 0; i < NewResponseArray.length; i++) {
      const nextText = NewResponseArray[i]
      delaypara(i, nextText + ' ')
    }
    setLoading(false)
    setinput('')
  }

  const contextvalue = {
    prevPromot,
    setprevPromot,
    Onsent,
    setRecentPromot,
    RecentPromot,
    showResult,
    setshowResult,
    Loading,
    ResultData,
    input,
    setinput,
    NewChat
  }

  return (
    <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
  )
}

export default ContextProvider
