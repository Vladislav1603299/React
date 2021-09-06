import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import Message from './Message'

function MessageChat() {
  const [messageList, setMessageList] = useState([])
  const addState = (newMessage) => {
    setMessageList([...messageList, newMessage])
  }

  useEffect(() => {
    if (messageList.length !== 0) {
      const timer = setTimeout(() => {
        alert('Какой-то текст')
        console.log(messageList)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [messageList])

  return (
    <div>
      <Message messageList={messageList} />
      <Form addState={addState} />
    </div>
  )
}

export default MessageChat
