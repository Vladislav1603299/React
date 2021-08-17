import { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState([]);

  const addMessage = (e) => {
    setMessage(e.target.value);
  };

  const clickMessage = () => {};

  return (
    <>
      <input type="text" value={message} onChange={addMessage} />
      <button onClick={clickMessage}>Отправить</button>
    </>
  );
};

export default Form;
