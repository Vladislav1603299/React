import React, { useEffect, useState } from "react";
import AlignItemsList from "./components/Chats/Chat";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const [messageList, setMessageList] = useState([]);
  const addState = (newMessage) => {
    setMessageList([...messageList, newMessage]);
  };

  useEffect(() => {
    if (messageList.length !== 0) {
      const timer = setTimeout(() => {
        alert("Какой-то текст");
        console.log(messageList);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [messageList]);

  return (
    <div>
      <div className="list">
        <div>
          <AlignItemsList />
        </div>
        <div>
          <div>
            {messageList.map((mes, i) => {
              return (
                <div key={i} className="myChatMessage">
                  <h4 className="name1">{mes.name}</h4>
                  <p className="message1">{mes.userText}</p>
                </div>
              );
            })}
          </div>
          <div>
            <Form addState={addState} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
