import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import './Message.css'

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
      <div>
        {messageList.map((message) => {
          return (
            <div key={message.id} className="myChatMessage">
              <h4 className="name1">{message.name}</h4>
              <p className="message1">{message.text}</p>
            </div>
          )
        })}
      </div>
      <div>
        <Form addState={addState} />
      </div>
    </div>
  )
}

export default MessageChat
