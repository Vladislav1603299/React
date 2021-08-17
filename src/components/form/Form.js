import { useState } from "react";

const Form = ({ addMessageList }) => {
  const [message, setMessage] = useState([{ autor: "", text: "" }]);

  const addNameMessage = (e) => {
    setMessage({ autor: "Vlad", text: e.target.value });
  };

  const addMessage = () => {
    addMessageList(message);
    setMessage({ autor: "", text: "" });
  };

  return (
    <>
      <input type="text" value={message.text} onChange={addNameMessage} />
      <button onClick={addMessage}>Отправить</button>
    </>
  );
};

export default Form;
