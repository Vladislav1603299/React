import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState([]);

  const newMessage = (e) => {
    setMessage({ name: "Vlad", userMessage: e.target.value });
  };

  const onClick = () => {
    if (message.userMessage !== undefined) {
      let idBlock = document.getElementById("block");
      let newBlock = document.createElement("div");
      newBlock.className = "nameMessage1";
      newBlock.innerHTML = `<h4 class ="name1">${message.name}</h4><p class ="message1">${message.userMessage}</p>`;
      idBlock.prepend(newBlock);

      setTimeout(() => {
        let idBlock = document.getElementById("block");
        let newBlock = document.createElement("div");
        newBlock.className = "nameMessage2";
        newBlock.innerHTML = `<h4 class ="name2">Оleg</h4><p class ="message2">Какой-то текст</p>`;
        idBlock.prepend(newBlock);
      }, 1500);
    }
    console.log(message);
    document.getElementsByTagName("input")[0].value = "";
    document.getElementById("input1").focus();
  };

  return (
    <div className="App">
      <header className="App-header">
        <header className="header">Chat</header>
        <div id="block"></div>
        <div className="inputButton">
          <input
            id="input1"
            placeholder="Введите сообщение"
            autoFocus
            className="input"
            type="text"
            value={message.userMessage}
            onChange={newMessage}
          />
          <button className="button" onClick={onClick}></button>
        </div>
      </header>
    </div>
  );
}

export default App;
