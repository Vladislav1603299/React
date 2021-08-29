import { useEffect, useRef, useState } from "react";
import { TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../Form/Form.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Form = (props) => {
  const classes = useStyles();
  const [text, setText] = useState({ name: "Vlad", userText: "" });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [text]);

  const addText = (e) => {
    setText({ ...text, userText: e.target.value });
  };

  const sendMessage = () => {
    props.addState(text);
    setText({ name: "Vlad", userText: "" });
  };
  return (
    <div className="buttonInput">
      <TextField
        id="standard-basic"
        label="Введите сообщение"
        className="input"
        onChange={addText}
        value={text.userText}
        inputRef={inputRef}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={sendMessage}
      >
        Send
      </Button>
    </div>
  );
};

export default Form;
