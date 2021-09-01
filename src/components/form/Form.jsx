import { useEffect, useRef, useState } from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import '../Form/Form.css'
import generateUUID from '../GenerateID/Generate'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

const Form = (props) => {
  const classes = useStyles()
  const [message, setMessage] = useState({
    name: 'Vlad',
    text: '',
    id: generateUUID(10),
  })

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [message])

  const addText = (e) => {
    setMessage({ ...message, text: e.target.value })
  }

  const sendMessage = () => {
    props.addState(message)
    setMessage({ name: 'Vlad', text: '', id: generateUUID(10) })
    console.log(message)
  }
  return (
    <div className="buttonInput">
      <TextField
        id="standard-basic"
        label="Введите сообщение"
        className="input"
        onChange={addText}
        value={message.text}
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
  )
}

export default Form
