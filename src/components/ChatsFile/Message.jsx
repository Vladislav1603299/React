import './Message.css'

const Message = ({ messageList }) => {
  return (
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
  )
}

export default Message
