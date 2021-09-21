import { useEffect, useState, useRef } from 'react'
import firebase from 'firebase/app'
import { useDispatch } from 'react-redux'
import { TextField, Button } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import {
  addMessage,
  initMessageTracking,
  showMessages,
} from '../../Store/Messages/actions'
import './Form.css'

export const Form = ({ chatId }) => {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const ref = useRef(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initMessageTracking())
    /*firebase
      .database()
      .ref('messages')
      .child(chatId)
      .on('value', (snapshot) => {
        const newMessages = []
        snapshot.forEach((entry) => {
          messages.push(entry.val())
        })

        return newMessages
      })*/
  }, [])

  const onAddMessage = (event) => {
    event.preventDefault()
    dispatch(addMessage(text, author, chatId))
    dispatch(showMessages(chatId))
    setText('')
    setAuthor('')

    firebase
      .database()
      .ref('messages')
      .child(chatId)
      .push({ author: author, text: text })
  }

  /*const onAddMessage = (event) => {
    event.preventDefault()
    dispatch(addMessage(text, author, chatId))
    dispatch(showMessages(chatId))
    setText('')
    setAuthor('')
  }*/

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <div className="form">
      <TextField
        id="outlined-basic"
        className="form-text"
        required={true}
        label="Message"
        variant="outlined"
        size="small"
        value={text}
        onChange={(e) => setText(e.target.value)}
        inputRef={ref}
      />
      <TextField
        id="outlined-basic"
        className="form-author"
        required={true}
        label="Author"
        variant="outlined"
        size="small"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button
        className="form-send-btn"
        variant="contained"
        type="submit"
        color="primary"
        onClick={onAddMessage}
      >
        <MailIcon />
      </Button>
    </div>
  )
}
