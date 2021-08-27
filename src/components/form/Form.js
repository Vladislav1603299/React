import { useState } from "react";
import { TextField } from "@material-ui/core";
import "../Form/Form.css";

const Form = (props) => {
  const [text, setText] = useState({ name: "Vlad", userText: "" });

  const addText = (e) => {
    setText({ ...text, userText: e.target.value });
  };

  const sendMessage = () => {
    props.addState(text);
    setText({ name: "Vlad", userText: "" });
    document.getElementById("standard-basic").focus();
  };
  return (
    <div className="buttonInput">
      {/*<input
       // placeholder="Введите сообщение"
       // className="input"
       // id="input1"
      //  autoFocus
        type="text"
      //  onChange={addText}
      //  value={text.userText}
      ></input>*/}
      <TextField
        autoFocus
        id="standard-basic"
        label="Введите сообщение"
        className="input"
        onChange={addText}
        value={text.userText}
      />
      <button className="button" onClick={sendMessage}></button>
    </div>
  );
};

export default Form;
