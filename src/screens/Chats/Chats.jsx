import React, { useState } from 'react'
import { INITIAL_CHATS } from '../../routing/Constants/Constants'
import './Chats.css'
import { BrowserRouter } from 'react-router-dom'
import ChatList from '../../components/ChatsFile/ChatList'
import ChatsRouter from '../../routing/ChatsRouter'

const Chats = () => {
  const [chat, setChat] = useState(INITIAL_CHATS)

  const changeMessageList = () => {
    setChat(INITIAL_CHATS.push({ name: '', text: '', way: '', id: '' }))
  }
  const deleteMessageList = () => {
    setChat(INITIAL_CHATS.pop({ name: '', text: '', way: '', id: '' }))
  }

  return (
    <BrowserRouter>
      <div>
        <div className="list">
          <div>
            <ChatList chat={chat} />
          </div>
          <div>
            <ChatsRouter />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Chats
